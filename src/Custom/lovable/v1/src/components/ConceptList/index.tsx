import { Container } from '@/components/Container'
import { ConceptCard } from '../ConceptCard'
import {
  ListSection,
  ListHeader,
  ListTitle,
  ListSubtitle,
  ListGrid,
  ListMore,
} from './styles'
import { Concept } from '@/pages/Concepts/interfaces'
import { useLexicon } from 'src/Custom/Lexicon'
import { conceptListLexicon } from './lexicon'

export function ConceptList({ concepts }: { concepts: Concept[] }) {
  const { t } = useLexicon(conceptListLexicon)

  return (
    <ListSection id="concepts">
      <Container>
        <ListHeader>
          <div>
            <ListTitle>{t('conceptList.title')}</ListTitle>
            <ListSubtitle>{t('conceptList.subtitle')}</ListSubtitle>
          </div>
        </ListHeader>

        <ListGrid>
          {concepts.map((c) => (
            <ConceptCard key={c.id} concept={c} />
          ))}
        </ListGrid>

        <ListMore href="/concepts">{t('conceptList.allConcepts')}</ListMore>
      </Container>
    </ListSection>
  )
}
