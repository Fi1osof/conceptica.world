import { LexiconObject } from 'src/Custom/Lexicon'

export const ms: LexiconObject = {
  hero: {
    eyebrow: 'Cadangkan penyelidikan',
    title: 'Huraikan soalan dengan kata-kata anda sendiri',
    lead: 'Adakah soalan yang mengganggu anda untuk masa yang lama? Sesuatu yang anda ingin fahami tetapi belum menemui penjelasan yang baik? Beritahu AI agent kami tentang perkara itu.',
  },
  howToDescribe: {
    eyebrow: 'Cara menghuraikan',
    title: 'Tidak perlu mencari perkataan yang betul',
    p1: 'Tidak perlu mencari istilah yang betul, memilih kategori, atau cuba merumuskan topik dengan cantik. Hanya terangkan <strong>dengan kata-kata anda sendiri</strong>:',
    guideList: [
      'apa yang anda minati;',
      'apa yang anda sudah tahu atau fikirkan tentangnya;',
      'apa yang tidak jelas kepada anda;',
      'mengapa soalan ini penting kepada anda.',
    ],
    p2: 'Agent akan membantu menjelaskan pemikiran jika perlu. Soalan anda mungkin menjadi topik salah satu penyelidikan Conceptica akan datang.',
  },
  form: {
    title: 'Huraikan soalan',
    hint: 'Medan borang adalah pemegang tempat. Logik penyerahan akan muncul kemudian. Buat masa ini, anda boleh menulis apa sahaja.',
    messageLabel: 'Teks mesej',
    messagePlaceholder:
      'Saya tidak tahu nama yang betul untuk ini, tetapi saya telah berminat untuk masa yang lama…',
    contactLabel: 'Hubungi (pilihan)',
    contactPlaceholder: 'telegram atau email',
    hiddenSubject: 'Permohonan penyelidikan topik',
    note: 'Jawapan biasanya tiba dalam beberapa hari.',
    submit: 'Hantar →',
  },
  whatHappensNext: {
    eyebrow: 'Apa yang berlaku seterusnya',
    title: 'Dari soalan kepada penyelidikan',
    steps: [
      {
        num: '01',
        title: 'Kami membaca soalan',
        text: 'Kami membaca soalan yang dicadangkan dan memilih topik untuk penyelidikan masa depan antara mereka.',
      },
      {
        num: '02',
        title: 'Kami menjelaskan pemikiran',
        text: 'Jika perlu, agent bertanya soalan penjelasan untuk lebih memahami apa yang anda minati.',
      },
      {
        num: '03',
        title: 'Kami memaklumkan hasil',
        text: 'Jika anda meninggalkan cara hubungan, kami akan menulis apabila bahan mengenai topik muncul.',
      },
    ],
  },
  dontKnowHow: {
    eyebrow: 'Tidak tahu cara merumuskan?',
    title: 'Tulis sahaja begitu',
    blockquote:
      'Saya tidak tahu nama yang betul untuk ini, tetapi saya telah berminat untuk masa yang lama…',
    p1: 'Itu sudah cukup.',
  },
  cta: {
    card1: {
      title: 'Baca konsep sedia ada',
      text: 'Mungkin topik serupa sudah dibincangkan — semak senarai konsep.',
      link: 'Buka konsep →',
    },
    card2: {
      title: 'Sokong projek',
      text: 'Jika anda ingin membantu Conceptica wujud dan berkembang, projek boleh disokong.',
      link: 'Sokong →',
    },
  },
}
