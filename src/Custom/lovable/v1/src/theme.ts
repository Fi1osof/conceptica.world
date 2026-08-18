/**
 * Design tokens for Conceptica.
 * Light, paper-like surface tuned for long-form reading.
 * Mobile-first: base values target mobile, larger screens adapt via media().
 */

export type Theme = typeof theme

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1200px',
} as const

export const theme = {
  lovable: {
    color: {
      // Surfaces
      bg: '#FBFAF6', // warm paper
      surface: '#FFFFFF',
      surfaceAlt: '#F4F1EA', // subtle recessed panel
      surfaceRaised: '#FFFDF8',
      // Ink
      ink: '#1C1C22', // primary text
      inkSoft: '#3A3A44', // secondary text
      muted: '#6B6B74', // captions / meta
      faint: '#9A9AA2',
      // Accent
      accent: '#3457A1', // deep editorial blue (links / primary actions)
      accentHover: '#2A477F',
      accentSoft: '#E7EDF8', // accent tint background
      // Lines
      border: '#E7E3DA',
      borderStrong: '#D6D1C4',
      // Status
      hairline: '#EFECE3',
    },
    font: {
      serif:
        '"Spectral", "Iowan Old Style", "Palatino Linotype", Georgia, serif',
      sans: '"Source Sans 3", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
      mono: '"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace',
    },
    fontSize: {
      // mobile-first; rem
      h1: '2rem', // 32
      h2: '1.625rem', // 26
      h3: '1.25rem', // 20
      body: '1.0625rem', // 17 — comfortable reading
      small: '0.9375rem', // 15
      meta: '0.8125rem', // 13
      lead: '1.1875rem', // 19
    },
    lineHeight: {
      tight: 1.15,
      snug: 1.3,
      base: 1.6,
      relaxed: 1.75,
    },
    fontWeight: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    spacing: {
      xs: '0.5rem',
      sm: '0.75rem',
      md: '1.25rem',
      lg: '2rem',
      xl: '3.25rem',
      xxl: '4.5rem',
      section: '5rem',
    },
    radius: {
      sm: '8px',
      md: '12px',
      lg: '18px',
      pill: '999px',
    },
    shadow: {
      card: '0 1px 2px rgba(28, 28, 34, 0.04), 0 6px 24px rgba(28, 28, 34, 0.06)',
      cardHover:
        '0 2px 6px rgba(28, 28, 34, 0.06), 0 14px 40px rgba(28, 28, 34, 0.10)',
      raised: '0 10px 40px rgba(28, 28, 34, 0.12)',
    },
    layout: {
      containerMax: '1120px',
      containerNarrow: '720px',
      headerHeight: '64px',
    },
    transition: '180ms ease',
    breakpoints,
  },
} as const

/**
 * Mobile-first media helper: `media.md` => "@media (min-width: 768px)".
 * Use the largest breakpoint that still applies to keep overrides additive.
 */
export const media = {
  sm: `@media (min-width: ${breakpoints.sm})`,
  md: `@media (min-width: ${breakpoints.md})`,
  lg: `@media (min-width: ${breakpoints.lg})`,
  xl: `@media (min-width: ${breakpoints.xl})`,
} as const

export const lovableTheme = theme
