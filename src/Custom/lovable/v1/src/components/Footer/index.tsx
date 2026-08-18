import { Container } from '@/components/Container'
import { useLexicon } from 'src/Custom/Lexicon'
import { footerLexicon } from './lexicon'
import {
  FooterWrap,
  FooterInner,
  FooterBrand,
  FooterLogo,
  FooterTagline,
  FooterCols,
  FooterCol,
  FooterColTitle,
  FooterLink,
  FooterBottom,
  FooterCredit,
} from './styles'

export function Footer() {
  const { t } = useLexicon(footerLexicon)

  return (
    <FooterWrap>
      <Container>
        <FooterInner>
          <FooterBrand>
            <FooterLogo href="/">
              Concept<span>ica</span>
            </FooterLogo>
            <FooterTagline>{t('tagline')}</FooterTagline>
          </FooterBrand>

          <FooterCols>
            <FooterCol>
              <FooterColTitle>{t('sections.title')}</FooterColTitle>
              <FooterLink href="/concepts">{t('sections.concepts')}</FooterLink>
              <FooterLink href="/suggest-research">
                {t('sections.suggestResearch')}
              </FooterLink>
              <FooterLink href="/about">{t('sections.about')}</FooterLink>
              <FooterLink href="/support">{t('sections.support')}</FooterLink>
            </FooterCol>
          </FooterCols>
        </FooterInner>

        <FooterBottom>
          <span>© {new Date().getFullYear()} Conceptica</span>
          <span>
            <FooterCredit
              href="https://github.com/haih-net/agent"
              target="_blank"
              rel="noopener noreferrer"
            >
              Powered by HAIH Agent
            </FooterCredit>
            {' · '}
            <FooterCredit
              href="https://fi1osof.ru"
              target="_blank"
              rel="noopener noreferrer"
            >
              By 𝕱
            </FooterCredit>
          </span>
        </FooterBottom>
      </Container>
    </FooterWrap>
  )
}
