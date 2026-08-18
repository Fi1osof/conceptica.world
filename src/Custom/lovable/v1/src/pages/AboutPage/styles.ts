import styled from 'styled-components'
import { theme, media } from '@/theme'
import Link from 'next/link'

export const AboutWrap = styled.div`
  padding-bottom: ${theme.lovable.spacing.section};
`

/* ---------- Hero ---------- */

export const Hero = styled.section`
  padding-block: ${theme.lovable.spacing.xl};
  border-bottom: 1px solid ${theme.lovable.color.hairline};
  background: linear-gradient(
    180deg,
    ${theme.lovable.color.surfaceAlt} 0%,
    ${theme.lovable.color.bg} 100%
  );
`

export const HeroGrid = styled.div`
  display: grid;
  gap: ${theme.lovable.spacing.lg};
  align-items: center;

  ${media.lg} {
    grid-template-columns: 1.05fr 0.95fr;
    gap: ${theme.lovable.spacing.xl};
  }
`

export const Eyebrow = styled.span`
  display: inline-block;
  font-family: ${theme.lovable.font.sans};
  font-size: ${theme.lovable.fontSize.meta};
  font-weight: ${theme.lovable.fontWeight.semibold};
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${theme.lovable.color.accent};
`

export const HeroTitle = styled.h1`
  font-family: ${theme.lovable.font.serif};
  font-weight: ${theme.lovable.fontWeight.semibold};
  font-size: ${theme.lovable.fontSize.h1};
  line-height: ${theme.lovable.lineHeight.tight};
  letter-spacing: -0.02em;
  color: ${theme.lovable.color.ink};
  margin: ${theme.lovable.spacing.sm} 0 0;
  max-width: 18ch;

  ${media.md} {
    font-size: 3rem;
  }

  ${media.lg} {
    font-size: 3.5rem;
  }
`

export const HeroLead = styled.p`
  font-family: ${theme.lovable.font.sans};
  font-size: ${theme.lovable.fontSize.lead};
  line-height: ${theme.lovable.lineHeight.base};
  color: ${theme.lovable.color.inkSoft};
  margin: ${theme.lovable.spacing.md} 0 0;
  max-width: 46ch;
`

export const HeroFigure = styled.figure`
  margin: 0;
  border-radius: ${theme.lovable.radius.lg};
  overflow: hidden;
  background: ${theme.lovable.color.surface};
  border: 1px solid ${theme.lovable.color.border};
  box-shadow: ${theme.lovable.shadow.card};

  img {
    display: block;
    width: 100%;
    height: auto;
  }
`

/* ---------- Generic section ---------- */

export const Section = styled.section`
  padding-top: ${theme.lovable.spacing.xl};

  &[data-tint='true'] {
    margin-top: ${theme.lovable.spacing.xl};
    padding-block: ${theme.lovable.spacing.xl};
    background: ${theme.lovable.color.surfaceAlt};
    border-block: 1px solid ${theme.lovable.color.hairline};
  }
`

export const SectionHead = styled.div`
  margin-bottom: ${theme.lovable.spacing.lg};
  max-width: 58ch;
`

export const SectionTitle = styled.h2`
  font-family: ${theme.lovable.font.serif};
  font-weight: ${theme.lovable.fontWeight.semibold};
  font-size: ${theme.lovable.fontSize.h2};
  line-height: ${theme.lovable.lineHeight.snug};
  color: ${theme.lovable.color.ink};
  margin: ${theme.lovable.spacing.xs} 0 0;

  ${media.md} {
    font-size: 2rem;
  }
`

export const Paragraph = styled.p`
  font-family: ${theme.lovable.font.sans};
  font-size: ${theme.lovable.fontSize.body};
  line-height: ${theme.lovable.lineHeight.relaxed};
  color: ${theme.lovable.color.inkSoft};
  /* margin: ${theme.lovable.spacing.md} 0 0; */
  max-width: 62ch;
`

export const Strong = styled.strong`
  color: ${theme.lovable.color.ink};
  font-weight: ${theme.lovable.fontWeight.semibold};
`

export const InlineLink = styled(Link)`
  color: ${theme.lovable.color.accent};
  text-decoration: none;
  border-bottom: 1px solid ${theme.lovable.color.accentSoft};
  transition: border-color ${theme.lovable.transition};

  &:hover {
    border-color: ${theme.lovable.color.accent};
  }
`

/* ---------- Two-column text + aside ---------- */

export const SplitGrid = styled.div`
  display: grid;
  gap: ${theme.lovable.spacing.lg};

  ${media.lg} {
    grid-template-columns: 1.1fr 0.9fr;
    gap: ${theme.lovable.spacing.xl};
    align-items: start;
  }
`

