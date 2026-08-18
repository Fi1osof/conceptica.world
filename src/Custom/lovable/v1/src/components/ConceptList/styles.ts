import styled from 'styled-components'
import { theme, media } from '@/theme'
import Link from 'next/link'

export const ListSection = styled.section`
  padding-block: ${theme.lovable.spacing.section};
`

export const ListHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.lovable.spacing.xs};
  margin-bottom: ${theme.lovable.spacing.lg};

  ${media.md} {
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
  }
`

export const ListTitle = styled.h2`
  font-family: ${theme.lovable.font.serif};
  font-weight: ${theme.lovable.fontWeight.semibold};
  font-size: ${theme.lovable.fontSize.h2};
  line-height: ${theme.lovable.lineHeight.snug};
  color: ${theme.lovable.color.ink};
  margin: 0;
  max-width: 24ch;

  ${media.md} {
    font-size: ${theme.lovable.fontSize.h2};
  }
`

export const ListSubtitle = styled.p`
  font-family: ${theme.lovable.font.sans};
  font-size: ${theme.lovable.fontSize.body};
  color: ${theme.lovable.color.inkSoft};
  margin: 0;
  max-width: 52ch;
`

export const ListGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.lovable.spacing.md};

  ${media.md} {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const ListMore = styled(Link)`
  margin-top: ${theme.lovable.spacing.lg};
  font-family: ${theme.lovable.font.sans};
  font-size: ${theme.lovable.fontSize.body};
  font-weight: ${theme.lovable.fontWeight.semibold};
  color: ${theme.lovable.color.accent};
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;

  &:hover {
    color: ${theme.lovable.color.accentHover};
  }
`
