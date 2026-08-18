import { Container } from '@/components/Container'
import {
  HowSection,
  HowInner,
  HowIntro,
  HowEyebrow,
  HowTitle,
  HowLead,
  Steps,
  Step,
  StepNum,
  StepBody,
  StepTitle,
  StepText,
} from './styles'

const steps = [
  {
    title: 'Вы спрашиваете своими словами',
    text: 'Никаких терминов и «правильных промптов». Достаточно одного предложения о том, что вас смущает.',
  },
  {
    title: 'Агент выясняет, что вы уже понимаете',
    text: 'Он ищет опору в том, что у вас уже есть в голове, а не начинает объяснение с нуля.',
  },
  {
    title: 'Строится минимальный путь',
    text: 'Только те шаги, без которых новое понимание не собирается. Лишнее отбрасывается.',
  },
  {
    title: 'Термины приходят в конце',
    text: 'Когда понимание уже собрано, общепринятые слова становятся ярлыками, а не барьером.',
  },
]

export function HowItWorks() {
  return (
    <HowSection>
      <Container>
        <HowInner>
          <HowIntro>
            <HowEyebrow>Как это работает</HowEyebrow>
            <HowTitle>Не знаете правильных слов? Они не нужны</HowTitle>
            <HowLead>
              Обычное обучение начинается с чужих терминов. Здесь — наоборот:
              сначала ваше понимание, потом слова для него.
            </HowLead>
          </HowIntro>

          <Steps>
            {steps.map((s, i) => (
              <Step key={s.title}>
                <StepNum>{String(i + 1).padStart(2, '0')}</StepNum>
                <StepBody>
                  <StepTitle>{s.title}</StepTitle>
                  <StepText>{s.text}</StepText>
                </StepBody>
              </Step>
            ))}
          </Steps>
        </HowInner>
      </Container>
    </HowSection>
  )
}
