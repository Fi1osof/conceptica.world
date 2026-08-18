import { Container } from '@/components/Container'
import { ButtonLink } from '@/components/Button'
import {
  AboutSection,
  AboutGrid,
  AboutText,
  AboutEyebrow,
  AboutTitle,
  AboutBody,
} from './styles'
import { useLexicon } from 'src/Custom/Lexicon'
import { mainPageLexicon } from '../lexicon'

export function AboutBlock() {
  const { t } = useLexicon(mainPageLexicon)

  return (
    <AboutSection>
      <Container>
        <AboutGrid>
          <AboutText>
            <AboutEyebrow>{t('block.aboutBlock.eyebrow')}</AboutEyebrow>
            <AboutTitle>{t('block.aboutBlock.title')}</AboutTitle>
            <AboutBody>{t('block.aboutBlock.body')}</AboutBody>
            <ButtonLink href="/about" variant="outline">
              {t('block.aboutBlock.button')}
            </ButtonLink>
          </AboutText>
        </AboutGrid>
      </Container>
    </AboutSection>
  )
}
