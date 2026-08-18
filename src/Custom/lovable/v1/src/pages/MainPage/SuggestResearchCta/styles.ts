import styled from 'styled-components'
import { theme, media } from '@/theme'

export const CtaWrap = styled.section`
  padding-block: ${theme.lovable.spacing.section};
`

export const CtaBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: ${theme.lovable.spacing.md};
  padding: ${theme.lovable.spacing.xl};
  background:
    radial-gradient(
      120% 100% at 50% 0%,
      ${theme.lovable.color.accentSoft} 0%,
      transparent 55%
    ),
    ${theme.lovable.color.surfaceRaised};
  border: 1px solid ${theme.lovable.color.border};
  border-radius: ${theme.lovable.radius.lg};
  box-shadow: ${theme.lovable.shadow.card};

  ${media.md} {
    padding: ${theme.lovable.spacing.section};
  }
`

export const CtaTitle = styled.h2`
  font-family: ${theme.lovable.font.serif};
  font-weight: ${theme.lovable.fontWeight.semibold};
  font-size: ${theme.lovable.fontSize.h2};
  line-height: ${theme.lovable.lineHeight.snug};
  color: ${theme.lovable.color.ink};
  margin: 0;
  max-width: 20ch;

  ${media.md} {
    font-size: ${theme.lovable.fontSize.h2};
  }
`

export const CtaText = styled.p`
  font-family: ${theme.lovable.font.sans};
  font-size: ${theme.lovable.fontSize.body};
  line-height: ${theme.lovable.lineHeight.base};
  color: ${theme.lovable.color.inkSoft};
  margin: 0;
  max-width: 48ch;
`
