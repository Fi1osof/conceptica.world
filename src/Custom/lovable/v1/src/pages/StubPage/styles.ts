import styled from 'styled-components'
import { theme } from '@/theme'

export const StubWrap = styled.div`
  padding-block: ${theme.lovable.spacing.section};
`

export const StubTitle = styled.h1`
  font-family: ${theme.lovable.font.serif};
  font-weight: ${theme.lovable.fontWeight.semibold};
  font-size: ${theme.lovable.fontSize.h1};
  color: ${theme.lovable.color.ink};
  margin: 0 0 ${theme.lovable.spacing.sm};
`

export const StubText = styled.p`
  font-family: ${theme.lovable.font.sans};
  font-size: ${theme.lovable.fontSize.body};
  line-height: ${theme.lovable.lineHeight.base};
  color: ${theme.lovable.color.inkSoft};
  margin: 0;
  max-width: 60ch;
`
