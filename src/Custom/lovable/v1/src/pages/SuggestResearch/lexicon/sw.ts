import { LexiconObject } from 'src/Custom/Lexicon'

export const sw: LexiconObject = {
  hero: {
    eyebrow: 'Pendekeza utafiti',
    title: 'Eleza swali kwa maneno yako mwenyewe',
    lead: 'Una swali linalokusumbua kwa muda mrefu? Kitu unachotaka kuelewa lakini bado hujapata maelezo mazuri? Mwambie wakala wetu wa AI kuhusu hilo.',
  },
  howToDescribe: {
    eyebrow: 'Jinsi ya kueleza',
    title: 'Hahitaji kutafuta maneno sahihi',
    p1: 'Hahitaji kutafuta maneno sahihi, kuchagua kategoria au kujaribu kufafanua mada vizuri. Eleza tu <strong>kwa maneno yako mwenyewe</strong>:',
    guideList: [
      'kinachokuvutia;',
      'unachojua au unachofikiria kuhusu hilo;',
      'hasa kitu ambacho si wazi kwako;',
      'kwa nini swali hili ni muhimu kwako.',
    ],
    p2: 'Wakala atasaidia kufafanua wazo ikiwa inahitajika. Swali lako linaweza kuwa mada moja ya utafiti wa Conceptica ujao.',
  },
  form: {
    title: 'Eleza swali',
    hint: 'Sehemu za fomu ni mahali pa kuweka. Misingi ya kutuma itaonekana baadaye. Kwa sasa unaweza kuandika chochote.',
    messageLabel: 'Maandishi ya ujumbe',
    messagePlaceholder:
      'Sijui jina sahihi la hili ni nini, lakini nimekuwa nayo nia kwa muda mrefu…',
    contactLabel: 'Mawasiliano (hiari)',
    contactPlaceholder: 'telegram au email',
    hiddenSubject: 'Maombi ya utafiti wa mada',
    note: 'Jibu kwa kawaida huja ndani ya siku chache.',
    submit: 'Tuma →',
  },
  whatHappensNext: {
    eyebrow: 'Kinachotokea baadaye',
    title: 'Kutoka swali hadi utafiti',
    steps: [
      {
        num: '01',
        title: 'Tunasoma maswali',
        text: 'Tunasoma maswali yaliyopendekezwa na kuchagua mada za utafiti wa baadaye miongoni mwao.',
      },
      {
        num: '02',
        title: 'Tunafafanua wazo',
        text: 'Ikiwa inahitajika, wakala anauliza maswali ya ufafanuzi ili kuelewa vizuri zaidi kinachokuvutia.',
      },
      {
        num: '03',
        title: 'Tunawajulisha kuhusu matokeo',
        text: 'Ukiacha njia ya mawasiliano, tutakuandika wakati nyenzo kuhusu mada itaonekana.',
      },
    ],
  },
  dontKnowHow: {
    eyebrow: 'Hujui jinsi ya kufafanua?',
    title: 'Andika hivyo tu',
    blockquote:
      'Sijui jina sahihi la hili ni nini, lakini nimekuwa nayo nia kwa muda mrefu…',
    p1: 'Hiyo inatosha.',
  },
  cta: {
    card1: {
      title: 'Soma mawazo yaliyoandaliwa',
      text: 'Labda mada sawa tayari imefunuliwa — angalia orodha ya mawazo.',
      link: 'Fungua mawazo →',
    },
    card2: {
      title: 'Supporta mradi',
      text: 'Kama unataka kusaidia Conceptica kuwepo na kukua, mradi unaweza kusaidiwa.',
      link: 'Supporta →',
    },
  },
}
