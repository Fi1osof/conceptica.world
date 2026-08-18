import { LexiconObject } from 'src/Custom/Lexicon'

export const en: LexiconObject = {
  block: {
    hero: {
      eyebrow: 'Conceptica',
      title: 'What do you want to understand?',
      subtitle:
        'Ask in your own words. The AI agent will figure out what you already understand and build a short path to new understanding — without unnecessary steps.',
      searchPlaceholder: 'For example: "why don\'t people understand me?"',
      searchButton: 'Ask ✦',
      conceptsButton: 'View concepts →',
    },
    howItWorks: {
      eyebrow: 'How it works',
      title: "Don't know the right words? You don't need them",
      lead: "Traditional learning starts with someone else's terms. Here it's the opposite: first your understanding, then the words for it.",
      steps: [
        {
          title: 'You ask in your own words',
          text: 'No terminology or "right prompts" needed. Just one sentence about what confuses you.',
        },
        {
          title: 'The agent figures out what you already understand',
          text: 'It finds support in what you already have in your head, rather than starting the explanation from scratch.',
        },
        {
          title: 'A minimal path is built',
          text: 'Only those steps without which new understanding cannot be assembled. The unnecessary is discarded.',
        },
        {
          title: 'Terms come at the end',
          text: 'When understanding is already assembled, accepted words become labels, not barriers.',
        },
      ],
    },
    twoPaths: {
      title: 'Two scenarios',
      card1: {
        icon: '✦',
        heading: 'I want to understand something',
        text: 'Ask a question in your own words. The AI agent will select a concept and assemble a short explanation for you.',
        button: 'Ask the AI agent ✦',
      },
      card2: {
        icon: '❏',
        heading: 'I want to browse ideas',
        text: 'Scroll through ready-made concepts — each takes a couple of minutes. Pleasant, like browsing a book at random.',
        button: 'View concepts →',
      },
    },
    suggestResearchCta: {
      title: "Didn't find what interests you?",
      text: 'Suggest a topic — and perhaps the next concept on Conceptica will be about it.',
      button: 'Suggest research ✦',
    },
    aboutBlock: {
      eyebrow: 'About the project',
      title: 'What is Conceptica?',
      body: "Conceptica is an attempt to change the way we learn. Not to retell someone else's explanations, but to figure out what a person already understands and build what's missing. We publish concepts — short texts about ideas that change the way you look at the familiar — and we make an AI agent that builds such a path personally for you.",
      button: 'More about the project →',
    },
  },
}
