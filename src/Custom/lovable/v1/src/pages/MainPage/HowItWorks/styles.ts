import styled from 'styled-components'
import { theme, media } from '@/theme'

export const HowSection = styled.section`
  padding-block: ${theme.lovable.spacing.section};
  background: ${theme.lovable.color.surfaceAlt};
  border-block: 1px solid ${theme.lovable.color.border};
`

export const HowInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.lovable.spacing.lg};

  ${media.lg} {
    flex-direction: row;
    align-items: flex-start;
    gap: ${theme.lovable.spacing.xl};
  }
`

export const HowIntro = styled.div`
  ${media.lg} {
    flex: 0 0 36%;
    position: sticky;
    top: ${theme.lovable.layout.headerHeight};
  }
`

export const HowEyebrow = styled.span`
  font-family: ${theme.lovable.font.sans};
  font-size: ${theme.lovable.fontSize.meta};
  font-weight: ${theme.lovable.fontWeight.semibold};
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${theme.lovable.color.accent};
`

export const HowTitle = styled.h2`
  font-family: ${theme.lovable.font.serif};
  font-weight: ${theme.lovable.fontWeight.semibold};
  font-size: ${theme.lovable.fontSize.h2};
  line-height: ${theme.lovable.lineHeight.snug};
  color: ${theme.lovable.color.ink};
  margin: ${theme.lovable.spacing.xs} 0 0;
`

export const HowLead = styled.p`
  font-family: ${theme.lovable.font.sans};
  font-size: ${theme.lovable.fontSize.body};
  line-height: ${theme.lovable.lineHeight.base};
  color: ${theme.lovable.color.inkSoft};
  margin-top: ${theme.lovable.spacing.sm};
`

export const Steps = styled.ol`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0;
`

export const Step = styled.li`
  display: flex;
  gap: ${theme.lovable.spacing.md};
  padding-block: ${theme.lovable.spacing.md};
  border-bottom: 1px solid ${theme.lovable.color.border};

  &:last-child {
    border-bottom: none;
  }
`

export const StepNum = styled.span`
  font-family: ${theme.lovable.font.serif};
  font-weight: ${theme.lovable.fontWeight.semibold};
  font-size: 1.5rem;
  color: ${theme.lovable.color.accent};
  min-width: 2.5rem;
  line-height: 1;
`

export const StepBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`

export const StepTitle = styled.h3`
  font-family: ${theme.lovable.font.serif};
  font-weight: ${theme.lovable.fontWeight.semibold};
  font-size: ${theme.lovable.fontSize.h3};
  color: ${theme.lovable.color.ink};
  margin: 0;
`

export const StepText = styled.p`
  font-family: ${theme.lovable.font.sans};
  font-size: ${theme.lovable.fontSize.small};
  line-height: ${theme.lovable.lineHeight.base};
  color: ${theme.lovable.color.inkSoft};
  margin: 0;
`

export const Arrow = styled.span`
  display: block;
  color: ${theme.lovable.color.borderStrong};
  font-size: 1.25rem;
  line-height: 1;
  margin-left: calc(2.5rem + ${theme.lovable.spacing.md});
`
