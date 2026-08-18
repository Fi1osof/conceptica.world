import { LovableLayout } from '@/components/Layout'
import { ChatWidget } from 'src/components/Chat/ChatWidget'

export const CustomLayout: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <>
      <LovableLayout>{children}</LovableLayout>
      <ChatWidget />
    </>
  )
}
