import { ButtonLink, type ButtonLinkProps } from '@/components/Button'

/**
 * Stub entry-point for the AI agent. Navigates to /ask placeholder page.
 */
export function AskAgentButton(props: Omit<ButtonLinkProps, 'href'>) {
  return (
    <ButtonLink href="/ask" variant="primary" {...props}>
      {props.children ?? 'Спросить AI-агента ✦'}
    </ButtonLink>
  )
}