export const Figure = styled.figure`
  margin: 0;
  border-radius: ${theme.lovable.radius.lg};
  overflow: hidden;
  border: 1px solid ${theme.lovable.color.border};
  background: ${theme.lovable.color.surface};

  img {
    display: block;
    width: 100%;
    height: auto;
  }
`

/* ---------- Principles grid ---------- */

export const CardGrid = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: ${theme.lovable.spacing.md};

  ${media.sm} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${media.lg} {
    grid-template-columns: repeat(4, 1fr);
  }
`

export const Card = styled.li`
  background: ${theme.lovable.color.surface};
  border: 1px solid ${theme.lovable.color.border};
  border-radius: ${theme.lovable.radius.md};
  padding: ${theme.lovable.spacing.md};
  box-shadow: ${theme.lovable.shadow.card};
`

export const CardNum = styled.span`
  display: block;
  font-family: ${theme.lovable.font.mono};
  font-size: ${theme.lovable.fontSize.meta};
  color: ${theme.lovable.color.accent};
  margin-bottom: ${theme.lovable.spacing.xs};
`

export const CardTitle = styled.h3`
  font-family: ${theme.lovable.font.serif};
  font-size: ${theme.lovable.fontSize.h3};
  font-weight: ${theme.lovable.fontWeight.semibold};
  line-height: ${theme.lovable.lineHeight.snug};
  color: ${theme.lovable.color.ink};
  margin: 0 0 ${theme.lovable.spacing.xs};
`

export const CardText = styled.p`
  font-family: ${theme.lovable.font.sans};
  font-size: ${theme.lovable.fontSize.small};
  line-height: ${theme.lovable.lineHeight.base};
  color: ${theme.lovable.color.muted};
  margin: 0;
`

/* ---------- Before / after schema ---------- */

export const ShiftGrid = styled.div`
  display: grid;
  gap: ${theme.lovable.spacing.md};
  align-items: stretch;

  ${media.md} {
    grid-template-columns: 1fr auto 1fr;
    gap: ${theme.lovable.spacing.lg};
    align-items: center;
  }
`

export const ShiftPanel = styled.div`
  border-radius: ${theme.lovable.radius.md};
  border: 1px solid ${theme.lovable.color.border};
  background: ${theme.lovable.color.surface};
  padding: ${theme.lovable.spacing.md};

  &[data-variant='now'] {
    border-color: ${theme.lovable.color.accent};
    background: ${theme.lovable.color.accentSoft};
  }
`

export const ShiftLabel = styled.span`
  display: block;
  font-family: ${theme.lovable.font.sans};
  font-size: ${theme.lovable.fontSize.meta};
  font-weight: ${theme.lovable.fontWeight.semibold};
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${theme.lovable.color.muted};
  margin-bottom: ${theme.lovable.spacing.sm};

  [data-variant='now'] & {
    color: ${theme.lovable.color.accent};
  }
`

export const ShiftList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: ${theme.lovable.spacing.xs};

  li {
    font-family: ${theme.lovable.font.sans};
    font-size: ${theme.lovable.fontSize.small};
    line-height: ${theme.lovable.lineHeight.base};
    color: ${theme.lovable.color.inkSoft};
    padding-left: 1.1rem;
    position: relative;
  }

  li::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.62em;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${theme.lovable.color.borderStrong};
  }

  [data-variant='now'] & li::before {
    background: ${theme.lovable.color.accent};
  }
`

export const ShiftArrow = styled.div`
  font-family: ${theme.lovable.font.sans};
  font-size: 1.5rem;
  color: ${theme.lovable.color.accent};
  text-align: center;
  line-height: 1;
`

export const Blockquote = styled.blockquote`
  margin: ${theme.lovable.spacing.lg} 0 0;
  padding: ${theme.lovable.spacing.md} ${theme.lovable.spacing.lg};
  border-left: 3px solid ${theme.lovable.color.accent};
  background: ${theme.lovable.color.surface};
  border-radius: 0 ${theme.lovable.radius.md} ${theme.lovable.radius.md} 0;
  font-family: ${theme.lovable.font.serif};
  font-style: italic;
  font-size: ${theme.lovable.fontSize.lead};
  line-height: ${theme.lovable.lineHeight.base};
  color: ${theme.lovable.color.ink};

  ${media.md} {
    font-size: 1.5rem;
  }
`

/* ---------- Author ---------- */

