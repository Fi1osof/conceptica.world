import { LexiconObject } from 'src/Custom/Lexicon'

export const ms: LexiconObject = {
  block: {
    hero: {
      eyebrow: 'Conceptica',
      title: 'Apa yang anda mahu fahami?',
      subtitle:
        'Tanya dengan kata-kata anda sendiri. Ejen AI akan mengetahui apa yang anda sudah fahami dan membina laluan pendek ke pemahaman baru — tanpa langkah yang tidak perlu.',
      searchPlaceholder: 'Contohnya: "kenapa orang tidak faham saya?"',
      searchButton: 'Tanya ✦',
      conceptsButton: 'Lihat konsep →',
    },
    howItWorks: {
      eyebrow: 'Bagaimana ia berfungsi',
      title: 'Tidak tahu perkataan yang betul? Anda tidak perlukan',
      lead: 'Pembelajaran tradisional bermula dengan istilah orang lain. Di sini adalah sebaliknya: pertama pemahaman anda, kemudian kata-kata untuknya.',
      steps: [
        {
          title: 'Anda bertanya dengan kata-kata anda sendiri',
          text: 'Tiada terminologi atau "prompt yang betul" diperlukan. Hanya satu ayat tentang apa yang membingungkan anda.',
        },
        {
          title: 'Ejen mengetahui apa yang anda sudah fahami',
          text: 'Ia mencari sokongan dalam apa yang anda sudah ada di kepala, bukannya memulakan penjelasan dari awal.',
        },
        {
          title: 'Laluan minimum dibina',
          text: 'Hanya langkah-langkah yang tanpanya pemahaman baru tidak dapat dipasang. Yang tidak perlu dibuang.',
        },
        {
          title: 'Istilah datang di akhir',
          text: 'Apabila pemahaman sudah dipasang, kata-kata yang diterima menjadi label, bukan halangan.',
        },
      ],
    },
    twoPaths: {
      title: 'Dua senario',
      card1: {
        icon: '✦',
        heading: 'Saya mahu memahami sesuatu',
        text: 'Tanya soalan dengan kata-kata anda sendiri. Ejen AI akan memilih konsep dan memasang penjelasan pendek untuk anda.',
        button: 'Tanya ejen AI ✦',
      },
      card2: {
        icon: '❏',
        heading: 'Saya mahu melihat idea',
        text: 'Scroll melalui konsep sedia — setiap satu mengambil beberapa minit. Menyenangkan, seperti melayari buku secara rawak.',
        button: 'Lihat konsep →',
      },
    },
    suggestResearchCta: {
      title: 'Tidak menemui apa yang anda minati?',
      text: 'Cadangkan topik — dan mungkin konsep seterusnya di Conceptica adalah mengenainya.',
      button: 'Cadangkan penyelidikan ✦',
    },
    aboutBlock: {
      eyebrow: 'Tentang projek',
      title: 'Apa itu Conceptica?',
      body: 'Conceptica adalah cubaan untuk mengubah cara kita belajar. Bukan untuk mengulang penjelasan orang lain, tetapi untuk mengetahui apa yang seseorang sudah fahami dan membina yang hilang. Kami menerbitkan konsep — teks pendek tentang idea yang mengubah cara melihat yang biasa — dan kami membuat ejen AI yang membina laluan sedemikian secara peribadi untuk anda.',
      button: 'Lebih lanjut tentang projek →',
    },
  },
}
