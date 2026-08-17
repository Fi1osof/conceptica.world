import { KBConcept, Prisma } from '@prisma/client'
import { PrismaContext } from 'server/context/interfaces'
import {
  LLMChatMessageRole,
  LlmModel,
  LlmProvider,
} from 'server/llm/client/interfaces'
import { llmChatCompletionResolver } from 'server/schema/types/LLM/resolvers/chatCompletion'
import YAML from 'yaml'
import { LangFields } from '../interfaces'
import { removeInvalidLinks } from 'server/schema/types/Custom/helpers/validateInternalLinks'
import { LOCALES } from 'src/Custom/components/LocaleSwitcher/interfaces'

type langKey = keyof Omit<typeof LOCALES, 'ru'>

async function mergeLangFields(
  existing: LangFields | null,
  parsed: LangFields,
  validUris: Set<string>,
): Promise<LangFields> {
  const result: LangFields = { ...existing }
  if (parsed.name) {
    result.name = parsed.name.trim()
  }
  if (parsed.description) {
    result.description = parsed.description.trim()
  }
  if (parsed.intro) {
    await removeInvalidLinks(parsed.intro.trim(), validUris, true).then((r) => {
      if (r.content) {
        result.intro = r.content
      }
    })
  }
  if (parsed.content) {
    await removeInvalidLinks(parsed.content.trim(), validUris, true).then(
      (r) => {
        if (r.content) {
          result.content = r.content
        }
      },
    )
  }
  return result
}

type updateConceptLangProps = {
  ctx: PrismaContext
  concept: KBConcept
  validUris: Set<string>
  targetLangs: langKey[]
}

export async function updateConceptLang({
  ctx,
  concept,
  validUris,
  targetLangs,
}: updateConceptLangProps): Promise<true | null> {
  const { name, description, intro, content } = concept

  // const existingEn = en as LangFields | null
  // const existingVi = vi as LangFields | null

  const fieldsToTranslate: { field: string; value: string }[] = []

  if (name) {
    fieldsToTranslate.push({ field: 'name', value: name })
  }

  if (description) {
    fieldsToTranslate.push({ field: 'description', value: description })
  }

  if (intro) {
    fieldsToTranslate.push({ field: 'intro', value: intro })
  }

  if (content) {
    fieldsToTranslate.push({ field: 'content', value: content })
  }

  if (fieldsToTranslate.length === 0 || targetLangs.length === 0) {
    return null
  }

  const fieldsYaml = fieldsToTranslate
    .map(
      ({ field, value }) =>
        `${field}: |\n${value
          .split('\n')
          .map((line) => '  ' + line)
          .join('\n')}`,
    )
    .join('\n')

  const prompt = `You are a professional translator. Translate the following fields from Russian to the specified languages.

---

Source fields (in Russian):
${fieldsYaml}

---

Target languages: ${targetLangs.join(', ')}

Respond ONLY with valid YAML in the following format (no markdown code blocks, just raw YAML):
${targetLangs
  .map(
    (lang) => `${lang}:
  name: |
    translated name
  description: |
    translated description
  intro: |
    translated intro (markdown)
  content: |
    translated content (markdown)`,
  )
  .join('\n')}

Only include fields that were provided in the source. Preserve markdown and HTML formatting in intro and content fields.`

  const chatResponse = await llmChatCompletionResolver(
    null,
    {
      input: {
        provider: LlmProvider.OpenRouter,
        messages: [
          {
            role: LLMChatMessageRole.user,
            content: prompt,
          },
        ],
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        model: LlmModel.GEMINI_3_5_FLASH_LITE as any,
      },
    },
    ctx,
  )

  const responseContent = chatResponse.choices?.[0]?.message?.content

  if (!responseContent) {
    throw new Error('Can not get llm response')
  }

  const parsed: Record<string, LangFields> = YAML.parse(responseContent)

  const data: Prisma.KBConceptUpdateInput = {}

  for (const lang of targetLangs) {
    const parsedLang = parsed[lang]

    if (!parsedLang) {
      continue
    }

    const existing = concept[lang] as LangFields | null

    await mergeLangFields(existing, parsedLang, validUris)
      .then((r) => {
        if (r) {
          data[lang] = r
        }
      })
      .catch((error) => {
        console.error(error)
      })
  }

  if (Object.keys(data).length === 0) {
    return null
  }

  await ctx.prisma.kBConcept.update({
    where: { id: concept.id },
    data,
  })

  return true
}
