import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import {
  SelectWrap,
  SelectCheckbox,
  SelectTrigger,
  TriggerFlag,
  TriggerCaret,
  Menu,
  MenuItem,
  MenuLink,
} from './styles'
import {
  Locale,
  LocaleOption,
  LOCALE_OPTIONS,
  LOCALES,
  isLocale,
} from 'src/Custom/components/LocaleSwitcher/interfaces'

function buildLocaleHref(locale: Locale, pathname: string): string {
  const cleanPath = pathname.split('?')[0] || '/'

  return !locale || locale === 'ru'
    ? cleanPath
    : `/${locale}${cleanPath === '/' ? '' : cleanPath}`
}

export function LangSelect() {
  const router = useRouter()

  const locale: Locale = isLocale(router.locale)
    ? router.locale
    : isLocale(router.defaultLocale)
      ? router.defaultLocale
      : 'ru'

  const { pathname } = useMemo(() => {
    const pathname = router.asPath.split('?')[0]
    return { pathname }
  }, [router.asPath])

  const [open, setOpen] = useState(false)
  const wrapRef = useRef<HTMLDivElement>(null)
  const checkboxId = 'lang-select-toggle'

  const locales = useMemo<LocaleOption[]>(() => {
    return LOCALE_OPTIONS.map((l) => ({
      ...l,
      href: buildLocaleHref(l.code, pathname),
    }))
  }, [pathname])

  const current = LOCALES[locale]

  useEffect(() => {
    if (!open) {
      return
    }
    const onDocClick = (e: MouseEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', onDocClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDocClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  const handleToggle = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setOpen((v) => !v)
  }, [])

  return (
    <SelectWrap ref={wrapRef}>
      <SelectCheckbox type="checkbox" id={checkboxId} checked={open} readOnly />
      <SelectTrigger
        htmlFor={checkboxId}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={current.label}
        onClick={handleToggle}
      >
        <TriggerFlag>{current.flag}</TriggerFlag>
        <TriggerCaret $open={open}>▼</TriggerCaret>
      </SelectTrigger>

      <Menu role="listbox" $open={open}>
        {locales.map((l) => (
          <MenuItem
            key={l.code}
            role="option"
            aria-selected={l.code === locale}
          >
            <MenuLink href={l.href} $active={l.code === locale}>
              <TriggerFlag>{l.flag}</TriggerFlag>
              {l.label}
            </MenuLink>
          </MenuItem>
        ))}
      </Menu>
    </SelectWrap>
  )
}
