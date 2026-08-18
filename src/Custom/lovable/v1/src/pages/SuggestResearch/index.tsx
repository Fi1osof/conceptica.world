import { Container } from '@/components/Container'
import { useLexicon } from 'src/Custom/Lexicon'
import { suggestResearchLexicon } from './lexicon'
import {
  Wrap,
  Hero,
  Eyebrow,
  HeroTitle,
  HeroLead,
  Section,
  SectionHead,
  SectionTitle,
  Paragraph,
  Strong,
  MainGrid,
  GuideList,
  FormCard,
  FormTitle,
  FormHint,
  Field,
  Label,
  TextArea,
  Input,
  FormRow,
  FormNote,
  SubmitButton,
  StepsGrid,
  Step,
  StepNum,
  StepTitle,
  StepText,
  Blockquote,
  CtaBand,
  CtaGrid,
  CtaCard,
  CtaTitle,
  CtaText,
  CtaLink,
} from './styles'
import { useOpenChatWithMessage } from 'src/components/Chat/hooks/useOpenChatWithMessage'
import { Trans } from 'react-i18next'

export function LovableSuggestResearchPage() {
  const { t } = useLexicon(suggestResearchLexicon)
  const chatHandler = useOpenChatWithMessage()

  const guideList = t('howToDescribe.guideList', {
    returnObjects: true,
  }) as string[] | undefined

  const steps = t('whatHappensNext.steps', {
    returnObjects: true,
  }) as
    | {
        num: string
        title: string
        text: string
      }[]
    | undefined

  return (
    <Wrap>
      <Hero>
        <Container>
          <Eyebrow>{t('hero.eyebrow')}</Eyebrow>
          <HeroTitle>{t('hero.title')}</HeroTitle>
          <HeroLead>{t('hero.lead')}</HeroLead>
        </Container>
      </Hero>

      <Section>
        <Container>
          <MainGrid>
            <div>
              <SectionHead>
                <Eyebrow>{t('howToDescribe.eyebrow')}</Eyebrow>
                <SectionTitle>{t('howToDescribe.title')}</SectionTitle>
                <Paragraph>
                  <Trans
                    i18nKey="howToDescribe.p1"
                    components={{
                      strong: <Strong />,
                    }}
                  />
                </Paragraph>
              </SectionHead>
              <GuideList>
                {guideList?.map((item, i) => (
                  <li
                    // eslint-disable-next-line react/no-array-index-key
                    key={i}
                  >
                    {item}
                  </li>
                ))}
              </GuideList>
              <Paragraph>{t('howToDescribe.p2')}</Paragraph>
            </div>

            <FormCard>
              <FormTitle>{t('form.title')}</FormTitle>
              <FormHint>{t('form.hint')}</FormHint>

              <form onSubmit={chatHandler}>
                <input
                  type="hidden"
                  name="Subject"
                  value={t('form.hiddenSubject')}
                />

                <Field>
                  <Label htmlFor="message">{t('form.messageLabel')}</Label>
                  <TextArea
                    id="message"
                    name="Message"
                    placeholder={t('form.messagePlaceholder')}
                  />
                </Field>

                <Field>
                  <Label htmlFor="contact">{t('form.contactLabel')}</Label>
                  <Input
                    id="contact"
                    name="Contact"
                    type="text"
                    placeholder={t('form.contactPlaceholder')}
                  />
                </Field>

                <FormRow>
                  <FormNote>{t('form.note')}</FormNote>
                  <SubmitButton type="submit" value="">
                    {t('form.submit')}
                  </SubmitButton>
                </FormRow>
              </form>
            </FormCard>
          </MainGrid>
        </Container>
      </Section>

      <Section data-tint="true">
        <Container>
          <SectionHead>
            <Eyebrow>{t('whatHappensNext.eyebrow')}</Eyebrow>
            <SectionTitle>{t('whatHappensNext.title')}</SectionTitle>
          </SectionHead>

          <StepsGrid>
            {steps?.map((step) => (
              <Step key={step.num}>
                <StepNum>{step.num}</StepNum>
                <StepTitle>{step.title}</StepTitle>
                <StepText>{step.text}</StepText>
              </Step>
            ))}
          </StepsGrid>
        </Container>
      </Section>

      <Section>
        <Container variant="narrow">
          <SectionHead>
            <Eyebrow>{t('dontKnowHow.eyebrow')}</Eyebrow>
            <SectionTitle>{t('dontKnowHow.title')}</SectionTitle>
          </SectionHead>
          <Blockquote>{t('dontKnowHow.blockquote')}</Blockquote>
          <Paragraph>{t('dontKnowHow.p1')}</Paragraph>
        </Container>
      </Section>

      <CtaBand>
        <Container>
          <CtaGrid>
            <CtaCard>
              <CtaTitle>{t('cta.card1.title')}</CtaTitle>
              <CtaText>{t('cta.card1.text')}</CtaText>
              <CtaLink href="/concepts">{t('cta.card1.link')}</CtaLink>
            </CtaCard>
            <CtaCard>
              <CtaTitle>{t('cta.card2.title')}</CtaTitle>
              <CtaText>{t('cta.card2.text')}</CtaText>
              <CtaLink href="/support" data-variant="ghost">
                {t('cta.card2.link')}
              </CtaLink>
            </CtaCard>
          </CtaGrid>
        </Container>
      </CtaBand>
    </Wrap>
  )
}
