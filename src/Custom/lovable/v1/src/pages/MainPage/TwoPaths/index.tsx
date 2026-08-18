import { Container } from '@/components/Container'
import { Button, ButtonLink } from '@/components/Button'
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
import { useLexicon } from 'src/Custom/Lexicon'
import { mainPageLexicon } from '../lexicon'
import { useOpenChatWithMessage } from 'src/components/Chat/hooks/useOpenChatWithMessage'

export function TwoPaths() {
  const { t } = useLexicon(mainPageLexicon)

  const onClick = useOpenChatWithMessage()

  return (
    <PathsSection>
      <Container>
        <PathsTitle>{t('block.twoPaths.title')}</PathsTitle>
        <PathsGrid>
          <PathCard>
            <PathIcon>{t('block.twoPaths.card1.icon')}</PathIcon>
            <PathHeading>{t('block.twoPaths.card1.heading')}</PathHeading>
            <PathText>{t('block.twoPaths.card1.text')}</PathText>
            <PathFoot>
              <Button variant="primary" onClick={onClick}>
                {t('block.twoPaths.card1.button')}
              </Button>
            </PathFoot>
          </PathCard>

          <PathCard>
            <PathIcon>{t('block.twoPaths.card2.icon')}</PathIcon>
            <PathHeading>{t('block.twoPaths.card2.heading')}</PathHeading>
            <PathText>{t('block.twoPaths.card2.text')}</PathText>
            <PathFoot>
              <ButtonLink href="/concepts" variant="outline">
                {t('block.twoPaths.card2.button')}
              </ButtonLink>
            </PathFoot>
          </PathCard>
        </PathsGrid>
      </Container>
    </PathsSection>
  )
}
