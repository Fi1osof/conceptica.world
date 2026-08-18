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
import { useLexicon } from 'src/Custom/Lexicon'
import { mainPageLexicon } from '../lexicon'

export function HowItWorks() {
  const { t } = useLexicon(mainPageLexicon)

  const steps = t('block.howItWorks.steps', {
    returnObjects: true,
  }) as
    | {
        title: string
        text: string
      }[]
    | undefined

  return (
    <HowSection>
      <Container>
        <HowInner>
          <HowIntro>
            <HowEyebrow>{t('block.howItWorks.eyebrow')}</HowEyebrow>
            <HowTitle>{t('block.howItWorks.title')}</HowTitle>
            <HowLead>{t('block.howItWorks.lead')}</HowLead>
          </HowIntro>

          <Steps>
            {steps?.map((s, i) => (
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
