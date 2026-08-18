import { useState, useCallback } from 'react'
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
  SpendGrid,
  SpendItem,
  SpendTitle,
  SpendText,
  MainGrid,
  Callout,
  FormCard,
  FormTitle,
  FormHint,
  Field,
  Label,
  PresetRow,
  PresetButton,
  AmountRow,
  Input,
  Select,
  SubmitButton,
  FormNote,
  CoinRow,
  Blockquote,
  CtaBand,
  CtaGrid,
  CtaCard,
  CtaTitle,
  CtaText,
  CtaLink,
} from './styles'

/** NOWPayments donation link (public checkout, no keys on the client). */
// const NOWPAYMENTS_DONATION_URL = 'https://nowpayments.io/donation/conceptica'

const PRESETS = [10, 25, 50, 100]
const CURRENCIES = ['USD', 'EUR']
const COINS = [
  'BTC',
  'ETH',
  'USDT',
  'USDC',
  'TON',
  'SOL',
  'TRX',
  'XMR',
  '+ 200 more',
]

export function LovableSupportPage() {
  const [amount, setAmount] = useState('25')
  const [currency, setCurrency] = useState('USD')

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value } = e.target

      switch (name) {
        case 'amount':
          setAmount(value)
          break
        case 'currency':
          setCurrency(value)
          break
      }
    },
    [],
  )

  // const donateUrl = () => {
  //   const params = new URLSearchParams()
  //   const value = Number(amount)
  //   if (Number.isFinite(value) && value > 0) {
  //     params.set('amount', String(value))
  //     params.set('currency', currency.toLowerCase())
  //   }
  //   const query = params.toString()
  //   return query ? `${NOWPAYMENTS_DONATION_URL}?${query}` : NOWPAYMENTS_DONATION_URL
  // }

  return (
    <Wrap>
      <Hero>
        <Container>
          <Eyebrow>Поддержать</Eyebrow>
          <HeroTitle>Поддержать Conceptica</HeroTitle>
          <HeroLead>
            Conceptica — открытый проект. Основные материалы доступны всем
            независимо от страны, уровня образования или возможности заплатить.
          </HeroLead>
          <HeroLead>
            Если вы считаете эту работу полезной и хотите, чтобы проект
            продолжал развиваться, вы можете поддержать его.
          </HeroLead>
        </Container>
      </Hero>

      <Section>
        <Container>
          <SectionHead>
            <Eyebrow>На что идёт поддержка</Eyebrow>
            <SectionTitle>
              Создание Conceptica требует не только идей
            </SectionTitle>
            <Paragraph>
              Ваша поддержка даёт мне возможность уделять проекту больше времени
              и продолжать делать его лучше.
            </Paragraph>
          </SectionHead>

          <SpendGrid>
            <SpendItem>
              <SpendTitle>Исследования</SpendTitle>
              <SpendText>
                Время на изучение темы, проверку источников и написание
                материалов.
              </SpendText>
            </SpendItem>
            <SpendItem>
              <SpendTitle>Сайт</SpendTitle>
              <SpendText>
                Разработка и поддержка платформы, на которой всё это живёт.
              </SpendText>
            </SpendItem>
            <SpendItem>
              <SpendTitle>Инфраструктура</SpendTitle>
              <SpendText>
                Серверы, хранилище и сервисы, которые держат проект онлайн.
              </SpendText>
            </SpendItem>
            <SpendItem>
              <SpendTitle>AI-инструменты</SpendTitle>
              <SpendText>
                Модели и агенты, помогающие превращать вопросы в объяснения.
              </SpendText>
            </SpendItem>
            <SpendItem>
              <SpendTitle>Переводы</SpendTitle>
              <SpendText>
                Материалы становятся доступны на большем числе языков.
              </SpendText>
            </SpendItem>
            <SpendItem>
              <SpendTitle>Эксперименты</SpendTitle>
              <SpendText>
                Новые форматы подачи и идеи, которые ещё предстоит проверить.
              </SpendText>
            </SpendItem>
          </SpendGrid>
        </Container>
      </Section>

      <Section data-tint="true">
        <Container>
          <MainGrid>
            <div>
              <SectionHead>
                <Eyebrow>Сколько отправить</Eyebrow>
                <SectionTitle>
                  Столько, сколько вы сами считаете разумным
                </SectionTitle>
              </SectionHead>
              <Callout>
                Если даже небольшой донат является для вас существенным расходом
                — <Strong>ничего не отправляйте</Strong>. Читайте материалы,
                задавайте вопросы, делитесь интересными идеями и используйте
                Conceptica для решения своих задач. Этого достаточно.
              </Callout>
              <Paragraph>
                Если же сумма для вас несущественна, а проект кажется полезным,
                любая поддержка поможет его развитию.
              </Paragraph>
              <CoinRow>
                {COINS.map((coin) => (
                  <li key={coin}>{coin}</li>
                ))}
              </CoinRow>
            </div>

            <FormCard>
              <FormTitle>Поддержать проект</FormTitle>
              <FormHint>
                Оплата проходит через NOWPayments — криптоплатёжный сервис.
                Выберите сумму, дальше можно будет выбрать удобную монету.
              </FormHint>

              <form>
                <Field>
                  <Label>Быстрый выбор</Label>
                  <PresetRow>
                    {PRESETS.map((preset) => (
                      <PresetButton
                        key={preset}
                        type="button"
                        data-active={amount === String(preset)}
                      >
                        {preset} {currency === 'USD' ? '$' : '€'}
                      </PresetButton>
                    ))}
                  </PresetRow>
                </Field>

                <Field>
                  <Label htmlFor="amount">Сумма</Label>
                  <AmountRow>
                    <Input
                      id="amount"
                      name="amount"
                      type="number"
                      min="1"
                      step="1"
                      inputMode="decimal"
                      value={amount}
                      onChange={handleChange}
                      placeholder="Например, 25"
                    />
                    <Select
                      name="currency"
                      aria-label="Валюта"
                      value={currency}
                      onChange={handleChange}
                    >
                      {CURRENCIES.map((code) => (
                        <option key={code} value={code}>
                          {code}
                        </option>
                      ))}
                    </Select>
                  </AmountRow>
                </Field>

                <SubmitButton type="submit" disabled={!(Number(amount) > 0)}>
                  Перейти к оплате →
                </SubmitButton>
                <FormNote>
                  Вы перейдёте на защищённую страницу NOWPayments. Мы не
                  получаем и не храним данные вашего кошелька.
                </FormNote>
              </form>
            </FormCard>
          </MainGrid>
        </Container>
      </Section>

      <Section>
        <Container variant="narrow">
          <SectionHead>
            <Eyebrow>Спасибо</Eyebrow>
            <SectionTitle>Возможность продолжать эту работу</SectionTitle>
          </SectionHead>
          <Paragraph>
            Я не могу обещать, во что именно превратится Conceptica через
            несколько лет. Это исследовательский и развивающийся проект, и
            многие идеи ещё предстоит проверить.
          </Paragraph>
          <Blockquote>
            Но ваша поддержка даёт ему самое ценное — возможность продолжать эту
            работу.
          </Blockquote>
          <Paragraph>
            Спасибо всем, кто помогает Conceptica развиваться.
          </Paragraph>
        </Container>
      </Section>

      <CtaBand>
        <Container>
          <CtaGrid>
            <CtaCard>
              <CtaTitle>Читайте концепты</CtaTitle>
              <CtaText>
                Материалы открыты для всех — поддержка не обязательна, чтобы ими
                пользоваться.
              </CtaText>
              <CtaLink href="/concepts">Открыть концепты →</CtaLink>
            </CtaCard>
            <CtaCard>
              <CtaTitle>Предложить исследование</CtaTitle>
              <CtaText>
                Расскажите свой вопрос своими словами — он может стать темой
                следующего материала.
              </CtaText>
              <CtaLink href="/suggest-research" data-variant="ghost">
                Предложить тему →
              </CtaLink>
            </CtaCard>
          </CtaGrid>
        </Container>
      </CtaBand>
    </Wrap>
  )
}
