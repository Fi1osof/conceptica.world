import { Container } from '@/components/Container'
import { useLexicon } from 'src/Custom/Lexicon'
import { aboutPageLexicon } from './lexicon'
import aboutHero from './assets/about-hero.jpg'
import aboutOpen from './assets/about-open.jpg'
import authorPhoto from './assets/author-nikolay-lanets.jpg'
import {
  AboutWrap,
  Hero,
  HeroGrid,
  Eyebrow,
  HeroTitle,
  HeroLead,
  HeroFigure,
  Section,
  SectionHead,
  SectionTitle,
  Paragraph,
  Strong,
  InlineLink,
  SplitGrid,
  Figure,
  CardGrid,
  Card,
  CardNum,
  CardTitle,
  CardText,
  ShiftGrid,
  ShiftPanel,
  ShiftLabel,
  ShiftList,
  ShiftArrow,
  Blockquote,
  AuthorCard,
  AuthorPhoto,
  AuthorBody,
  AuthorName,
  AuthorRole,
  AuthorBio,
  StatRow,
  Stat,
  StatValue,
  StatLabel,
  CtaBand,
  CtaGrid,
  CtaCard,
  CtaTitle,
  CtaText,
  CtaLink,
} from './styles'
import { Trans } from 'react-i18next'

export function LovableAboutPage() {
  const { t } = useLexicon(aboutPageLexicon)

  const principles = t('purpose.principles', {
    returnObjects: true,
  }) as
    | {
        text: string
        title: string
      }[]
    | undefined

  const beforeList = t('whyNow.beforeList', { returnObjects: true }) as
    | string[]
    | undefined

  const nowList = t('whyNow.nowList', { returnObjects: true }) as
    | string[]
    | undefined

  return (
    <AboutWrap>
      <Hero>
        <Container>
          <HeroGrid>
            <div>
              <Eyebrow>{t('hero.eyebrow')}</Eyebrow>
              <HeroTitle>{t('hero.title')}</HeroTitle>
              <HeroLead>{t('hero.lead')}</HeroLead>
            </div>
            <HeroFigure>
              <img
                src={aboutHero.src}
                alt={t('hero.alt')}
                width={1280}
                height={912}
              />
            </HeroFigure>
          </HeroGrid>
        </Container>
      </Hero>

      <Section>
        <Container>
          <SplitGrid>
            <div>
              <Eyebrow>{t('context.eyebrow')}</Eyebrow>
              <SectionTitle>{t('context.title')}</SectionTitle>
              <Paragraph>{t('context.p1')}</Paragraph>
              <Paragraph>
                <Trans
                  i18nKey="context.p2"
                  components={{
                    strong: <Strong />,
                  }}
                />
              </Paragraph>
            </div>
            <Figure>
              <img
                src={aboutOpen.src}
                alt={t('context.alt')}
                loading="lazy"
                width={1008}
                height={1008}
              />
            </Figure>
          </SplitGrid>
        </Container>
      </Section>

      <Section data-tint="true">
        <Container>
          <SectionHead>
            <Eyebrow>{t('purpose.eyebrow')}</Eyebrow>
            <SectionTitle>{t('purpose.title')}</SectionTitle>
            <Paragraph>{t('purpose.p1')}</Paragraph>
          </SectionHead>

          <CardGrid>
            {principles?.map((p, i) => (
              <Card key={p.title}>
                <CardNum>{String(i + 1).padStart(2, '0')}</CardNum>
                <CardTitle>{p.title}</CardTitle>
                <CardText>{p.text}</CardText>
              </Card>
            ))}
          </CardGrid>

          <Paragraph>{t('purpose.p2')}</Paragraph>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHead>
            <Eyebrow>{t('whyNow.eyebrow')}</Eyebrow>
            <SectionTitle>{t('whyNow.title')}</SectionTitle>
            <Paragraph>{t('whyNow.p1')}</Paragraph>
          </SectionHead>

          <ShiftGrid>
            <ShiftPanel data-variant="before">
              <ShiftLabel>{t('whyNow.beforeLabel')}</ShiftLabel>
              <ShiftList>
                {beforeList?.map((item, i) => (
                  <li
                    // eslint-disable-next-line react/no-array-index-key
                    key={i}
                  >
                    {item}
                  </li>
                ))}
              </ShiftList>
            </ShiftPanel>
            <ShiftArrow aria-hidden="true">→</ShiftArrow>
            <ShiftPanel data-variant="now">
              <ShiftLabel>{t('whyNow.nowLabel')}</ShiftLabel>
              <ShiftList>
                {nowList?.map((item: string, i: number) => (
                  <li
                    // eslint-disable-next-line react/no-array-index-key
                    key={i}
                  >
                    {item}
                  </li>
                ))}
              </ShiftList>
            </ShiftPanel>
          </ShiftGrid>

          <Blockquote>{t('whyNow.blockquote')}</Blockquote>

          <Paragraph>{t('whyNow.p2')}</Paragraph>
        </Container>
      </Section>

      <Section data-tint="true">
        <Container>
          <SectionHead>
            <Eyebrow>{t('author.eyebrow')}</Eyebrow>
            <SectionTitle>{t('author.title')}</SectionTitle>
          </SectionHead>

          <AuthorCard>
            <AuthorPhoto>
              <img
                src={authorPhoto.src}
                alt={t('author.alt')}
                width={881}
                height={1024}
                loading="lazy"
              />
            </AuthorPhoto>
            <AuthorBody>
              <AuthorBio>
                <div>
                  <AuthorName>{t('author.name')}</AuthorName>
                  <AuthorRole>{t('author.role')}</AuthorRole>
                  {t('author.p1')}
                </div>
                <div>
                  <Trans
                    i18nKey="author.p2"
                    components={{
                      strong: <Strong />,
                    }}
                  />
                </div>
              </AuthorBio>
            </AuthorBody>
          </AuthorCard>

          <StatRow>
            <Stat>
              <StatValue>{t('author.stat1Value')}</StatValue>
              <StatLabel>{t('author.stat1Label')}</StatLabel>
            </Stat>
            <Stat>
              <StatValue>{t('author.stat2Value')}</StatValue>
              <StatLabel>{t('author.stat2Label')}</StatLabel>
            </Stat>
          </StatRow>
        </Container>
      </Section>

      <Section>
        <Container>
          <SplitGrid>
            <div>
              <Eyebrow>{t('evolving.eyebrow')}</Eyebrow>
              <SectionTitle>{t('evolving.title')}</SectionTitle>
              <Paragraph>{t('evolving.p1')}</Paragraph>
              <Paragraph>
                <Trans
                  i18nKey="evolving.p2"
                  components={[<InlineLink href="/suggest-research" />]}
                />
              </Paragraph>
            </div>
            <div>
              <Eyebrow>{t('access.eyebrow')}</Eyebrow>
              <SectionTitle>{t('access.title')}</SectionTitle>
              <Paragraph>{t('access.p1')}</Paragraph>
              <Paragraph>{t('access.p2')}</Paragraph>
            </div>
          </SplitGrid>
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
    </AboutWrap>
  )
}
