import { useCallback, useState } from 'react'
import { Container } from '@/components/Container'
import { ButtonLink } from '@/components/Button'
import { LangSelect } from '../LangSelect'
import { LogoMark } from '../Logo'
import {
  HeaderWrap,
  HeaderBar,
  Logo,
  Nav,
  NavLink,
  HeaderActions,
  Burger,
  MobilePanel,
  MobileNav,
  MobileNavLink,
  MobileActions,
} from './styles'

const navItems = [
  { label: 'Концепты', href: '/concepts' },
  { label: 'Предложить исследование', href: '/suggest-research' },
  { label: 'О проекте', href: '/about' },
  { label: 'Поддержать', href: '/support' },
]

export function Header() {
  const [open, setOpen] = useState(false)

  const closeMenu = useCallback((event: React.MouseEvent) => {
    event.stopPropagation()
    setOpen(false)
  }, [])

  return (
    <HeaderWrap>
      <Container>
        <HeaderBar>
          <Logo href="/">
            <LogoMark size={26} />
            <span className="word">
              Concept<span>ica</span>
            </span>
          </Logo>

          <Nav>
            {navItems.map((item) => (
              <NavLink key={item.href} href={item.href}>
                {item.label}
              </NavLink>
            ))}
          </Nav>

          <HeaderActions>
            <LangSelect />

            <ButtonLink href="/ask" variant="primary" className="ask-top">
              Спросить AI ✦
            </ButtonLink>

            {/* Hidden checkbox powers the no-JS fallback; the React handler
                intercepts when JS is alive so state stays the source of truth. */}
            <input
              type="checkbox"
              id="menu-toggle"
              className="sr-only"
              checked={open}
              onChange={useCallback(
                (e: React.ChangeEvent<HTMLInputElement>) =>
                  setOpen(e.target.checked),
                [],
              )}
              style={{
                position: 'absolute',
                opacity: 0,
                pointerEvents: 'none',
              }}
            />
            <Burger
              htmlFor="menu-toggle"
              role="button"
              tabIndex={0}
              aria-label="Меню"
              aria-expanded={open}
              onClick={useCallback((e: React.SyntheticEvent) => {
                e.stopPropagation()
                setOpen((v) => !v)
              }, [])}
              onKeyDown={useCallback((e: React.KeyboardEvent) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  setOpen((v) => !v)
                }
              }, [])}
            >
              <span />
            </Burger>
          </HeaderActions>
        </HeaderBar>
      </Container>

      <MobilePanel $open={open}>
        <Container>
          <MobileNav>
            {navItems.map((item) => (
              <MobileNavLink
                key={item.href}
                href={item.href}
                onClick={closeMenu}
              >
                {item.label}
              </MobileNavLink>
            ))}
          </MobileNav>
          <MobileActions>
            <ButtonLink href="/ask" variant="primary" className="full">
              Спросить AI ✦
            </ButtonLink>
          </MobileActions>
        </Container>
      </MobilePanel>
    </HeaderWrap>
  )
}
