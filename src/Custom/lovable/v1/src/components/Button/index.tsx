import { styled, css } from 'styled-components'
import { theme } from '@/theme'
import React from 'react'
import Link from 'next/link'

export type ButtonVariant = 'primary' | 'ghost' | 'soft' | 'outline'

const base = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.lovable.spacing.xs};
  font-family: ${theme.lovable.font.sans};
  font-weight: ${theme.lovable.fontWeight.semibold};
  font-size: ${theme.lovable.fontSize.small};
  line-height: 1;
  padding: 0.7rem 1.25rem;
  border-radius: ${theme.lovable.radius.pill};
  border: 1px solid transparent;
  text-decoration: none;
  cursor: pointer;
  transition:
    background ${theme.lovable.transition},
    color ${theme.lovable.transition},
    border-color ${theme.lovable.transition},
    transform ${theme.lovable.transition};
  white-space: nowrap;
  -webkit-tap-highlight-color: transparent;

  &:active {
    transform: translateY(1px);
  }
`

const variants: Record<ButtonVariant, ReturnType<typeof css>> = {
  primary: css`
    background: ${theme.lovable.color.accent};
    color: #fff;
    &:hover {
      background: ${theme.lovable.color.accentHover};
    }
  `,
  soft: css`
    background: ${theme.lovable.color.accentSoft};
    color: ${theme.lovable.color.accent};
    &:hover {
      background: #d8e2f4;
    }
  `,
  outline: css`
    background: transparent;
    color: ${theme.lovable.color.ink};
    border-color: ${theme.lovable.color.borderStrong};
    &:hover {
      border-color: ${theme.lovable.color.ink};
      background: ${theme.lovable.color.surfaceAlt};
    }
  `,
  ghost: css`
    background: transparent;
    color: ${theme.lovable.color.ink};
    &:hover {
      background: ${theme.lovable.color.surfaceAlt};
    }
  `,
}

export const ButtonStyled = styled.button<{ $variant: ButtonVariant }>`
  ${base}
  ${({ $variant }) => variants[$variant]}
`

export const ButtonLinkStyled = styled(Link)<{ $variant: ButtonVariant }>`
  ${base}
  ${({ $variant }) => variants[$variant]}
`

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
  ariaLabel?: string
}

export function Button({
  variant = 'primary',
  children,
  className,
  type = 'button',
  onClick,
  ariaLabel,
  ...other
}: ButtonProps) {
  return (
    <ButtonStyled
      $variant={variant}
      className={className}
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
      {...other}
    >
      {children}
    </ButtonStyled>
  )
}

export type ButtonLinkProps = {
  variant?: ButtonVariant
  href: string
  children?: React.ReactNode
  className?: string
  target?: string
  rel?: string
}

export function ButtonLink({
  variant = 'primary',
  href,
  children,
  className,
  target,
  rel,
}: ButtonLinkProps) {
  return (
    <ButtonLinkStyled
      $variant={variant}
      href={href}
      className={className}
      target={target}
      rel={rel}
    >
      {children}
    </ButtonLinkStyled>
  )
}
