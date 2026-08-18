import { Container } from '@/components/Container'
import { ButtonLink } from '@/components/Button'
import { CtaWrap, CtaBox, CtaTitle, CtaText } from './styles'

export function SuggestResearchCta() {
  return (
    <CtaWrap>
      <Container>
        <CtaBox>
          <CtaTitle>Не нашли то, что вас интересует?</CtaTitle>
          <CtaText>
            Предложите тему — и, возможно, следующий концепт на Conceptica будет
            именно о ней.
          </CtaText>
          <ButtonLink href="/suggest-research" variant="primary">
            Предложить исследование ✦
          </ButtonLink>
        </CtaBox>
      </Container>
    </CtaWrap>
  )
}