export const AuthorCard = styled.div`
  display: grid;
  gap: ${theme.lovable.spacing.lg};
  background: ${theme.lovable.color.surface};
  border: 1px solid ${theme.lovable.color.border};
  border-radius: ${theme.lovable.radius.lg};
  padding: ${theme.lovable.spacing.lg};
  box-shadow: ${theme.lovable.shadow.card};

  ${media.md} {
    grid-template-columns: 240px 1fr;
    gap: ${theme.lovable.spacing.xl};
    align-items: stretch;
  }

  ${media.lg} {
    grid-template-columns: 280px 1fr;
  }
`

export const AuthorPhoto = styled.figure`
  margin: 0;
  border-radius: ${theme.lovable.radius.lg};
  overflow: hidden;
  border: 1px solid ${theme.lovable.color.border};
  background: ${theme.lovable.color.surfaceAlt};
  aspect-ratio: 5 / 6;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${media.md} {
    aspect-ratio: auto;
    height: 100%;
    min-height: 320px;
  }
`

export const AuthorBody = styled.div`
  display: flex;
  flex-direction: column;
`

export const AuthorName = styled.h3`
  font-family: ${theme.lovable.font.serif};
  font-size: ${theme.lovable.fontSize.h2};
  font-weight: ${theme.lovable.fontWeight.semibold};
  color: ${theme.lovable.color.ink};
  margin: 0;
  margin-top: -10px;

  ${media.md} {
    font-size: 2rem;
  }
`

export const AuthorRole = styled.p`
  font-family: ${theme.lovable.font.sans};
  font-size: ${theme.lovable.fontSize.meta};
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${theme.lovable.color.muted};
  margin: ${theme.lovable.spacing.xs} 0 0;
`

/* ---------- Stats ---------- */

export const StatRow = styled.ul`
  list-style: none;
  margin: ${theme.lovable.spacing.lg} 0 0;
  padding: 0;
  display: grid;
  gap: ${theme.lovable.spacing.md};

  ${media.sm} {
    grid-template-columns: repeat(2, 1fr);
    /* max-width: 32rem; */
  }
`

export const Stat = styled.li`
  border-top: 2px solid ${theme.lovable.color.accent};
  padding-top: ${theme.lovable.spacing.sm};
`

export const StatValue = styled.span`
  display: block;
  font-family: ${theme.lovable.font.serif};
  font-size: 2rem;
  font-weight: ${theme.lovable.fontWeight.semibold};
  color: ${theme.lovable.color.ink};
  line-height: 1.1;
`

export const StatLabel = styled.span`
  display: block;
  font-family: ${theme.lovable.font.sans};
  font-size: ${theme.lovable.fontSize.small};
  color: ${theme.lovable.color.muted};
  margin-top: ${theme.lovable.spacing.xs};
`

/* ---------- CTA ---------- */

export const CtaBand = styled.section`
  margin-top: ${theme.lovable.spacing.xl};
  padding-block: ${theme.lovable.spacing.xl};
  background: ${theme.lovable.color.ink};
  color: ${theme.lovable.color.surface};
`

export const CtaGrid = styled.div`
  display: grid;
  gap: ${theme.lovable.spacing.lg};

  ${media.md} {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const CtaCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${theme.lovable.spacing.sm};
`

export const CtaTitle = styled.h3`
  font-family: ${theme.lovable.font.serif};
  font-size: ${theme.lovable.fontSize.h3};
  font-weight: ${theme.lovable.fontWeight.semibold};
  color: ${theme.lovable.color.surface};
  margin: 0;

  ${media.md} {
    font-size: 1.5rem;
  }
`

export const CtaText = styled.p`
  font-family: ${theme.lovable.font.sans};
  font-size: ${theme.lovable.fontSize.body};
  line-height: ${theme.lovable.lineHeight.base};
  color: ${theme.lovable.color.border};
  margin: 0;
  max-width: 42ch;
`

export const CtaLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.4em;
  margin-top: ${theme.lovable.spacing.xs};
  padding: 0.6rem 1.1rem;
  border-radius: ${theme.lovable.radius.pill};
  font-family: ${theme.lovable.font.sans};
  font-size: ${theme.lovable.fontSize.small};
  font-weight: ${theme.lovable.fontWeight.semibold};
  text-decoration: none;
  background: ${theme.lovable.color.surface};
  color: ${theme.lovable.color.ink};
  transition: background ${theme.lovable.transition};

  &[data-variant='ghost'] {
    background: transparent;
    color: ${theme.lovable.color.surface};
    border: 1px solid ${theme.lovable.color.muted};
  }

  &:hover {
    background: ${theme.lovable.color.accentSoft};
    color: ${theme.lovable.color.ink};
  }
`

export const AuthorBio = styled.div`
  display: grid;
  gap: 0 ${theme.lovable.spacing.lg};

  ${media.lg} {
    grid-template-columns: repeat(2, 1fr);
  }

  p {
    max-width: none;
  }
`
