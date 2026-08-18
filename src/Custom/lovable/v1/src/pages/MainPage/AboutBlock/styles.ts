import styled from 'styled-components'
import { theme, media } from '@/theme'

export const AboutSection = styled.section`
  padding-block: ${theme.lovable.spacing.section};
  background: ${theme.lovable.color.surfaceAlt};
  border-block: 1px solid ${theme.lovable.color.border};
`

export const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.lovable.spacing.lg};

  ${media.md} {
    grid-template-columns: 1.1fr 1fr;
    align-items: center;
    gap: ${theme.lovable.spacing.xl};
  }
`

export const AboutText = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.lovable.spacing.sm};
`

export const AboutEyebrow = styled.span`
  font-family: ${theme.lovable.font.sans};
  font-size: ${theme.lovable.fontSize.meta};
  font-weight: ${theme.lovable.fontWeight.semibold};
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${theme.lovable.color.accent};
`

export const AboutTitle = styled.h2`
  font-family: ${theme.lovable.font.serif};
  font-weight: ${theme.lovable.fontWeight.semibold};
  font-size: ${theme.lovable.fontSize.h2};
  line-height: ${theme.lovable.lineHeight.snug};
  color: ${theme.lovable.color.ink};
  margin: 0;
`

export const AboutBody = styled.p`
  font-family: ${theme.lovable.font.sans};
  font-size: ${theme.lovable.fontSize.body};
  line-height: ${theme.lovable.lineHeight.relaxed};
  color: ${theme.lovable.color.inkSoft};
  margin: 0;
`

export const AboutAside = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.lovable.spacing.sm};
  padding: ${theme.lovable.spacing.lg};
  background: ${theme.lovable.color.surface};
  border: 1px solid ${theme.lovable.color.border};
  border-radius: ${theme.lovable.radius.lg};
`

export const AsideItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`

export const AsideLabel = styled.span`
  font-family: ${theme.lovable.font.sans};
  font-size: ${theme.lovable.fontSize.meta};
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: ${theme.lovable.color.faint};
`

export const AsideValue = styled.span`
  font-family: ${theme.lovable.font.serif};
  font-size: ${theme.lovable.fontSize.h3};
  color: ${theme.lovable.color.ink};
  font-weight: ${theme.lovable.fontWeight.semibold};
`
