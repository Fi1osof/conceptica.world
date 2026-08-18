import styled from 'styled-components'
import { theme, media } from '@/theme'

export const Wrap = styled.div`
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
  max-width: 56ch;
`

/* ---------- Sections ---------- */

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
  margin: ${theme.lovable.spacing.md} 0 0;
  max-width: 62ch;
`

export const Strong = styled.strong`
  color: ${theme.lovable.color.ink};
  font-weight: ${theme.lovable.fontWeight.semibold};
`

/* ---------- Spend grid ---------- */

export const SpendGrid = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: ${theme.lovable.spacing.md};

  ${media.sm} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${media.lg} {
    grid-template-columns: repeat(3, 1fr);
  }
`

export const SpendItem = styled.li`
  background: ${theme.lovable.color.surface};
  border: 1px solid ${theme.lovable.color.border};
  border-radius: ${theme.lovable.radius.md};
  padding: ${theme.lovable.spacing.md};
  box-shadow: ${theme.lovable.shadow.card};
`

export const SpendTitle = styled.h3`
  font-family: ${theme.lovable.font.serif};
  font-size: ${theme.lovable.fontSize.h3};
  font-weight: ${theme.lovable.fontWeight.semibold};
  color: ${theme.lovable.color.ink};
  margin: 0 0 ${theme.lovable.spacing.xs};
`

export const SpendText = styled.p`
  font-family: ${theme.lovable.font.sans};
  font-size: ${theme.lovable.fontSize.small};
  line-height: ${theme.lovable.lineHeight.base};
  color: ${theme.lovable.color.muted};
  margin: 0;
`

/* ---------- Amount / donate form ---------- */

export const MainGrid = styled.div`
  display: grid;
  gap: ${theme.lovable.spacing.xl};

  ${media.lg} {
    grid-template-columns: 1fr 0.9fr;
    gap: ${theme.lovable.spacing.xxl};
    align-items: start;
  }
`

export const Callout = styled.div`
  margin-top: ${theme.lovable.spacing.lg};
  padding: ${theme.lovable.spacing.md} ${theme.lovable.spacing.lg};
  border-left: 3px solid ${theme.lovable.color.accent};
  background: ${theme.lovable.color.surface};
  border-radius: 0 ${theme.lovable.radius.md} ${theme.lovable.radius.md} 0;
  font-family: ${theme.lovable.font.sans};
  font-size: ${theme.lovable.fontSize.body};
  line-height: ${theme.lovable.lineHeight.relaxed};
  color: ${theme.lovable.color.inkSoft};
`

export const FormCard = styled.div`
  background: ${theme.lovable.color.surface};
  border: 1px solid ${theme.lovable.color.border};
  border-radius: ${theme.lovable.radius.lg};
  padding: ${theme.lovable.spacing.lg};
  box-shadow: ${theme.lovable.shadow.card};

  ${media.md} {
    padding: ${theme.lovable.spacing.xl};
  }
`

export const FormTitle = styled.h3`
  font-family: ${theme.lovable.font.serif};
  font-size: ${theme.lovable.fontSize.h3};
  font-weight: ${theme.lovable.fontWeight.semibold};
  color: ${theme.lovable.color.ink};
  margin: 0 0 ${theme.lovable.spacing.xs};

  ${media.md} {
    font-size: 1.5rem;
  }
`

export const FormHint = styled.p`
  font-family: ${theme.lovable.font.sans};
  font-size: ${theme.lovable.fontSize.small};
  line-height: ${theme.lovable.lineHeight.base};
  color: ${theme.lovable.color.muted};
  margin: 0 0 ${theme.lovable.spacing.md};
`

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.lovable.spacing.xs};
  margin-bottom: ${theme.lovable.spacing.md};
`

export const Label = styled.label`
  font-family: ${theme.lovable.font.sans};
  font-size: ${theme.lovable.fontSize.meta};
  font-weight: ${theme.lovable.fontWeight.semibold};
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${theme.lovable.color.muted};
`

export const PresetRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.lovable.spacing.xs};
`

