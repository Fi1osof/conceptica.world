import { LexiconObject } from 'src/Custom/Lexicon'

export const sw: LexiconObject = {
  block: {
    hero: {
      eyebrow: 'Conceptica',
      title: 'Unachagua kuelewa nini?',
      subtitle:
        'Uliza kwa maneno yako. Wakala wa AI atagundua unachoelewa tayari na kujenga njia fupi kuelewa mpya — bila hatua zisizo za lazima.',
      searchPlaceholder: 'Kwa mfano: "kwa nini wasipoelewa?"',
      searchButton: 'Uliza ✦',
      conceptsButton: 'Angalia mawazo →',
    },
    howItWorks: {
      eyebrow: 'Inavyofanya kazi',
      title: 'Hujui maneno sahihi? Hauhitaji',
      lead: 'Kujenga jadi huanza na maneno ya wengine. Hapa ni kinyume: kwanza uelewako wako, kisha maneno yake.',
      steps: [
        {
          title: 'Uliza kwa maneno yako',
          text: 'Hakuna maneno au "prompts sahihi" zinazohitajika. Tu sentensi moja kuhusu inachokushangaza.',
        },
        {
          title: 'Wakala anagundua unachoelewa tayari',
          text: 'Anatafuta msaada katika ulichoko tayari kichwani, badala ya kuanza maelezo kutoka sifuri.',
        },
        {
          title: 'Njia ndogo hujengwa',
          text: 'Tu hatua ambazo bila zake uelewako mpya hauwezi kuundwa. Zisizo za lazima zinatupwa.',
        },
        {
          title: 'Maneno huja mwisho',
          text: 'Mwanzo uelewako umeshajengwa, maneno yaliyokubaliwa huwa lebo, sio vizuizi.',
        },
      ],
    },
    twoPaths: {
      title: 'Miaka miwili',
      card1: {
        icon: '✦',
        heading: 'Nataka kuelewa kitu',
        text: 'Uliza swali kwa maneno yako. Wakala wa AI atachagua wazo na kuunda maelezo mafupi kwa ajili yako.',
        button: 'Uliza wakala wa AI ✦',
      },
      card2: {
        icon: '❏',
        heading: 'Nataka kuona mawazo',
        text: 'Zunguka mawazo yaliyo tayari — kila moja inachukua dakika chache. Furaha, kama kufungua kitu bila mpangilio.',
        button: 'Angalia mawazo →',
      },
    },
    suggestResearchCta: {
      title: 'Hukupata unachopenda?',
      text: 'Pendekeza mada — na labda wazo lifualo kwenye Conceptica litakuwa kuhusu hilo.',
      button: 'Pendekeza utafiti ✦',
    },
    aboutBlock: {
      eyebrow: 'Kuhusu mradi',
      title: 'Conceptica ni nini?',
      body: 'Conceptica ni jaribio la kubadilisha njia ya kujifunza. Si kurudia maelezo ya wengine, bali kugundua mtu anachoelewa tayari na kujenga kinachokosekana. Tunachapisha mawazo — maandishi mafupi kuhusu mawazo yanayobadilisha njia ya kuangalia kitu cha kawaida — na tunafanya wakala wa AI anayejenga njia hiyo binafsi kwa ajili yako.',
      button: 'Zaidi kuhusu mradi →',
    },
  },
}
