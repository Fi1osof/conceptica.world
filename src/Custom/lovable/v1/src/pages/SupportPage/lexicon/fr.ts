import { LexiconObject } from 'src/Custom/Lexicon'

export const fr: LexiconObject = {
  hero: {
    eyebrow: 'Soutenir',
    title: 'Soutenir Conceptica',
    lead1:
      "Conceptica est un projet ouvert. Les principaux matériaux sont disponibles pour tous indépendamment du pays, du niveau d'éducation ou de la capacité de payer.",
    lead2:
      'Si vous trouvez ce travail utile et voulez que le projet continue à se développer, vous pouvez le soutenir.',
  },
  spend: {
    eyebrow: 'À quoi va le soutien',
    title: 'Créer Conceptica nécessite plus que des idées',
    p1: "Votre soutien me donne l'opportunité de consacrer plus de temps au projet et de continuer à l'améliorer.",
    items: [
      {
        title: 'Recherche',
        text: 'Temps pour étudier le sujet, vérifier les sources et écrire les matériaux.',
      },
      {
        title: 'Site web',
        text: 'Développement et maintenance de la plateforme où tout vit.',
      },
      {
        title: 'Infrastructure',
        text: 'Serveurs, stockage et services qui maintiennent le projet en ligne.',
      },
      {
        title: 'Outils IA',
        text: 'Modèles et agents qui aident à transformer les questions en explications.',
      },
      {
        title: 'Traductions',
        text: 'Les matériaux deviennent disponibles dans plus de langues.',
      },
      {
        title: 'Expériences',
        text: 'Nouveaux formats et idées qui doivent encore être testés.',
      },
    ],
  },
  amount: {
    eyebrow: 'Combien envoyer',
    title: 'Autant que vous considérez raisonnable',
    callout:
      "Si même un petit don est une dépense significative pour vous — <strong>n'envoyez rien</strong>. Lisez les matériaux, posez des questions, partagez des idées intéressantes et utilisez Conceptica pour résoudre vos tâches. C'est suffisant.",
    p1: 'Si le montant est insignifiant pour vous et le projet semble utile, tout soutien aidera son développement.',
    formTitle: 'Soutenir le projet',
    formHint:
      'Le paiement passe par NOWPayments — un service de paiement crypto. Choisissez un montant, puis vous pouvez sélectionner une pièce pratique.',
  },
  thanks: {
    eyebrow: 'Merci',
    title: "L'opportunité de continuer ce travail",
    p1: "Je ne peux pas promettre exactement ce que Conceptica deviendra dans quelques années. C'est un projet de recherche et en évolution, et beaucoup d'idées doivent encore être testées.",
    blockquote:
      "Mais votre soutien lui donne la chose la plus précieuse — l'opportunité de continuer ce travail.",
    p2: 'Merci à tous ceux qui aident Conceptica à se développer.',
  },
  cta: {
    card1: {
      title: 'Lire les concepts',
      text: "Les matériaux sont ouverts à tous — le soutien n'est pas nécessaire pour les utiliser.",
      link: 'Ouvrir les concepts →',
    },
    card2: {
      title: 'Suggérer une recherche',
      text: 'Dites votre question avec vos propres mots — elle peut devenir le sujet du prochain matériel.',
      link: 'Suggérer un sujet →',
    },
  },
}
