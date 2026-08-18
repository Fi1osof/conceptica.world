import { LexiconObject } from 'src/Custom/Lexicon'

export const pl: LexiconObject = {
  block: {
    hero: {
      eyebrow: 'Conceptica',
      title: 'Co chcesz zrozumieć?',
      subtitle:
        'Zapytaj swoimi słowami. Agent AI odkryje, co już rozumiesz, i zbuduje krótką drogę do nowego zrozumienia — bez niepotrzebnych etapów.',
      searchPlaceholder: 'Na przykład: "dlaczego mnie nie rozumieją?"',
      searchButton: 'Zapytaj ✦',
      conceptsButton: 'Zobacz koncepcje →',
    },
    howItWorks: {
      eyebrow: 'Jak to działa',
      title: 'Nie znasz odpowiednich słów? Nie są potrzebne',
      lead: 'Tradycyjna nauka zaczyna się od terminów innych osób. Tu jest odwrotnie: najpierw Twoje zrozumienie, potem słowa dla niego.',
      steps: [
        {
          title: 'Pytasz swoimi słowami',
          text: 'Żadnej terminologii ani "odpowiednich promptów" niepotrzebnych. Tylko jedno zdanie o tym, co Cię niepokoi.',
        },
        {
          title: 'Agent odkrywa, co już rozumiesz',
          text: 'Szuka oparcia w tym, co już masz w głowie, zamiast zaczynać wyjaśnienie od zera.',
        },
        {
          title: 'Budowana jest minimalna ścieżka',
          text: 'Tylko te kroki, bez których nowe zrozumienie nie może zostać złożone. Niepotrzebne jest odrzucane.',
        },
        {
          title: 'Terminy pojawiają się na końcu',
          text: 'Gdy zrozumienie jest już złożone, zaakceptowane słowa stają się etykietami, a nie barierami.',
        },
      ],
    },
    twoPaths: {
      title: 'Dwa scenariusze',
      card1: {
        icon: '✦',
        heading: 'Chcę coś zrozumieć',
        text: 'Zadaj pytanie swoimi słowami. Agent AI wybierze koncepcję i złoży krótkie wyjaśnienie dla Ciebie.',
        button: 'Zapytaj agenta AI ✦',
      },
      card2: {
        icon: '❏',
        heading: 'Chcę przeglądać pomysły',
        text: 'Przewijaj gotowe koncepcje — każda zajmuje kilka minut. Przyjemne, jak przeglądanie książki na losowo.',
        button: 'Zobacz koncepcje →',
      },
    },
    suggestResearchCta: {
      title: 'Nie znalazłeś tego, co Cię interesuje?',
      text: 'Zasugeruj temat — a może następna koncepcja na Conceptica będzie właśnie o nim.',
      button: 'Zasugeruj badanie ✦',
    },
    aboutBlock: {
      eyebrow: 'O projekcie',
      title: 'Czym jest Conceptica?',
      body: 'Conceptica to próba zmiany sposobu nauki. Nie powtarzać cudzych wyjaśnień, ale odkryć, co osoba już rozumie, i zbudować brakujące. Publikujemy koncepcje — krótkie teksty o ideach, które zmieniają sposób patrzenia na znane — i tworzymy agenta AI, który buduje taką ścieżkę osobiście dla Ciebie.',
      button: 'Więcej o projekcie →',
    },
  },
}
