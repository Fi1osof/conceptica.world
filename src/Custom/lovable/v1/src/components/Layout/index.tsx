import { Footer } from '../Footer'
import { Header } from '../Header'
import { LovableLayoutStyled } from './styles'

type LovableLayoutProps = React.PropsWithChildren

export const LovableLayout: React.FC<LovableLayoutProps> = ({ children }) => {
  return (
    <LovableLayoutStyled>
      <Header />
      <main>{children}</main>
      <Footer />
    </LovableLayoutStyled>
  )
}
