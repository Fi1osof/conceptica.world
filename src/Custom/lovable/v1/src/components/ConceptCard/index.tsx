import { Concept } from '@/pages/Concepts/interfaces'
import { useAppContext } from 'src/components/AppContext'
import { formatDate } from 'src/Custom/components/LocaleSwitcher/interfaces'
import {
  CardArrowStyled,
  CardDateStyled,
  CardFootStyled,
  CardIntroStyled,
  CardStyled,
  CardTitleStyled,
} from './styles'
import { useLexicon } from 'src/Custom/Lexicon'

export function ConceptCard({ concept }: { concept: Concept }) {
  const { locale } = useAppContext()
  const { t } = useLexicon()
  const intro =
    concept.intro ??
    concept.description ??
    stripMarkdown(concept.content).slice(0, 180)

  return (
    <CardStyled href={concept.slug}>
      <CardDateStyled dateTime={concept.date}>
        {formatDate(concept.date, locale)}
      </CardDateStyled>
      <CardTitleStyled>{concept.title}</CardTitleStyled>
      <CardIntroStyled>{intro}</CardIntroStyled>
      <CardFootStyled>
        <CardArrowStyled>{t('read')} →</CardArrowStyled>
      </CardFootStyled>
    </CardStyled>
  )
}

function stripMarkdown(md: string): string {
  return md
    .replace(/^#+\s*/gm, '')
    .replace(/\s+/g, ' ')
    .trim()
}
