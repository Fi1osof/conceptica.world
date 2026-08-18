import { useCallback, useMemo, useState } from 'react'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { LangSelect } from '../LangSelect'
import { LogoMark } from '../Logo'
import { useLexicon } from 'src/Custom/Lexicon'
import { headerLexicon } from './lexicon'
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
import { useOpenChatWithMessage } from 'src/components/Chat/hooks/useOpenChatWithMessage'

type NavItem = {
  label: string
  href: string
}

export function Header() {
  const [open, setOpen] = useState(false)

  const { t } = useLexicon(headerLexicon)

  const navItems = useMemo(() => {
    const navItems: NavItem[] = [
      { label: t('nav.concepts'), href: '/concepts' },
      { label: t('nav.suggestResearch'), href: '/suggest-research' },
      { label: t('nav.about'), href: '/about' },
      { label: t('nav.support'), href: '/support' },
    ]

    return navItems
  }, [t])

  const closeMenu = useCallback((event: React.MouseEvent) => {
    event.stopPropagation()
    setOpen(false)
  }, [])

  const onClick = useOpenChatWithMessage()

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

            <Button variant="primary" className="ask-top" onClick={onClick}>
              {t('actions.askAi')}
            </Button>

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
              aria-label={t('actions.menu')}
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
            <Button onClick={onClick} variant="primary" className="full">
              {t('actions.askAi')}
            </Button>
          </MobileActions>
        </Container>
      </MobilePanel>
    </HeaderWrap>
  )
}
