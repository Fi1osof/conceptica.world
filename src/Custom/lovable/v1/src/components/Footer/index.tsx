import { Container } from '@/components/Container'
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
  return (
    <FooterWrap>
      <Container>
        <FooterInner>
          <FooterBrand>
            <FooterLogo href="/">
              Concept<span>ica</span>
            </FooterLogo>
            <FooterTagline>
              Концепты и идеи, которые помогают смотреть на привычные вещи
              иначе.
            </FooterTagline>
          </FooterBrand>

          <FooterCols>
            <FooterCol>
              <FooterColTitle>Разделы</FooterColTitle>
              <FooterLink href="/concepts">Концепты</FooterLink>
              <FooterLink href="/suggest-research">
                Предложить исследование
              </FooterLink>
              <FooterLink href="/about">О проекте</FooterLink>
              <FooterLink href="/support">Поддержать</FooterLink>
            </FooterCol>
            <FooterCol>
              <FooterColTitle>Действия</FooterColTitle>
              <FooterLink href="/ask">Спросить AI-агента</FooterLink>
              <FooterLink href="/concepts">Читать концепты</FooterLink>
            </FooterCol>
          </FooterCols>
        </FooterInner>

        <FooterBottom>
          <span>© {new Date().getFullYear()} Conceptica</span>
          <span>
            <FooterCredit
              href="https://haih.ai"
              target="_blank"
              rel="noopener noreferrer"
            >
              Powered by HAIH Agent
            </FooterCredit>
            {' · '}
            <FooterCredit
              href="https://x.com"
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
