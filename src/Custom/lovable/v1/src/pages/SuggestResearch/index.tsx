import { Container } from '@/components/Container'
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

export function LovableSuggestResearchPage() {
  return (
    <Wrap>
      <Hero>
        <Container>
          <Eyebrow>Предложить исследование</Eyebrow>
          <HeroTitle>Расскажите вопрос своими словами</HeroTitle>
          <HeroLead>
            Есть вопрос, который давно не даёт покоя? Что-то, что вы хотите
            понять, но пока не нашли хорошего объяснения? Расскажите об этом
            нашему AI-агенту.
          </HeroLead>
        </Container>
      </Hero>

      <Section>
        <Container>
          <MainGrid>
            <div>
              <SectionHead>
                <Eyebrow>Как описать</Eyebrow>
                <SectionTitle>Не нужно искать правильные слова</SectionTitle>
                <Paragraph>
                  Не нужно искать правильные термины, выбирать категорию или
                  пытаться красиво сформулировать тему. Просто объясните{' '}
                  <Strong>своими словами</Strong>:
                </Paragraph>
              </SectionHead>
              <GuideList>
                <li>что вас интересует;</li>
                <li>что вы уже знаете или думаете об этом;</li>
                <li>что именно вам непонятно;</li>
                <li>почему этот вопрос для вас важен.</li>
              </GuideList>
              <Paragraph>
                Агент поможет уточнить мысль, если это понадобится. Ваш вопрос
                может стать темой одного из следующих исследований Conceptica.
              </Paragraph>
            </div>

            <FormCard>
              <FormTitle>Опишите вопрос</FormTitle>
              <FormHint>
                Поля формы — заглушка. Логика отправки появится позже. Пока
                можно писать что угодно.
              </FormHint>

              <form>
                <Field>
                  <Label htmlFor="message">Текст сообщения</Label>
                  <TextArea
                    id="message"
                    name="message"
                    placeholder="Я не знаю, как это правильно называется, но меня давно интересует вот что…"
                  />
                </Field>

                <Field>
                  <Label htmlFor="contact">Контакты (необязательно)</Label>
                  <Input
                    id="contact"
                    name="contact"
                    type="text"
                    placeholder="email, telegram или другой способ связи"
                  />
                </Field>

                <FormRow>
                  <FormNote>
                    Ответ обычно приходит в течение нескольких дней.
                  </FormNote>
                  <SubmitButton type="submit">Отправить →</SubmitButton>
                </FormRow>
              </form>
            </FormCard>
          </MainGrid>
        </Container>
      </Section>

      <Section data-tint="true">
        <Container>
          <SectionHead>
            <Eyebrow>Что происходит дальше</Eyebrow>
            <SectionTitle>От вопроса до исследования</SectionTitle>
          </SectionHead>

          <StepsGrid>
            <Step>
              <StepNum>01</StepNum>
              <StepTitle>Читаем вопросы</StepTitle>
              <StepText>
                Мы читаем предложенные вопросы и выбираем среди них темы для
                будущих исследований.
              </StepText>
            </Step>
            <Step>
              <StepNum>02</StepNum>
              <StepTitle>Уточняем мысль</StepTitle>
              <StepText>
                Если нужно, агент задаёт уточняющие вопросы, чтобы точнее
                понять, что вас интересует.
              </StepText>
            </Step>
            <Step>
              <StepNum>03</StepNum>
              <StepTitle>Сообщаем о результате</StepTitle>
              <StepText>
                Если вы оставили способ связи, мы напишем, когда материал по
                теме появится.
              </StepText>
            </Step>
          </StepsGrid>
        </Container>
      </Section>

      <Section>
        <Container variant="narrow">
          <SectionHead>
            <Eyebrow>Не знаете, как сформулировать?</Eyebrow>
            <SectionTitle>Так и напишите</SectionTitle>
          </SectionHead>
          <Blockquote>
            Я не знаю, как это правильно называется, но меня давно интересует
            вот что…
          </Blockquote>
          <Paragraph>Этого достаточно.</Paragraph>
        </Container>
      </Section>

      <CtaBand>
        <Container>
          <CtaGrid>
            <CtaCard>
              <CtaTitle>Читайте готовые концепты</CtaTitle>
              <CtaText>
                Возможно, похожая тема уже разобрана — загляните в список
                концептов.
              </CtaText>
              <CtaLink href="/concepts">Открыть концепты →</CtaLink>
            </CtaCard>
            <CtaCard>
              <CtaTitle>Поддержать проект</CtaTitle>
              <CtaText>
                Если вы хотите помочь Conceptica существовать и развиваться,
                проект можно поддержать.
              </CtaText>
              <CtaLink href="/support" data-variant="ghost">
                Поддержать →
              </CtaLink>
            </CtaCard>
          </CtaGrid>
        </Container>
      </CtaBand>
    </Wrap>
  )
}
