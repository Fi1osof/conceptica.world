import { Container } from '@/components/Container'
import { Button, ButtonLink } from '@/components/Button'
import {
  HeroSection,
  HeroInner,
  HeroEyebrow,
  HeroTitle,
  HeroSubtitle,
  HeroSearch,
  HeroSearchInput,
  HeroActions,
  // HeroHint,
} from './styles'
import { useOpenChatWithMessage } from 'src/components/Chat/hooks/useOpenChatWithMessage'
import { useLexicon } from 'src/Custom/Lexicon'
import { mainPageLexicon } from '../lexicon'

export function Hero() {
  const { t } = useLexicon(mainPageLexicon)
  const openAiHandler = useOpenChatWithMessage()

  return (
    <HeroSection>
      <Container>
        <HeroInner>
          <HeroEyebrow>{t('block.hero.eyebrow')}</HeroEyebrow>
          <HeroTitle>{t('block.hero.title')}</HeroTitle>
          <HeroSubtitle>{t('block.hero.subtitle')}</HeroSubtitle>

          <HeroSearch role="search" onSubmit={openAiHandler}>
            <HeroSearchInput
              type="text"
              name="q"
              aria-label="Ваш вопрос"
              placeholder={t('block.hero.searchPlaceholder')}
              autoComplete="off"
            />
            <Button type="submit" variant="primary" value="">
              {t('block.hero.searchButton')}
            </Button>
          </HeroSearch>

          <HeroActions>
            <ButtonLink href="/concepts" variant="outline">
              {t('block.hero.conceptsButton')}
            </ButtonLink>
          </HeroActions>

          {/* <HeroHint href="#concepts">
            ↓ Или начните с готовых концептов
          </HeroHint> */}
        </HeroInner>
      </Container>
    </HeroSection>
  )
}
