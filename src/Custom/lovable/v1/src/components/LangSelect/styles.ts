import { styled, css } from 'styled-components'
import { theme } from '@/theme'

export const SelectWrap = styled.div`
  position: relative;
`

export const SelectCheckbox = styled.input`
  position: absolute;
  opacity: 0;
  pointer-events: none;
`

export const SelectTrigger = styled.label`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-family: ${theme.lovable.font.sans};
  font-size: ${theme.lovable.fontSize.meta};
  font-weight: ${theme.lovable.fontWeight.medium};
  color: ${theme.lovable.color.ink};
  background: ${theme.lovable.color.surface};
  border: 1px solid ${theme.lovable.color.border};
  border-radius: ${theme.lovable.radius.pill};
  padding: 0.4rem 0.6rem;
  cursor: pointer;
  line-height: 1;
  transition: border-color ${theme.lovable.transition};

  &:hover {
    border-color: ${theme.lovable.color.borderStrong};
  }
`

export const TriggerFlag = styled.span`
  font-size: 1rem;
  line-height: 1;
`

export const TriggerCaret = styled.span<{ $open?: boolean }>`
  font-size: 0.6rem;
  color: ${theme.lovable.color.muted};
  transition: transform ${theme.lovable.transition};
  transform: rotate(${({ $open }) => ($open ? '180deg' : '0deg')});
`

export const Menu = styled.ul<{ $open?: boolean }>`
  position: absolute;
  right: 0;
  top: calc(100% + 0.4rem);
  z-index: 60;
  margin: 0;
  padding: 0.25rem;
  list-style: none;
  min-width: 150px;
  max-height: 60dvh;
  overflow-y: auto;
  overflow-x: hidden;
  background: ${theme.lovable.color.surface};
  border: 1px solid ${theme.lovable.color.border};
  border-radius: ${theme.lovable.radius.md};
  box-shadow: 0 12px 28px rgba(28, 28, 34, 0.12);
  white-space: nowrap;

  opacity: ${({ $open }) => ($open ? 1 : 0)};
  visibility: ${({ $open }) => ($open ? 'visible' : 'hidden')};
  transform: translateY(${({ $open }) => ($open ? '0' : '-8px')});
  transition:
    opacity 0.15s,
    transform 0.15s,
    visibility 0.15s;

  /* CSS-only fallback via hidden checkbox */
  ${SelectCheckbox}:checked ~ & {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
`

export const MenuItem = styled.li`
  display: block;
`

export const MenuLink = styled.a<{ $active?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  text-align: left;
  text-decoration: none;
  font-family: ${theme.lovable.font.sans};
  font-size: ${theme.lovable.fontSize.small};
  color: ${theme.lovable.color.inkSoft};
  background: transparent;
  border: none;
  border-radius: ${theme.lovable.radius.sm};
  padding: 0.55rem 0.6rem;
  cursor: pointer;

  &:hover {
    background: ${theme.lovable.color.surfaceAlt};
  }

  ${({ $active }) =>
    $active &&
    css`
      color: ${theme.lovable.color.ink};
      font-weight: ${theme.lovable.fontWeight.semibold};
      background: ${theme.lovable.color.accentSoft};
    `}
`
