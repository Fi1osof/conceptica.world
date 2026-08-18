import { Container } from '@/components/Container'
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

const principles = [
  {
    title: 'Задавать хорошие вопросы',
    text: 'Точный вопрос часто важнее готового ответа — он показывает, что именно вы хотите понять.',
  },
  {
    title: 'Замечать непонимание',
    text: 'Момент, когда мы перестали понимать, легко пропустить. Учиться его ловить — навык.',
  },
  {
    title: 'Объяснять просто',
    text: 'За сложными словами почти всегда стоит идея, которую можно рассказать человеческим языком.',
  },
  {
    title: 'Не путать слова и смысл',
    text: 'Знание правильного термина — не то же самое, что понимание того, что за ним стоит.',
  },
]

export function AboutPage() {
  return (
    <AboutWrap>
      <Hero>
        <Container>
          <HeroGrid>
            <div>
              <Eyebrow>О проекте</Eyebrow>
              <HeroTitle>
                Понимание не должно начинаться с правильных слов
              </HeroTitle>
              <HeroLead>
                Conceptica появилась из простой мысли: человеку не должно быть
                необходимо знать правильные слова, чтобы получить доступ к
                знаниям и пониманию.
              </HeroLead>
            </div>
            <HeroFigure>
              <img
                src={aboutHero.src}
                alt="Схема: разрозненные вопросы сходятся в несколько ясных смыслов"
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
              <Eyebrow>Контекст</Eyebrow>
              <SectionTitle>
                Мир усложняется быстрее, чем язык объяснений
              </SectionTitle>
              <Paragraph>
                Появляются новые технологии, профессии, инструменты и тысячи
                новых терминов. При этом за многими сложными словами скрываются
                идеи, которые можно объяснить простым человеческим языком.
              </Paragraph>
              <Paragraph>
                Искусственный интеллект впервые даёт нам возможность
                взаимодействовать с компьютером именно так —{' '}
                <Strong>своими словами</Strong>.
              </Paragraph>
            </div>
            <Figure>
              <img
                src={aboutOpen.src}
                alt="Книга, страницы которой превращаются в сеть связанных идей"
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
            <Eyebrow>Зачем существует Conceptica</Eyebrow>
            <SectionTitle>
              Помогать понимать, а не собирать все знания мира
            </SectionTitle>
            <Paragraph>
              Задача проекта — помогать людям лучше понимать окружающий мир,
              яснее выражать свои мысли и желания и находить более короткие пути
              от вопроса или проблемы к нужному результату. Собрать все знания в
              одном месте невозможно, да и вряд ли нужно. Гораздо важнее четыре
              вещи.
            </Paragraph>
          </SectionHead>

          <CardGrid>
            {principles.map((p, i) => (
              <Card key={p.title}>
                <CardNum>{String(i + 1).padStart(2, '0')}</CardNum>
                <CardTitle>{p.title}</CardTitle>
                <CardText>{p.text}</CardText>
              </Card>
            ))}
          </CardGrid>

          <Paragraph>
            Conceptica исследует такие идеи и публикует их в виде коротких
            концептов и более подробных материалов.
          </Paragraph>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHead>
            <Eyebrow>Почему сейчас</Eyebrow>
            <SectionTitle>
              Раньше человек подстраивался под систему. Теперь — наоборот
            </SectionTitle>
            <Paragraph>
              Большую часть истории человеку приходилось учиться разговаривать
              на языке окружающих систем. С появлением современного AI это
              начинает меняться.
            </Paragraph>
          </SectionHead>

          <ShiftGrid>
            <ShiftPanel data-variant="before">
              <ShiftLabel>Как было</ShiftLabel>
              <ShiftList>
                <li>Чтобы разобраться в новой области — изучать её термины</li>
                <li>Чтобы найти информацию — заранее знать, что искать</li>
                <li>
                  Чтобы пользоваться компьютером — понимать его интерфейс и
                  правила
                </li>
              </ShiftList>
            </ShiftPanel>
            <ShiftArrow aria-hidden="true">→</ShiftArrow>
            <ShiftPanel data-variant="now">
              <ShiftLabel>Как становится</ShiftLabel>
              <ShiftList>
                <li>Описать ситуацию своими словами</li>
                <li>Начать с вопроса, а не с термина</li>
                <li>Получить объяснение на понятном языке</li>
              </ShiftList>
            </ShiftPanel>
          </ShiftGrid>

          <Blockquote>
            Я не знаю, как это правильно называется. Я просто расскажу своими
            словами, что происходит и что хочу понять.
          </Blockquote>

          <Paragraph>
            И начать с этого. Это кажется небольшим изменением, но его
            последствия могут оказаться гораздо значительнее.
          </Paragraph>
        </Container>
      </Section>

      <Section data-tint="true">
        <Container>
          <SectionHead>
            <Eyebrow>Кто делает проект</Eyebrow>
            <SectionTitle>Один автор, много вопросов</SectionTitle>
          </SectionHead>

          <AuthorCard>
            <AuthorPhoto>
              <img
                src={authorPhoto.src}
                alt="Николай Ланец, автор проекта Conceptica"
                width={881}
                height={1024}
                loading="lazy"
              />
            </AuthorPhoto>
            <AuthorBody>
              <AuthorBio>
                <Paragraph>
                  <AuthorName>Николай Ланец</AuthorName>
                  <AuthorRole>
                    Автор проекта · веб-разработка с 2007 года
                  </AuthorRole>
                  Я занимаюсь веб-разработкой более 19 лет и много лет работаю с
                  технологиями, интернетом и программными системами. Этот опыт
                  позволяет мне относительно легко ориентироваться во многих
                  вещах, которые человеку без технической подготовки могут
                  казаться сложными.
                </Paragraph>
                <Paragraph>
                  Но цель Conceptica не в том, чтобы сделать всех программистами
                  или специалистами. Наоборот. Я хочу помогать людям понимать,{' '}
                  <Strong>что им действительно нужно знать</Strong>, а где
                  сложный путь можно заменить более простым — особенно сейчас,
                  когда возможности технологий меняются быстрее, чем успевают
                  обновляться привычные способы решения задач.
                </Paragraph>
              </AuthorBio>
            </AuthorBody>
          </AuthorCard>

          <StatRow>
            <Stat>
              <StatValue>19+</StatValue>
              <StatLabel>
                лет работы с технологиями и программными системами
              </StatLabel>
            </Stat>
            <Stat>
              <StatValue>∞</StatValue>
              <StatLabel>вопросов, которые ещё предстоит разобрать</StatLabel>
            </Stat>
          </StatRow>
        </Container>
      </Section>

      <Section>
        <Container>
          <SplitGrid>
            <div>
              <Eyebrow>Это развивающийся проект</Eyebrow>
              <SectionTitle>Не энциклопедия, а исследование</SectionTitle>
              <Paragraph>
                Conceptica — не попытка создать окончательную правильную картину
                мира. Здесь могут появляться гипотезы, наблюдения и идеи,
                которые со временем будут уточняться, дополняться или
                пересматриваться.
              </Paragraph>
              <Paragraph>
                Главная цель — исследовать, как люди и машины могут лучше
                понимать знания, окружающий мир и друг друга. Поэтому важной
                частью проекта являются вопросы самих читателей: если есть
                что-то, что вам хотелось бы понять, но подходящего материала
                пока нет, вы можете{' '}
                <InlineLink href="/suggest-research">
                  предложить вопрос для исследования
                </InlineLink>
                . Не нужно знать правильные термины — просто расскажите своими
                словами.
              </Paragraph>
            </div>
            <div>
              <Eyebrow>Доступ к знаниям</Eyebrow>
              <SectionTitle>Открыто по умолчанию</SectionTitle>
              <Paragraph>
                Мне особенно важно, чтобы возможность разобраться в новой теме
                не зависела от страны, уровня образования или способности
                человека заплатить за доступ к объяснению.
              </Paragraph>
              <Paragraph>
                При этом создание и развитие проекта требует времени и ресурсов.
                В будущем вокруг Conceptica могут появляться дополнительные
                инструменты и услуги, в том числе платные. Это не противоречит
                открытости основных материалов: устойчивый проект должен иметь
                возможность финансировать собственное развитие.
              </Paragraph>
            </div>
          </SplitGrid>
        </Container>
      </Section>

      <CtaBand>
        <Container>
          <CtaGrid>
            <CtaCard>
              <CtaTitle>Читайте, спорьте, проверяйте</CtaTitle>
              <CtaText>
                Прежде всего — читайте, задавайте вопросы, спорьте, проверяйте
                идеи и используйте то, что оказалось для вас полезным.
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
    </AboutWrap>
  )
}
