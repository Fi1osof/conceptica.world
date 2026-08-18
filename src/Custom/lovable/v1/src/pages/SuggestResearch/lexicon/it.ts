import { LexiconObject } from 'src/Custom/Lexicon'

export const it: LexiconObject = {
  hero: {
    eyebrow: 'Suggerisci ricerca',
    title: `Descrivi la domanda con le tue parole`,
    lead: `Hai una domanda che ti tormenta da molto tempo? Qualcosa che vuoi capire ma non hai ancora trovato una buona spiegazione? Raccontalo al nostro agente IA.`,
  },
  howToDescribe: {
    eyebrow: 'Come descrivere',
    title: "Non c'è bisogno di cercare le parole giuste",
    p1: "Non c'è bisogno di cercare i termini giusti, scegliere una categoria o cercare di formulare bellamente l'argomento. Spiega semplicemente <strong>con le tue parole</strong>:",
    guideList: [
      'cosa ti interessa;',
      'cosa già sai o pensi su questo;',
      'cosa esattamente non ti è chiaro;',
      'perché questa domanda è importante per te.',
    ],
    p2: "L'agente aiuterà a chiarire il pensiero se necessario. La tua domanda può diventare l'argomento di una delle prossime ricerche di Conceptica.",
  },
  form: {
    title: 'Descrivi la domanda',
    hint: 'I campi del modulo sono un segnaposto. La logica di invio apparirà più tardi. Per ora, puoi scrivere qualsiasi cosa.',
    messageLabel: 'Testo del messaggio',
    messagePlaceholder: `Non so come si chiama correttamente, ma mi interessa da molto tempo…`,
    contactLabel: 'Contatto (opzionale)',
    contactPlaceholder: 'telegram o email',
    hiddenSubject: 'Richiesta di ricerca argomento',
    note: 'La risposta di solito arriva in pochi giorni.',
    submit: 'Invia →',
  },
  whatHappensNext: {
    eyebrow: 'Cosa succede dopo',
    title: 'Dalla domanda alla ricerca',
    steps: [
      {
        num: '01',
        title: 'Leggiamo le domande',
        text: 'Leggiamo le domande suggerite e selezioniamo argomenti per ricerche future tra esse.',
      },
      {
        num: '02',
        title: 'Chiarifichiamo il pensiero',
        text: "Se necessario, l'agente fa domande chiarificatrici per capire meglio cosa ti interessa.",
      },
      {
        num: '03',
        title: 'Informiamo del risultato',
        text: "Se hai lasciato un modo per contattare, scriveremo quando apparirà il materiale sull'argomento.",
      },
    ],
  },
  dontKnowHow: {
    eyebrow: `Non sai come formulare?`,
    title: 'Scrivi semplicemente questo',
    blockquote: `Non so come si chiama correttamente, ma mi interessa da molto tempo…`,
    p1: 'Questo è sufficiente.',
  },
  cta: {
    card1: {
      title: 'Leggere concetti pronti',
      text: 'Forse un argomento simile è già stato trattato — controlla la lista dei concetti.',
      link: 'Apri concetti →',
    },
    card2: {
      title: 'Supportare il progetto',
      text: 'Se vuoi aiutare Conceptica a esistere e svilupparsi, il progetto può essere supportato.',
      link: 'Supporta →',
    },
  },
}
