import { Button, type ButtonLinkProps } from '@/components/Button'
import { useOpenChatWithMessage } from 'src/components/Chat/hooks/useOpenChatWithMessage'

export function AskAgentButton(props: Omit<ButtonLinkProps, 'href'>) {
  const onClick = useOpenChatWithMessage()

  return (
    <Button variant="primary" onClick={onClick} {...props}>
      {props.children ?? 'Спросить AI-агента ✦'}
    </Button>
  )
}
