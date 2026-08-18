import { Container } from '@/components/Container'
import { useLexicon } from 'src/Custom/Lexicon'
import { supportPageLexicon } from './lexicon'
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
  Blockquote,
  CtaBand,
  CtaGrid,
  CtaCard,
  CtaTitle,
  CtaText,
  CtaLink,
} from './styles'
import { Trans } from 'react-i18next'

export function LovableSupportPage() {
  const { t } = useLexicon(supportPageLexicon)

  const spendItems = t('spend.items', {
    returnObjects: true,
  }) as
    | {
        text: string
        title: string
      }[]
    | undefined
  return (
    <Wrap>
      <Hero>
        <Container>
          <Eyebrow>{t('hero.eyebrow')}</Eyebrow>
          <HeroTitle>{t('hero.title')}</HeroTitle>
          <HeroLead>{t('hero.lead1')}</HeroLead>
          <HeroLead>{t('hero.lead2')}</HeroLead>
        </Container>
      </Hero>

      <Section>
        <Container>
          <SectionHead>
            <Eyebrow>{t('spend.eyebrow')}</Eyebrow>
            <SectionTitle>{t('spend.title')}</SectionTitle>
            <Paragraph>{t('spend.p1')}</Paragraph>
          </SectionHead>

          <SpendGrid>
            {spendItems?.map((item) => (
              <SpendItem key={item.title}>
                <SpendTitle>{item.title}</SpendTitle>
                <SpendText>{item.text}</SpendText>
              </SpendItem>
            ))}
          </SpendGrid>
        </Container>
      </Section>

      <Section data-tint="true">
        <Container>
          <MainGrid>
            <div>
              <SectionHead>
                <Eyebrow>{t('amount.eyebrow')}</Eyebrow>
                <SectionTitle>{t('amount.title')}</SectionTitle>
              </SectionHead>
              <Callout>
                <Trans
                  i18nKey="amount.callout"
                  components={{
                    strong: <Strong />,
                  }}
                />
              </Callout>
              <Paragraph>{t('amount.p1')}</Paragraph>
            </div>

            <FormCard>
              <FormTitle>{t('amount.formTitle')}</FormTitle>
              <FormHint>{t('amount.formHint')}</FormHint>

              <iframe
                src="https://nowpayments.io/embeds/donation-widget?api_key=0a65db4b-1156-446a-bccc-c9527a42be3e"
                width="346"
                height="623"
                // eslint-disable-next-line @typescript-eslint/no-deprecated
                frameBorder="0"
                // eslint-disable-next-line @typescript-eslint/no-deprecated
                scrolling="no"
                style={{
                  overflow: 'hidden',
                }}
              >
                Can not load widget
              </iframe>
            </FormCard>
          </MainGrid>
        </Container>
      </Section>

      <Section>
        <Container variant="narrow">
          <SectionHead>
            <Eyebrow>{t('thanks.eyebrow')}</Eyebrow>
            <SectionTitle>{t('thanks.title')}</SectionTitle>
          </SectionHead>
          <Paragraph>{t('thanks.p1')}</Paragraph>
          <Blockquote>{t('thanks.blockquote')}</Blockquote>
          <Paragraph>{t('thanks.p2')}</Paragraph>
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
              <CtaLink href="/suggest-research" data-variant="ghost">
                {t('cta.card2.link')}
              </CtaLink>
            </CtaCard>
          </CtaGrid>
        </Container>
      </CtaBand>
    </Wrap>
  )
}
