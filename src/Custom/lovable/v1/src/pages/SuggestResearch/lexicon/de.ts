import { LexiconObject } from 'src/Custom/Lexicon'

export const de: LexiconObject = {
  hero: {
    eyebrow: 'Forschung vorschlagen',
    title: `Beschreiben Sie die Frage in Ihren eigenen Worten`,
    lead: `Haben Sie eine Frage, die Sie schon lange beschäftigt? Etwas, das Sie verstehen wollen, aber noch keine gute Erklärung gefunden haben? Erzählen Sie unserem KI-Agenten davon.`,
  },
  howToDescribe: {
    eyebrow: 'Wie beschreiben',
    title: 'Keine Notwendigkeit, nach den richtigen Worten zu suchen',
    p1: 'Keine Notwendigkeit, nach den richtigen Begriffen zu suchen, eine Kategorie zu wählen oder zu versuchen, das Thema schön zu formulieren. Erklären Sie einfach <strong>in Ihren eigenen Worten</strong>:',
    guideList: [
      'was Sie interessiert;',
      'was Sie bereits darüber wissen oder denken;',
      'was genau Ihnen unklar ist;',
      'warum diese Frage für Sie wichtig ist.',
    ],
    p2: 'Der Agent hilft, den Gedanken zu klären, wenn nötig. Ihre Frage kann zum Thema einer der nächsten Conceptica-Forschungen werden.',
  },
  form: {
    title: 'Beschreiben Sie die Frage',
    hint: 'Formularfelder sind ein Platzhalter. Die Einreichungslogik erscheint später. Für jetzt können Sie alles schreiben.',
    messageLabel: 'Nachrichtentext',
    messagePlaceholder: `Ich weiß nicht, wie man das richtig nennt, aber ich interessiere mich schon lange dafür…`,
    contactLabel: 'Kontakt (optional)',
    contactPlaceholder: 'telegram oder email',
    hiddenSubject: 'Antrag auf Themenforschung',
    note: 'Die Antwort kommt normalerweise innerhalb weniger Tage.',
    submit: 'Senden →',
  },
  whatHappensNext: {
    eyebrow: 'Was passiert als Nächstes',
    title: 'Von der Frage zur Forschung',
    steps: [
      {
        num: '01',
        title: 'Wir lesen Fragen',
        text: 'Wir lesen die vorgeschlagenen Fragen und wählen Themen für zukünftige Forschungen daraus aus.',
      },
      {
        num: '02',
        title: 'Wir klären den Gedanken',
        text: 'Wenn nötig, stellt der Agent klärende Fragen, um besser zu verstehen, was Sie interessiert.',
      },
      {
        num: '03',
        title: 'Wir informieren über das Ergebnis',
        text: 'Wenn Sie eine Kontaktmöglichkeit hinterlassen haben, schreiben wir Ihnen, wenn das Material zum Thema erscheint.',
      },
    ],
  },
  dontKnowHow: {
    eyebrow: `Wissen Sie nicht, wie man formuliert?`,
    title: 'Schreiben Sie das einfach',
    blockquote: `Ich weiß nicht, wie man das richtig nennt, aber ich interessiere mich schon lange dafür…`,
    p1: 'Das reicht.',
  },
  cta: {
    card1: {
      title: 'Fertige Konzepte lesen',
      text: 'Vielleicht wurde ein ähnliches Thema bereits behandelt — überprüfen Sie die Liste der Konzepte.',
      link: 'Konzepte öffnen →',
    },
    card2: {
      title: 'Das Projekt unterstützen',
      text: 'Wenn Sie Conceptica helfen wollen, zu existieren und sich zu entwickeln, kann das Projekt unterstützt werden.',
      link: 'Unterstützen →',
    },
  },
}
