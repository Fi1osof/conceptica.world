import { LexiconObject } from 'src/Custom/Lexicon'

export const en: LexiconObject = {
  hero: {
    eyebrow: 'About',
    title: 'Understanding should not start with the right words',
    lead: 'Conceptica emerged from a simple thought: a person should not need to know the right words to gain access to knowledge and understanding.',
    alt: 'Diagram: scattered questions converge into a few clear meanings',
  },
  context: {
    eyebrow: 'Context',
    title:
      'The world is getting complex faster than the language of explanation',
    p1: 'New technologies, professions, tools, and thousands of new terms are appearing. Yet behind many complex words lie ideas that can be explained in simple human language.',
    p2: 'Artificial intelligence for the first time gives us the opportunity to interact with computers exactly this way — <strong>in our own words</strong>.',
    alt: 'A book whose pages turn into a network of connected ideas',
  },
  purpose: {
    eyebrow: 'Why Conceptica exists',
    title: "To help understand, not to collect all the world's knowledge",
    p1: "The project's goal is to help people better understand the world around them, express their thoughts and desires more clearly, and find shorter paths from a question or problem to the desired result. Collecting all knowledge in one place is impossible, and probably not necessary. Four things are much more important.",
    p2: 'Conceptica explores such ideas and publishes them as short concepts and more detailed materials.',
    principles: [
      {
        title: 'Ask good questions',
        text: 'A precise question is often more important than a ready answer — it shows exactly what you want to understand.',
      },
      {
        title: 'Notice misunderstanding',
        text: 'The moment when we stop understanding is easy to miss. Learning to catch it is a skill.',
      },
      {
        title: 'Explain simply',
        text: 'Behind complex words almost always lies an idea that can be told in human language.',
      },
      {
        title: "Don't confuse words and meaning",
        text: 'Knowing the right term is not the same as understanding what stands behind it.',
      },
    ],
  },
  whyNow: {
    eyebrow: 'Why now',
    title: 'Before, people adapted to the system. Now — the opposite',
    p1: 'For most of history, people had to learn to speak the language of surrounding systems. With the advent of modern AI, this is starting to change.',
    beforeLabel: 'How it was',
    beforeList: [
      'To understand a new area — study its terminology',
      'To find information — know in advance what to search for',
      'To use a computer — understand its interface and rules',
    ],
    nowLabel: "How it's becoming",
    nowList: [
      'Describe the situation in your own words',
      'Start with a question, not a term',
      'Get an explanation in understandable language',
    ],
    blockquote:
      "I don't know what this is properly called. I'll just tell in my own words what's happening and what I want to understand.",
    p2: 'And start from there. This seems like a small change, but its consequences may turn out to be much more significant.',
  },
  author: {
    eyebrow: 'Who makes the project',
    title: 'One author, many questions',
    alt: 'Nikolay Lanets, author of the Conceptica project',
    name: 'Nikolay Lanets',
    role: 'Project author · web development since 2007',
    p1: 'I have been doing web development for over 19 years and have worked with technologies, the internet, and software systems for many years. This experience allows me to navigate relatively easily in many things that may seem complex to a person without technical training.',
    p2: 'But the goal of Conceptica is not to make everyone programmers or specialists. On the contrary. I want to help people understand <strong>what they really need to know</strong>, and where a complex path can be replaced by a simpler one — especially now, when technological capabilities change faster than habitual ways of solving tasks can update.',
    stat1Value: '19+',
    stat1Label: 'years working with technologies and software systems',
    stat2Value: '∞',
    stat2Label: 'questions yet to be explored',
  },
  evolving: {
    eyebrow: 'This is an evolving project',
    title: 'Not an encyclopedia, but an investigation',
    p1: 'Conceptica is not an attempt to create a final correct picture of the world. Hypotheses, observations, and ideas may appear here that will be refined, supplemented, or revised over time.',
    p2: "The main goal is to explore how people and machines can better understand knowledge, the world around them, and each other. Therefore, an important part of the project is the readers' own questions: if there is something you would like to understand, but suitable material is not yet available, you can <0>suggest a question for research</0>. You don't need to know the right terms — just tell in your own words.",
  },
  access: {
    eyebrow: 'Access to knowledge',
    title: 'Open by default',
    p1: "It is especially important to me that the ability to understand a new topic does not depend on country, education level, or a person's ability to pay for access to explanation.",
    p2: 'At the same time, creating and developing the project requires time and resources. In the future, additional tools and services, including paid ones, may appear around Conceptica. This does not contradict the openness of the main materials: a sustainable project must be able to finance its own development.',
  },
  cta: {
    card1: {
      title: 'Read, argue, verify',
      text: 'First of all — read, ask questions, argue, verify ideas, and use what turned out to be useful for you.',
      link: 'Open concepts →',
    },
    card2: {
      title: 'Support the project',
      text: 'If you want to help Conceptica exist and develop, the project can be supported.',
      link: 'Support →',
    },
  },
}
