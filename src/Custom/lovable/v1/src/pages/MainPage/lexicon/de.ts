import { LexiconObject } from 'src/Custom/Lexicon'

export const de: LexiconObject = {
  block: {
    hero: {
      eyebrow: 'Conceptica',
      title: 'Was möchten Sie verstehen?',
      subtitle:
        'Fragen Sie in Ihren eigenen Worten. Der KI-Agent findet heraus, was Sie bereits verstehen, und baut einen kurzen Weg zum neuen Verständnis — ohne unnötige Schritte.',
      searchPlaceholder:
        'Zum Beispiel: "warum verstehen mich die Leute nicht?"',
      searchButton: 'Fragen ✦',
      conceptsButton: 'Konzepte ansehen →',
    },
    howItWorks: {
      eyebrow: 'Wie es funktioniert',
      title: 'Kennen Sie die richtigen Wörter nicht? Sie brauchen sie nicht',
      lead: 'Traditionelles Lernen beginnt mit den Begriffen anderer. Hier ist es umgekehrt: zuerst Ihr Verständnis, dann die Worte dafür.',
      steps: [
        {
          title: 'Sie fragen in Ihren eigenen Worten',
          text: 'Keine Terminologie oder "richtige Prompts" nötig. Nur ein Satz darüber, was Sie verwirrt.',
        },
        {
          title: 'Der Agent findet heraus, was Sie bereits verstehen',
          text: 'Er stützt sich auf das, was Sie bereits im Kopf haben, anstatt die Erklärung von Grund auf zu beginnen.',
        },
        {
          title: 'Ein minimaler Pfad wird aufgebaut',
          text: 'Nur die Schritte, ohne die neues Verständnis nicht möglich ist. Unnötiges wird verworfen.',
        },
        {
          title: 'Begriffe kommen am Ende',
          text: 'Wenn das Verständnis bereits aufgebaut ist, werden akzeptierte Wörter zu Labels, nicht zu Barrieren.',
        },
      ],
    },
    twoPaths: {
      title: 'Zwei Szenarien',
      card1: {
        icon: '✦',
        heading: 'Ich möchte etwas verstehen',
        text: 'Stellen Sie eine Frage in Ihren eigenen Worten. Der KI-Agent wählt ein Konzept aus und stellt eine kurze Erklärung für Sie zusammen.',
        button: 'Den KI-Agenten fragen ✦',
      },
      card2: {
        icon: '❏',
        heading: 'Ich möchte Ideen durchsuchen',
        text: 'Blättern Sie durch fertige Konzepte — jedes dauert ein paar Minuten. Angenehm, wie ein zufälliges Buchblättern.',
        button: 'Konzepte ansehen →',
      },
    },
    suggestResearchCta: {
      title: 'Haben Sie nicht gefunden, was Sie interessiert?',
      text: 'Schlagen Sie ein Thema vor — und vielleicht ist das nächste Konzept auf Conceptica genau darüber.',
      button: 'Forschung vorschlagen ✦',
    },
    aboutBlock: {
      eyebrow: 'Über das Projekt',
      title: 'Was ist Conceptica?',
      body: 'Conceptica ist ein Versuch, die Art des Lernens zu ändern. Nicht die Erklärungen anderer zu wiederholen, sondern herauszufinden, was eine Person bereits versteht, und das Fehlende aufzubauen. Wir veröffentlichen Konzepte — kurze Texte über Ideen, die die Art verändern, wie man das Vertraute betrachtet — und wir erstellen einen KI-Agenten, der einen solchen Weg persönlich für Sie aufbaut.',
      button: 'Mehr über das Projekt →',
    },
  },
}
