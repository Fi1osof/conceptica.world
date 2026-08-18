import styled from 'styled-components'
import { theme, media } from '@/theme'
import Link from 'next/link'

export const HeroSection = styled.section`
  padding-block: ${theme.lovable.spacing.xxl} ${theme.lovable.spacing.section};
  background:
    radial-gradient(
      120% 80% at 50% -10%,
      ${theme.lovable.color.accentSoft} 0%,
      transparent 60%
    ),
    ${theme.lovable.color.bg};
`

export const HeroInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: ${theme.lovable.spacing.md};
`

export const HeroEyebrow = styled.span`
  font-family: ${theme.lovable.font.sans};
  font-size: ${theme.lovable.fontSize.meta};
  font-weight: ${theme.lovable.fontWeight.semibold};
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${theme.lovable.color.accent};
`

export const HeroTitle = styled.h1`
  font-family: ${theme.lovable.font.serif};
  font-weight: ${theme.lovable.fontWeight.semibold};
  font-size: ${theme.lovable.fontSize.h1};
  line-height: ${theme.lovable.lineHeight.tight};
  letter-spacing: -0.02em;
  color: ${theme.lovable.color.ink};
  max-width: 16ch;
  margin: 0;

  ${media.md} {
    font-size: 2.75rem;
  }
  ${media.lg} {
    font-size: 3.25rem;
  }
`

export const HeroSubtitle = styled.p`
  font-family: ${theme.lovable.font.sans};
  font-size: ${theme.lovable.fontSize.lead};
  line-height: ${theme.lovable.lineHeight.base};
  color: ${theme.lovable.color.inkSoft};
  max-width: 52ch;
  margin: 0;
`

export const HeroSearch = styled.form`
  width: 100%;
  max-width: 560px;
  display: flex;
  align-items: center;
  gap: ${theme.lovable.spacing.xs};
  margin-top: ${theme.lovable.spacing.sm};
  padding: 0.35rem 0.35rem 0.35rem 1rem;
  background: ${theme.lovable.color.surface};
  border: 1px solid ${theme.lovable.color.borderStrong};
  border-radius: ${theme.lovable.radius.pill};
  box-shadow: ${theme.lovable.shadow.card};
`

export const HeroSearchInput = styled.input`
  flex: 1;
  min-width: 0;
  border: none;
  background: transparent;
  font-family: ${theme.lovable.font.sans};
  font-size: ${theme.lovable.fontSize.body};
  color: ${theme.lovable.color.ink};
  padding: 0.6rem 0;
  outline: none;

  &::placeholder {
    color: ${theme.lovable.color.faint};
  }
`

export const HeroActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${theme.lovable.spacing.sm};
  margin-top: ${theme.lovable.spacing.sm};
`

export const HeroHint = styled(Link)`
  margin-top: ${theme.lovable.spacing.md};
  font-family: ${theme.lovable.font.sans};
  font-size: ${theme.lovable.fontSize.small};
  color: ${theme.lovable.color.muted};
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;

  &:hover {
    color: ${theme.lovable.color.ink};
  }
`