export const PresetButton = styled.button`
  font-family: ${theme.lovable.font.sans};
  font-size: ${theme.lovable.fontSize.small};
  font-weight: ${theme.lovable.fontWeight.semibold};
  color: ${theme.lovable.color.ink};
  background: ${theme.lovable.color.surfaceRaised};
  border: 1px solid ${theme.lovable.color.borderStrong};
  border-radius: ${theme.lovable.radius.pill};
  padding: 0.55rem 1.05rem;
  cursor: pointer;
  transition:
    background ${theme.lovable.transition},
    border-color ${theme.lovable.transition},
    color ${theme.lovable.transition};
  -webkit-tap-highlight-color: transparent;

  &[data-active='true'] {
    background: ${theme.lovable.color.accentSoft};
    border-color: ${theme.lovable.color.accent};
    color: ${theme.lovable.color.accent};
  }

  &:hover {
    border-color: ${theme.lovable.color.ink};
  }
`

export const AmountRow = styled.div`
  display: flex;
  gap: ${theme.lovable.spacing.xs};
  align-items: stretch;
`

export const Input = styled.input`
  flex: 1 1 auto;
  min-width: 0;
  width: 100%;
  font-family: ${theme.lovable.font.sans};
  font-size: ${theme.lovable.fontSize.body};
  color: ${theme.lovable.color.ink};
  background: ${theme.lovable.color.surfaceRaised};
  border: 1px solid ${theme.lovable.color.borderStrong};
  border-radius: ${theme.lovable.radius.md};
  padding: 0.7rem ${theme.lovable.spacing.md};
  outline: none;
  transition:
    border-color ${theme.lovable.transition},
    box-shadow ${theme.lovable.transition};

  &::placeholder {
    color: ${theme.lovable.color.faint};
  }

  &:focus {
    border-color: ${theme.lovable.color.accent};
    box-shadow: 0 0 0 3px ${theme.lovable.color.accentSoft};
  }
`

export const Select = styled.select`
  font-family: ${theme.lovable.font.sans};
  font-size: ${theme.lovable.fontSize.body};
  color: ${theme.lovable.color.ink};
  background: ${theme.lovable.color.surfaceRaised};
  border: 1px solid ${theme.lovable.color.borderStrong};
  border-radius: ${theme.lovable.radius.md};
  padding: 0.7rem ${theme.lovable.spacing.sm};
  outline: none;
  cursor: pointer;

  &:focus {
    border-color: ${theme.lovable.color.accent};
    box-shadow: 0 0 0 3px ${theme.lovable.color.accentSoft};
  }
`

export const SubmitButton = styled.button`
  display: inline-flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 0.4em;
  font-family: ${theme.lovable.font.sans};
  font-weight: ${theme.lovable.fontWeight.semibold};
  font-size: ${theme.lovable.fontSize.body};
  line-height: 1;
  padding: 0.9rem 1.6rem;
  border-radius: ${theme.lovable.radius.pill};
  border: 1px solid transparent;
  background: ${theme.lovable.color.accent};
  color: #fff;
  cursor: pointer;
  transition:
    background ${theme.lovable.transition},
    transform ${theme.lovable.transition};
  -webkit-tap-highlight-color: transparent;

  &:hover {
    background: ${theme.lovable.color.accentHover};
  }
  &:active {
    transform: translateY(1px);
  }
  &:disabled {
    background: ${theme.lovable.color.borderStrong};
    cursor: not-allowed;
  }
`

export const FormNote = styled.p`
  font-family: ${theme.lovable.font.sans};
  font-size: ${theme.lovable.fontSize.meta};
  line-height: ${theme.lovable.lineHeight.base};
  color: ${theme.lovable.color.muted};
  margin: ${theme.lovable.spacing.sm} 0 0;
  text-align: center;
`

export const CoinRow = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.lovable.spacing.xs};
  margin: ${theme.lovable.spacing.md} 0 0;
  padding: 0;

  li {
    font-family: ${theme.lovable.font.mono};
    font-size: ${theme.lovable.fontSize.meta};
    color: ${theme.lovable.color.muted};
    border: 1px solid ${theme.lovable.color.border};
    border-radius: ${theme.lovable.radius.pill};
    padding: 0.3rem 0.7rem;
  }
`

/* ---------- Thanks ---------- */

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

export const CtaLink = styled.a`
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
