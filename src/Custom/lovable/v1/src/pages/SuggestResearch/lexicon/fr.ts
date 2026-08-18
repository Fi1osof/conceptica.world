import { LexiconObject } from 'src/Custom/Lexicon'

export const fr: LexiconObject = {
  hero: {
    eyebrow: 'Suggérer une recherche',
    title: `Décrivez la question dans vos propres mots`,
    lead: `Avez-vous une question qui vous dérange depuis longtemps? Quelque chose que vous voulez comprendre mais n'avez pas encore trouvé une bonne explication? Parlez-en à notre agent IA.`,
  },
  howToDescribe: {
    eyebrow: 'Comment décrire',
    title: `Pas besoin de chercher les bons mots`,
    p1: `Pas besoin de chercher les bons termes, de choisir une catégorie ou d'essayer de formuler magnifiquement le sujet. Expliquez simplement <strong>en vos propres mots</strong>:`,
    guideList: [
      'ce qui vous intéresse;',
      'ce que vous savez déjà ou en pensez;',
      `ce qui n'est pas clair pour vous;`,
      'pourquoi cette question est importante pour vous.',
    ],
    p2: `L'agent aidera à clarifier la pensée si nécessaire. Votre question peut devenir le sujet de l'une des prochaines recherches de Conceptica.`,
  },
  form: {
    title: 'Décrivez la question',
    hint: `Les champs du formulaire sont un espace réservé. La logique d'envoi apparaîtra plus tard. Pour l'instant, vous pouvez écrire n'importe quoi.`,
    messageLabel: 'Texte du message',
    messagePlaceholder: `Je ne sais pas comment cela s'appelle correctement, mais cela m'intéresse depuis longtemps…`,
    contactLabel: 'Contact (optionnel)',
    contactPlaceholder: 'telegram ou email',
    hiddenSubject: 'Demande de recherche de sujet',
    note: 'La réponse arrive généralement en quelques jours.',
    submit: 'Envoyer →',
  },
  whatHappensNext: {
    eyebrow: 'Ce qui se passe ensuite',
    title: 'De la question à la recherche',
    steps: [
      {
        num: '01',
        title: 'Nous lisons les questions',
        text: 'Nous lisons les questions suggérées et sélectionnons des sujets pour les recherches futures parmi elles.',
      },
      {
        num: '02',
        title: 'Nous clarifions la pensée',
        text: `Si nécessaire, l'agent pose des questions clarificatrices pour mieux comprendre ce qui vous intéresse.`,
      },
      {
        num: '03',
        title: 'Nous informons du résultat',
        text: `Si vous avez laissé un moyen de contact, nous écrirons lorsque le matériel sur le sujet apparaîtra.`,
      },
    ],
  },
  dontKnowHow: {
    eyebrow: `Vous ne savez pas comment formuler?`,
    title: 'Écrivez simplement cela',
    blockquote: `Je ne sais pas comment cela s'appelle correctement, mais cela m'intéresse depuis longtemps…`,
    p1: `C'est suffisant.`,
  },
  cta: {
    card1: {
      title: 'Lire les concepts prêts',
      text: `Peut-être qu'un sujet similaire a déjà été traité — consultez la liste des concepts.`,
      link: 'Ouvrir les concepts →',
    },
    card2: {
      title: 'Soutenir le projet',
      text: `Si vous voulez aider Conceptica à exister et à se développer, le projet peut être soutenu.`,
      link: 'Soutenir →',
    },
  },
}
