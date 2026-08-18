import styled from 'styled-components'
import { theme } from '@/theme'
import { Concept } from '@/pages/Concepts/interfaces'
import { useAppContext } from 'src/components/AppContext'
import { formatDate } from 'src/Custom/components/LocaleSwitcher/interfaces'

export const Card = styled.a`
  display: flex;
  flex-direction: column;
  gap: ${theme.lovable.spacing.sm};
  padding: ${theme.lovable.spacing.md};
  background: ${theme.lovable.color.surface};
  border: 1px solid ${theme.lovable.color.border};
  border-radius: ${theme.lovable.radius.lg};
  text-decoration: none;
  color: inherit;
  transition:
    border-color ${theme.lovable.transition},
    box-shadow ${theme.lovable.transition};
  height: 100%;

  &:hover {
    border-color: ${theme.lovable.color.borderStrong};
    box-shadow: ${theme.lovable.shadow.cardHover};
  }
`

export const CardDate = styled.time`
  font-family: ${theme.lovable.font.sans};
  font-size: ${theme.lovable.fontSize.meta};
  color: ${theme.lovable.color.faint};
`

export const CardTitle = styled.h3`
  font-family: ${theme.lovable.font.serif};
  font-weight: ${theme.lovable.fontWeight.semibold};
  font-size: ${theme.lovable.fontSize.h3};
  line-height: ${theme.lovable.lineHeight.snug};
  color: ${theme.lovable.color.ink};
  margin: 0;
  text-wrap: balance;
`

export const CardIntro = styled.p`
  font-family: ${theme.lovable.font.sans};
  font-size: ${theme.lovable.fontSize.small};
  line-height: ${theme.lovable.lineHeight.base};
  color: ${theme.lovable.color.inkSoft};
  margin: 0;
  flex: 1;
`

export const CardFoot = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: ${theme.lovable.spacing.xs};
  font-family: ${theme.lovable.font.sans};
  font-size: ${theme.lovable.fontSize.meta};
`

export const CardArrow = styled.span`
  color: ${theme.lovable.color.accent};
  font-weight: ${theme.lovable.fontWeight.semibold};
`

export function ConceptCard({ concept }: { concept: Concept }) {
  const { locale } = useAppContext()
  const intro =
    concept.intro ??
    concept.description ??
    stripMarkdown(concept.content).slice(0, 180)

  return (
    <Card href={`/concepts/${concept.slug}`}>
      <CardDate dateTime={concept.date}>
        {formatDate(concept.date, locale)}
      </CardDate>
      <CardTitle>{concept.title}</CardTitle>
      <CardIntro>{intro}</CardIntro>
      <CardFoot>
        <CardArrow>Читать →</CardArrow>
      </CardFoot>
    </Card>
  )
}

function stripMarkdown(md: string): string {
  return md
    .replace(/^#+\s*/gm, '')
    .replace(/\s+/g, ' ')
    .trim()
}
