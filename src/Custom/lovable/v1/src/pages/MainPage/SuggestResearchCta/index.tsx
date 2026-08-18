import { Container } from '@/components/Container'
import { ButtonLink } from '@/components/Button'
import { CtaWrap, CtaBox, CtaTitle, CtaText } from './styles'
import { useLexicon } from 'src/Custom/Lexicon'
import { mainPageLexicon } from '../lexicon'

export function SuggestResearchCta() {
  const { t } = useLexicon(mainPageLexicon)

  return (
    <CtaWrap>
      <Container>
        <CtaBox>
          <CtaTitle>{t('block.suggestResearchCta.title')}</CtaTitle>
          <CtaText>{t('block.suggestResearchCta.text')}</CtaText>
          <ButtonLink href="/suggest-research" variant="primary">
            {t('block.suggestResearchCta.button')}
          </ButtonLink>
        </CtaBox>
      </Container>
    </CtaWrap>
  )
}
