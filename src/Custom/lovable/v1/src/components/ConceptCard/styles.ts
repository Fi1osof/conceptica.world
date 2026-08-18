import { theme } from '@/theme'
import Link from 'next/link'
import styled from 'styled-components'

export const CardStyled = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: ${theme.lovable.spacing.sm};
  padding: ${theme.lovable.spacing.md};
  background: ${theme.lovable.color.surface};
  border: 1px solid ${theme.lovable.color.border};
  border-radius: ${theme.lovable.radius.lg};
  text-decoration: none;
  color: inherit;
  transition:
    border-color ${theme.lovable.transition},
    box-shadow ${theme.lovable.transition};
  height: 100%;

  &:hover {
    border-color: ${theme.lovable.color.borderStrong};
    box-shadow: ${theme.lovable.shadow.cardHover};
    text-decoration: none;
  }
`

export const CardDateStyled = styled.time`
  font-family: ${theme.lovable.font.sans};
  font-size: ${theme.lovable.fontSize.meta};
  color: ${theme.lovable.color.faint};
`

export const CardTitleStyled = styled.h3`
  font-family: ${theme.lovable.font.serif};
  font-weight: ${theme.lovable.fontWeight.semibold};
  font-size: ${theme.lovable.fontSize.h3};
  line-height: ${theme.lovable.lineHeight.snug};
  color: ${theme.lovable.color.ink};
  margin: 0;
  text-wrap: balance;
`

export const CardIntroStyled = styled.p`
  font-family: ${theme.lovable.font.sans};
  font-size: ${theme.lovable.fontSize.small};
  line-height: ${theme.lovable.lineHeight.base};
  color: ${theme.lovable.color.inkSoft};
  margin: 0;
  flex: 1;
`

export const CardFootStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: ${theme.lovable.spacing.xs};
  font-family: ${theme.lovable.font.sans};
  font-size: ${theme.lovable.fontSize.meta};
`

export const CardArrowStyled = styled.span`
  color: ${theme.lovable.color.accent};
  font-weight: ${theme.lovable.fontWeight.semibold};
`
