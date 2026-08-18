import { Container } from '@/components/Container'
import { ButtonLink } from '@/components/Button'
import {
  AboutSection,
  AboutGrid,
  AboutText,
  AboutEyebrow,
  AboutTitle,
  AboutBody,
} from './styles'

export function AboutBlock() {
  return (
    <AboutSection>
      <Container>
        <AboutGrid>
          <AboutText>
            <AboutEyebrow>О проекте</AboutEyebrow>
            <AboutTitle>Что такое Conceptica?</AboutTitle>
            <AboutBody>
              Conceptica — попытка изменить способ обучения. Не пересказывать
              чужие объяснения, а выяснять, что человек уже понимает, и
              достраивать недостающее. Мы публикуем концепты — короткие тексты
              об идеях, которые меняют способ смотреть на привычное, — и делаем
              AI-агента, который выстраивает такой путь лично для вас.
            </AboutBody>
            <ButtonLink href="/about" variant="outline">
              Подробнее о проекте →
            </ButtonLink>
          </AboutText>
        </AboutGrid>
      </Container>
    </AboutSection>
  )
}
