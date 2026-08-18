import { Container } from '@/components/Container'
import { StubWrap, StubTitle, StubText } from './styles'

export function StubPage({
  title,
  children,
}: {
  title: string
  children?: React.ReactNode
}) {
  return (
    <StubWrap>
      <Container variant="narrow">
        <StubTitle>{title}</StubTitle>
        <StubText>{children}</StubText>
      </Container>
    </StubWrap>
  )
}
