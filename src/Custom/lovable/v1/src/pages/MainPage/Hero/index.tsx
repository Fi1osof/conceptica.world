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
  HeroHint,
} from './styles'

export function Hero() {
  return (
    <HeroSection>
      <Container>
        <HeroInner>
          <HeroEyebrow>Conceptica</HeroEyebrow>
          <HeroTitle>Что вы хотите понять?</HeroTitle>
          <HeroSubtitle>
            Спросите своими словами. AI-агент выяснит, что вы уже понимаете, и
            построит короткий путь к новому пониманию — без лишних этапов.
          </HeroSubtitle>

          <HeroSearch role="search">
            <HeroSearchInput
              type="text"
              name="q"
              aria-label="Ваш вопрос"
              placeholder="Например: «почему меня не понимают?»"
              autoComplete="off"
            />
            <Button type="submit" variant="primary">
              Спросить ✦
            </Button>
          </HeroSearch>

          <HeroActions>
            <ButtonLink href="/concepts" variant="outline">
              Смотреть концепты →
            </ButtonLink>
          </HeroActions>

          <HeroHint href="#concepts">
            ↓ Или начните с готовых концептов
          </HeroHint>
        </HeroInner>
      </Container>
    </HeroSection>
  )
}
