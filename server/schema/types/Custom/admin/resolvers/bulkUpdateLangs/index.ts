import { KBConcept, Prisma } from '@prisma/client'
import { builder } from 'server/schema/builder'
import { KBConceptWhereInput } from 'server/schema/types/KBConcept'
import { buildKBConceptWhere } from 'server/schema/types/KBConcept/helpers/buildWhere'
import { updateConceptLang } from './helpers/updateConceptLang'
import {
  LOCALE_CODES,
  LOCALES,
} from 'src/Custom/components/LocaleSwitcher/interfaces'
import { buildValidUrisSet } from '../../../helpers/buildValidUrisSet'

builder.mutationField('adminBulkUpdateLangs', (t) =>
  t.field({
    type: 'Json',
    args: {
      where: t.arg({ type: KBConceptWhereInput, required: true }),
      limit: t.arg.int({ required: true }),
      langsLimit: t.arg.int({ required: true }),
      processAllLangs: t.arg.boolean({ required: true }),
      force: t.arg.boolean({ required: true }),
    },
    resolve: async (
      _root,
      { where: whereArg, limit, langsLimit, processAllLangs, force },
      ctx,
    ) => {
      const { currentUser, prisma } = ctx

      if (!currentUser?.sudo) {
        throw new Error('Unauthorized')
      }

      const prismaWhere: Prisma.KBConceptWhereInput = {
        ...buildKBConceptWhere(whereArg, ctx),
      }

      const where: Prisma.KBConceptWhereInput = {
        AND: [prismaWhere],
      }

      if (!force) {
        const langConditions = LOCALE_CODES.filter((c) => c !== 'ru')
          .map((c) => `"${c}" IS NULL`)
          .join(' OR ')

        const idsWithMissingLang = await prisma.$queryRaw<{ id: string }[]>`
          SELECT id FROM "KBConcept" WHERE ${Prisma.raw(langConditions)}
        `

        where.id = {
          in: idsWithMissingLang.map((r) => r.id),
        }
      }

      const concepts = await prisma.kBConcept.findMany({
        where,
        select: { id: true },
        // take: limit || undefined,
      })

      let processed = 0
      let skipped = 0
      let success = 0

      const failed: Array<{
        concept: KBConcept
        error: unknown
      }> = []

      const validUris = await buildValidUrisSet(ctx)

      for (const { id } of concepts) {
        // const result = await processOneConcept(id, prompt ?? undefined, ctx)
        // results.push(result)

        const concept = await prisma.kBConcept.findUnique({
          where: {
            id,
          },
        })

        if (!concept) {
          continue
        }

        type langKey = keyof Omit<typeof LOCALES, 'ru'>
        const allLangs = Object.keys(LOCALES).filter(
          (n): n is langKey => n !== 'ru',
        )

        const langsToProcess: langKey[] = []
        for (const lang of allLangs) {
          if (force || !concept[lang]) {
            langsToProcess.push(lang)
          }
        }

        if (langsToProcess.length === 0) {
          skipped++
          processed++
          if (limit && processed >= limit) {
            break
          }
          continue
        }

        const batchSize = langsLimit === 0 ? langsToProcess.length : langsLimit
        const batches: langKey[][] = []

        if (processAllLangs) {
          for (let i = 0; i < langsToProcess.length; i += batchSize) {
            batches.push(langsToProcess.slice(i, i + batchSize))
          }
        } else {
          batches.push(langsToProcess.slice(0, batchSize))
        }

        let conceptSuccess = false
        for (const batch of batches) {
          await updateConceptLang({
            ctx,
            concept,
            validUris,
            targetLangs: batch,
          })
            .then((r) => {
              if (r === true) {
                conceptSuccess = true
              }
            })
            .catch((error) => {
              console.error('error', error)

              failed.push({
                error: {
                  message: error.message,
                  stack: error.stack,
                },
                concept,
              })
            })
        }

        if (conceptSuccess) {
          success++
        }

        processed++

        if (limit && processed >= limit) {
          break
        }
      }

      return {
        total: concepts.length,
        processed,
        skipped,
        success,
        failed,
      }
    },
  }),
)
