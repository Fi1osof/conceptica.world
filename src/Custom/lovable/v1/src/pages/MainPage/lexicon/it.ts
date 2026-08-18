import { LexiconObject } from 'src/Custom/Lexicon'

export const it: LexiconObject = {
  block: {
    hero: {
      eyebrow: 'Conceptica',
      title: 'Cosa vuoi capire?',
      subtitle:
        "Chiedi con le tue parole. L'agente AI scoprirà cosa capisci già e costruirà un percorso breve verso la nuova comprensione — senza passaggi inutili.",
      searchPlaceholder: 'Per esempio: "perché non mi capiscono?"',
      searchButton: 'Chiedi ✦',
      conceptsButton: 'Vedi concetti →',
    },
    howItWorks: {
      eyebrow: 'Come funziona',
      title: 'Non conosci le parole giuste? Non ne hai bisogno',
      lead: "L'apprendimento tradizionale inizia con i termini degli altri. Qui è il contrario: prima la tua comprensione, poi le parole per essa.",
      steps: [
        {
          title: 'Chiedi con le tue parole',
          text: 'Nessuna terminologia o "prompt corretti" necessari. Solo una frase su cosa ti confonde.',
        },
        {
          title: "L'agente scopre cosa capisci già",
          text: 'Trova appoggio in ciò che hai già nella testa, invece di iniziare la spiegazione da zero.',
        },
        {
          title: 'Viene costruito un percorso minimo',
          text: "Solo i passaggi senza i quali la nuova comprensione non può essere assemblata. L'inutile viene scartato.",
        },
        {
          title: 'I termini arrivano alla fine',
          text: 'Quando la comprensione è già assemblata, le parole accettate diventano etichette, non barriere.',
        },
      ],
    },
    twoPaths: {
      title: 'Due scenari',
      card1: {
        icon: '✦',
        heading: 'Voglio capire qualcosa',
        text: "Fai una domanda con le tue parole. L'agente AI selezionerà un concetto e assemblerà una spiegazione breve per te.",
        button: "Chiedi all'agente AI ✦",
      },
      card2: {
        icon: '❏',
        heading: 'Voglio vedere le idee',
        text: 'Sfoglia i concetti pronti — ognuno richiede un paio di minuti. Piacevole, come sfogliare un libro a caso.',
        button: 'Vedi concetti →',
      },
    },
    suggestResearchCta: {
      title: 'Non hai trovato ciò che ti interessa?',
      text: 'Suggerisci un argomento — e forse il prossimo concetto su Conceptica sarà su di esso.',
      button: 'Suggerisci ricerca ✦',
    },
    aboutBlock: {
      eyebrow: 'Sul progetto',
      title: "Cos'è Conceptica?",
      body: 'Conceptica è un tentativo di cambiare il modo in cui impariamo. Non ripetere le spiegazioni degli altri, ma scoprire cosa una persona capisce già e costruire ciò che manca. Pubblichiamo concetti — testi brevi su idee che cambiano il modo di guardare il familiare — e creiamo un agente AI che costruisce un tale percorso personalmente per te.',
      button: 'Altro sul progetto →',
    },
  },
}
