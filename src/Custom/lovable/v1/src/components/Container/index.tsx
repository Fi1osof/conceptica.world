import styled from 'styled-components'
import { theme } from '@/theme'

/**
 * Centered, padded content column. Narrow variant for reading text.
 */
export const ContainerStyled = styled.div`
  width: 100%;
  margin-inline: auto;
  padding-inline: ${theme.lovable.spacing.md};
  max-width: ${theme.lovable.layout.containerMax};

  &[data-variant='narrow'] {
    max-width: ${theme.lovable.layout.containerNarrow};
  }
`

export type ContainerProps = {
  variant?: 'default' | 'narrow'
  className?: string
  children?: React.ReactNode
}

export function Container({
  variant = 'default',
  className,
  children,
}: ContainerProps) {
  return (
    <ContainerStyled data-variant={variant} className={className}>
      {children}
    </ContainerStyled>
  )
}
