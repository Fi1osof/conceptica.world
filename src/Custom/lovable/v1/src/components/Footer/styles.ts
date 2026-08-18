import styled from 'styled-components'
import { theme, media } from '@/theme'

export const FooterWrap = styled.footer`
  border-top: 1px solid ${theme.lovable.color.border};
  background: ${theme.lovable.color.surfaceAlt};
  margin-top: ${theme.lovable.spacing.section};
`

export const FooterInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.lovable.spacing.lg};
  padding-block: ${theme.lovable.spacing.xl};

  ${media.md} {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`

export const FooterBrand = styled.div`
  max-width: 340px;
`

export const FooterLogo = styled.a`
  font-family: ${theme.lovable.font.serif};
  font-weight: ${theme.lovable.fontWeight.semibold};
  font-size: 1.3rem;
  color: ${theme.lovable.color.ink};
  text-decoration: none;

  span {
    color: ${theme.lovable.color.accent};
  }
`

export const FooterTagline = styled.p`
  margin-top: ${theme.lovable.spacing.sm};
  font-family: ${theme.lovable.font.sans};
  font-size: ${theme.lovable.fontSize.small};
  color: ${theme.lovable.color.muted};
  line-height: ${theme.lovable.lineHeight.base};
`

export const FooterCols = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.lovable.spacing.xl} ${theme.lovable.spacing.xl};
`

export const FooterCol = styled.nav`
  display: flex;
  flex-direction: column;
  gap: ${theme.lovable.spacing.sm};
`

export const FooterColTitle = styled.span`
  font-family: ${theme.lovable.font.sans};
  font-size: ${theme.lovable.fontSize.meta};
  font-weight: ${theme.lovable.fontWeight.semibold};
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: ${theme.lovable.color.faint};
`

export const FooterLink = styled.a`
  font-family: ${theme.lovable.font.sans};
  font-size: ${theme.lovable.fontSize.small};
  color: ${theme.lovable.color.inkSoft};
  text-decoration: none;

  &:hover {
    color: ${theme.lovable.color.ink};
  }
`

export const FooterBottom = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: ${theme.lovable.spacing.md};
  padding-block: ${theme.lovable.spacing.md};
  border-top: 1px solid ${theme.lovable.color.border};
  font-family: ${theme.lovable.font.sans};
  font-size: ${theme.lovable.fontSize.meta};
  color: ${theme.lovable.color.muted};
`

export const FooterCredit = styled.a`
  color: ${theme.lovable.color.muted};
  text-decoration: none;
  border-bottom: 1px dotted ${theme.lovable.color.borderStrong};

  &:hover {
    color: ${theme.lovable.color.inkSoft};
  }
`
