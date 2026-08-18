import styled from 'styled-components'
import { theme, media } from '@/theme'

export const PathsSection = styled.section`
  padding-block: ${theme.lovable.spacing.section};
`

export const PathsTitle = styled.h2`
  font-family: ${theme.lovable.font.serif};
  font-weight: ${theme.lovable.fontWeight.semibold};
  font-size: ${theme.lovable.fontSize.h2};
  line-height: ${theme.lovable.lineHeight.snug};
  color: ${theme.lovable.color.ink};
  margin: 0 0 ${theme.lovable.spacing.lg};
  text-align: center;
`

export const PathsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.lovable.spacing.md};

  ${media.md} {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const PathCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.lovable.spacing.sm};
  padding: ${theme.lovable.spacing.lg};
  background: ${theme.lovable.color.surface};
  border: 1px solid ${theme.lovable.color.border};
  border-radius: ${theme.lovable.radius.lg};
  text-align: left;
`

export const PathIcon = styled.span`
  font-size: 1.75rem;
  line-height: 1;
`

export const PathHeading = styled.h3`
  font-family: ${theme.lovable.font.serif};
  font-weight: ${theme.lovable.fontWeight.semibold};
  font-size: ${theme.lovable.fontSize.h3};
  color: ${theme.lovable.color.ink};
  margin: 0;
`

export const PathText = styled.p`
  font-family: ${theme.lovable.font.sans};
  font-size: ${theme.lovable.fontSize.small};
  line-height: ${theme.lovable.lineHeight.base};
  color: ${theme.lovable.color.inkSoft};
  margin: 0;
  flex: 1;
`

export const PathFoot = styled.div`
  margin-top: ${theme.lovable.spacing.xs};
`
