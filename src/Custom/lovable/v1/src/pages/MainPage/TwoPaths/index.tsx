import { Container } from '@/components/Container'
import { ButtonLink } from '@/components/Button'
import {
  PathsSection,
  PathsTitle,
  PathsGrid,
  PathCard,
  PathIcon,
  PathHeading,
  PathText,
  PathFoot,
} from './styles'

export function TwoPaths() {
  return (
    <PathsSection>
      <Container>
        <PathsTitle>Два сценария</PathsTitle>
        <PathsGrid>
          <PathCard>
            <PathIcon>✦</PathIcon>
            <PathHeading>Я хочу что-то понять</PathHeading>
            <PathText>
              Задайте вопрос своими словами. AI-агент подберёт концепт и соберёт
              короткое объяснение за вас.
            </PathText>
            <PathFoot>
              <ButtonLink href="/ask" variant="primary">
                Спросить AI-агента ✦
              </ButtonLink>
            </PathFoot>
          </PathCard>

          <PathCard>
            <PathIcon>❏</PathIcon>
            <PathHeading>Я хочу посмотреть идеи</PathHeading>
            <PathText>
              Листайте готовые концепты — каждый занимает пару минут. Приятно,
              как листать книгу наугад.
            </PathText>
            <PathFoot>
              <ButtonLink href="/concepts" variant="outline">
                Смотреть концепты →
              </ButtonLink>
            </PathFoot>
          </PathCard>
        </PathsGrid>
      </Container>
    </PathsSection>
  )
}
