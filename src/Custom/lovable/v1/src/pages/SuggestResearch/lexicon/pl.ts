import { LexiconObject } from 'src/Custom/Lexicon'

export const pl: LexiconObject = {
  hero: {
    eyebrow: 'Zasugeruj badanie',
    title: `Opisz pytanie własnymi słowami`,
    lead: `Masz pytanie, które dręczy Cię od dawna? Coś, co chcesz zrozumieć, ale jeszcze nie znalazłeś dobrej wyjaśnienia? Powiedz o tym naszemu agentowi AI.`,
  },
  howToDescribe: {
    eyebrow: 'Jak opisać',
    title: 'Nie trzeba szukać odpowiednich słów',
    p1: 'Nie trzeba szukać odpowiednich terminów, wybierać kategorii ani próbować pięknie sformułować tematu. Po prostu wyjaśnij <strong>własnymi słowami</strong>:',
    guideList: [
      'co Cię interesuje;',
      'co już wiesz lub myślisz o tym;',
      'co dokładnie jest dla Ciebie niejasne;',
      'dlaczego to pytanie jest dla Ciebie ważne.',
    ],
    p2: 'Agent pomoże doprecyzować myśl, jeśli to będzie potrzebne. Twoje pytanie może stać się tematem jednego z kolejnych badań Conceptica.',
  },
  form: {
    title: 'Opisz pytanie',
    hint: 'Pola formularza są symbolem zastępczym. Logika przesyłania pojawi się później. Na razie możesz pisać cokolwiek.',
    messageLabel: 'Tekst wiadomości',
    messagePlaceholder: `Nie wiem, jak to się nazywa poprawnie, ale od dawna mnie to interesuje…`,
    contactLabel: 'Kontakt (opcjonalnie)',
    contactPlaceholder: 'telegram lub email',
    hiddenSubject: 'Wniosek o badanie tematu',
    note: 'Odpowiedź zazwyczaj przychodzi w ciągu kilku dni.',
    submit: 'Wyślij →',
  },
  whatHappensNext: {
    eyebrow: 'Co dzieje się dalej',
    title: 'Od pytania do badania',
    steps: [
      {
        num: '01',
        title: 'Czytamy pytania',
        text: 'Czytamy sugerowane pytania i wybieramy wśród nich tematy do przyszłych badań.',
      },
      {
        num: '02',
        title: 'Doprecyzowujemy myśl',
        text: 'Jeśli potrzeba, agent zadaje pytania doprecyzowujące, aby lepiej zrozumieć, co Cię interesuje.',
      },
      {
        num: '03',
        title: 'Informujemy o wyniku',
        text: 'Jeśli zostawiłeś sposób kontaktu, napiszemy, gdy materiał na temat pojawi się.',
      },
    ],
  },
  dontKnowHow: {
    eyebrow: `Nie wiesz jak sformułować?`,
    title: 'W takim razie napisz to',
    blockquote: `Nie wiem, jak to się nazywa poprawnie, ale od dawna mnie to interesuje…`,
    p1: 'To wystarczy.',
  },
  cta: {
    card1: {
      title: 'Czytaj gotowe koncepcje',
      text: 'Może podobny temat został już omówiony — sprawdź listę koncepcji.',
      link: 'Otwórz koncepcje →',
    },
    card2: {
      title: 'Wesprzyj projekt',
      text: 'Jeśli chcesz pomóc Conceptica istnieć i się rozwijać, projekt można wesprzeć.',
      link: 'Wesprzyj →',
    },
  },
}
