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

export function ConceptList({ concepts }: { concepts: Concept[] }) {
  return (
    <ListSection id="concepts">
      <Container>
        <ListHeader>
          <div>
            <ListTitle>Концепты</ListTitle>
            <ListSubtitle>
              Каждый концепт — одна мысль, доведённая до понимания. Без
              обязательного порядка: можно начать с любой.
            </ListSubtitle>
          </div>
        </ListHeader>

        <ListGrid>
          {concepts.map((c) => (
            <ConceptCard key={c.id} concept={c} />
          ))}
        </ListGrid>

        <ListMore href="/concepts">Все концепты →</ListMore>
      </Container>
    </ListSection>
  )
}
