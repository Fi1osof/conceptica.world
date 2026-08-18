import { LexiconObject } from 'src/Custom/Lexicon'

export const fr: LexiconObject = {
  block: {
    hero: {
      eyebrow: 'Conceptica',
      title: 'Que voulez-vous comprendre ?',
      subtitle:
        "Posez la question avec vos propres mots. L'agent IA découvrira ce que vous comprenez déjà et construira un chemin court vers une nouvelle compréhension — sans étapes inutiles.",
      searchPlaceholder: 'Par exemple : "pourquoi on ne me comprend pas ?"',
      searchButton: 'Demander ✦',
      conceptsButton: 'Voir les concepts →',
    },
    howItWorks: {
      eyebrow: 'Comment ça marche',
      title: "Vous ne connaissez pas les bons mots ? Vous n'en avez pas besoin",
      lead: "L'apprentissage traditionnel commence avec les termes des autres. Ici c'est l'inverse : d'abord votre compréhension, puis les mots pour elle.",
      steps: [
        {
          title: 'Vous posez la question avec vos propres mots',
          text: 'Pas de terminologie ou de "bons prompts" nécessaires. Juste une phrase sur ce qui vous confond.',
        },
        {
          title: "L'agent découvre ce que vous comprenez déjà",
          text: "Il trouve un appui dans ce que vous avez déjà dans la tête, plutôt que de commencer l'explication à zéro.",
        },
        {
          title: 'Un chemin minimal est construit',
          text: "Seulement les étapes sans lesquelles la nouvelle compréhension ne peut pas être assemblée. L'inutile est écarté.",
        },
        {
          title: 'Les termes viennent à la fin',
          text: 'Quand la compréhension est déjà assemblée, les mots acceptés deviennent des étiquettes, pas des barrières.',
        },
      ],
    },
    twoPaths: {
      title: 'Deux scénarios',
      card1: {
        icon: '✦',
        heading: 'Je veux comprendre quelque chose',
        text: "Posez une question avec vos propres mots. L'agent IA sélectionnera un concept et assemblera une explication courte pour vous.",
        button: "Demander à l'agent IA ✦",
      },
      card2: {
        icon: '❏',
        heading: 'Je veux parcourir les idées',
        text: 'Parcourez les concepts prêts — chacun prend quelques minutes. Agréable, comme feuilleter un livre au hasard.',
        button: 'Voir les concepts →',
      },
    },
    suggestResearchCta: {
      title: "Vous n'avez pas trouvé ce qui vous intéresse ?",
      text: 'Suggérez un sujet — et peut-être que le prochain concept sur Conceptica sera à ce sujet.',
      button: 'Suggérer une recherche ✦',
    },
    aboutBlock: {
      eyebrow: 'À propos du projet',
      title: "Qu'est-ce que Conceptica ?",
      body: "Conceptica est une tentative de changer la façon dont nous apprenons. Ne pas répéter les explications des autres, mais découvrir ce qu'une personne comprend déjà et construire ce qui manque. Nous publions des concepts — des textes courts sur des idées qui changent la façon de voir le familier — et nous créons un agent IA qui construit un tel chemin personnellement pour vous.",
      button: 'Plus sur le projet →',
    },
  },
}
