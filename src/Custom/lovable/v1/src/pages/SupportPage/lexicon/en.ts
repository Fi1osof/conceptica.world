import { LexiconObject } from 'src/Custom/Lexicon'

export const en: LexiconObject = {
  hero: {
    eyebrow: 'Support',
    title: 'Support Conceptica',
    lead1:
      'Conceptica is an open project. Main materials are available to everyone regardless of country, education level, or ability to pay.',
    lead2:
      'If you find this work useful and want the project to continue developing, you can support it.',
  },
  spend: {
    eyebrow: 'What support goes to',
    title: 'Creating Conceptica requires more than just ideas',
    p1: 'Your support gives me the opportunity to dedicate more time to the project and continue making it better.',
    items: [
      {
        title: 'Research',
        text: 'Time to study the topic, verify sources, and write materials.',
      },
      {
        title: 'Website',
        text: 'Development and maintenance of the platform where everything lives.',
      },
      {
        title: 'Infrastructure',
        text: 'Servers, storage, and services that keep the project online.',
      },
      {
        title: 'AI tools',
        text: 'Models and agents that help turn questions into explanations.',
      },
      {
        title: 'Translations',
        text: 'Materials become available in more languages.',
      },
      {
        title: 'Experiments',
        text: 'New formats and ideas that have yet to be tested.',
      },
    ],
  },
  amount: {
    eyebrow: 'How much to send',
    title: 'As much as you consider reasonable',
    callout:
      'If even a small donation is a significant expense for you — <strong>send nothing</strong>. Read materials, ask questions, share interesting ideas, and use Conceptica to solve your tasks. That is enough.',
    p1: 'If the amount is insignificant to you and the project seems useful, any support will help its development.',
    formTitle: 'Support the project',
    formHint:
      'Payment goes through NOWPayments — a crypto payment service. Choose an amount, then you can select a convenient coin.',
  },
  thanks: {
    eyebrow: 'Thank you',
    title: 'The opportunity to continue this work',
    p1: 'I cannot promise exactly what Conceptica will become in a few years. This is a research and evolving project, and many ideas have yet to be tested.',
    blockquote:
      'But your support gives it the most valuable thing — the opportunity to continue this work.',
    p2: 'Thank you to everyone who helps Conceptica develop.',
  },
  cta: {
    card1: {
      title: 'Read concepts',
      text: 'Materials are open to everyone — support is not required to use them.',
      link: 'Open concepts →',
    },
    card2: {
      title: 'Suggest research',
      text: 'Tell your question in your own words — it could become the topic of the next material.',
      link: 'Suggest topic →',
    },
  },
}
