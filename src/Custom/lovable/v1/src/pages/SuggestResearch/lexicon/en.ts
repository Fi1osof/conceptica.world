import { LexiconObject } from 'src/Custom/Lexicon'

export const en: LexiconObject = {
  hero: {
    eyebrow: 'Suggest research',
    title: 'Describe the question in your own words',
    lead: `Have a question that has been bothering you for a long time? Something you want to understand but haven't found a good explanation yet? Tell our AI agent about it.`,
  },
  howToDescribe: {
    eyebrow: 'How to describe',
    title: 'No need to search for the right words',
    p1: 'No need to search for the right terms, choose a category, or try to beautifully formulate the topic. Just explain <strong>in your own words</strong>:',
    guideList: [
      'what interests you;',
      'what you already know or think about it;',
      'what exactly is unclear to you;',
      'why this question is important to you.',
    ],
    p2: 'The agent will help clarify the thought if needed. Your question may become the topic of one of the next Conceptica researches.',
  },
  form: {
    title: 'Describe the question',
    hint: 'Form fields are a placeholder. Submission logic will appear later. For now, you can write anything.',
    messageLabel: 'Message text',
    messagePlaceholder: `I don't know what this is properly called, but I've been interested in this for a long time…`,
    contactLabel: 'Contact (optional)',
    contactPlaceholder: 'telegram or email',
    hiddenSubject: 'Application for topic research',
    note: 'Response usually arrives within a few days.',
    submit: 'Send →',
  },
  whatHappensNext: {
    eyebrow: 'What happens next',
    title: 'From question to research',
    steps: [
      {
        num: '01',
        title: 'We read questions',
        text: 'We read the suggested questions and select topics for future research among them.',
      },
      {
        num: '02',
        title: 'We clarify the thought',
        text: 'If needed, the agent asks clarifying questions to better understand what interests you.',
      },
      {
        num: '03',
        title: 'We inform about the result',
        text: 'If you left a way to contact, we will write when the material on the topic appears.',
      },
    ],
  },
  dontKnowHow: {
    eyebrow: `Don't know how to formulate?`,
    title: 'Just write that',
    blockquote: `I don't know what this is properly called, but I've been interested in this for a long time…`,
    p1: 'That is enough.',
  },
  cta: {
    card1: {
      title: 'Read ready concepts',
      text: 'Perhaps a similar topic has already been covered — check the list of concepts.',
      link: 'Open concepts →',
    },
    card2: {
      title: 'Support the project',
      text: 'If you want to help Conceptica exist and develop, the project can be supported.',
      link: 'Support →',
    },
  },
}
