import styled from 'styled-components'
import { theme, media } from '@/theme'

export const HeaderWrap = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(251, 250, 246, 0.86);
  backdrop-filter: saturate(140%) blur(12px);
  border-bottom: 1px solid ${theme.lovable.color.border};
`

export const HeaderBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${theme.lovable.spacing.md};
  height: ${theme.lovable.layout.headerHeight};
`

export const Logo = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  font-family: ${theme.lovable.font.serif};
  font-weight: ${theme.lovable.fontWeight.semibold};
  font-size: 1.3rem;
  letter-spacing: -0.01em;
  color: ${theme.lovable.color.ink};
  text-decoration: none;

  svg {
    flex: none;
    display: block;
  }

  .word span {
    color: ${theme.lovable.color.accent};
  }
`

export const Nav = styled.nav`
  display: none;
  align-items: center;
  gap: ${theme.lovable.spacing.lg};

  ${media.lg} {
    display: flex;
  }
`

export const NavLink = styled.a`
  font-family: ${theme.lovable.font.sans};
  font-size: ${theme.lovable.fontSize.small};
  color: ${theme.lovable.color.inkSoft};
  text-decoration: none;
  transition: color ${theme.lovable.transition};

  &:hover {
    color: ${theme.lovable.color.ink};
  }
`

export const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.lovable.spacing.sm};

  .ask-top {
    padding: 0.5rem 0.85rem;
    font-size: ${theme.lovable.fontSize.meta};
  }

  ${media.lg} {
    .ask-top {
      padding: 0.7rem 1.25rem;
      font-size: ${theme.lovable.fontSize.small};
    }
  }
`

/* ---- Mobile menu ---- */

export const Burger = styled.label`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: ${theme.lovable.radius.sm};
  border: 1px solid ${theme.lovable.color.border};
  background: ${theme.lovable.color.surface};
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  ${media.lg} {
    display: none;
  }

  span {
    position: relative;
    display: block;
    width: 18px;
    height: 2px;
    background: ${theme.lovable.color.ink};
    border-radius: 2px;
    transition:
      transform ${theme.lovable.transition},
      opacity ${theme.lovable.transition};

    &::before,
    &::after {
      content: '';
      position: absolute;
      left: 0;
      width: 18px;
      height: 2px;
      background: ${theme.lovable.color.ink};
      border-radius: 2px;
      transition: transform ${theme.lovable.transition};
    }
    &::before {
      top: -6px;
    }
    &::after {
      top: 6px;
    }
  }
`

export const MobilePanel = styled.div<{ $open?: boolean }>`
  overflow: hidden;
  max-height: ${({ $open }) => ($open ? '420px' : '0')};
  transition: max-height 240ms ease;
  border-top: 1px solid ${theme.lovable.color.border};
  background: ${theme.lovable.color.surface};

  ${media.lg} {
    display: none;
  }
`

export const MobileNav = styled.nav`
  display: flex;
  flex-direction: column;
  padding: ${theme.lovable.spacing.sm} ${theme.lovable.spacing.md}
    ${theme.lovable.spacing.md};
  gap: 0.25rem;
`

export const MobileNavLink = styled.a`
  font-family: ${theme.lovable.font.sans};
  font-size: ${theme.lovable.fontSize.body};
  color: ${theme.lovable.color.ink};
  text-decoration: none;
  padding: 0.85rem 0.5rem;
  border-radius: ${theme.lovable.radius.sm};
  border-bottom: 1px solid ${theme.lovable.color.hairline};

  &:hover {
    background: ${theme.lovable.color.surfaceAlt};
  }
`

export const MobileActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.lovable.spacing.sm};
  padding: ${theme.lovable.spacing.md} 0.5rem ${theme.lovable.spacing.md} 0.5rem;
`
