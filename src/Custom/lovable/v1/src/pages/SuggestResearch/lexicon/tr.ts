import { LexiconObject } from 'src/Custom/Lexicon'

export const tr: LexiconObject = {
  hero: {
    eyebrow: 'Araştırma öner',
    title: `Soruyu kendi kelimelerinizle anlatın`,
    lead: `Uzun süredir sizi rahatsız eden bir soru mu var? Anlamak istediğiniz ama henüz iyi bir açıklama bulamadığınız bir şey mi? Bunu AI ajanımıza anlatın.`,
  },
  howToDescribe: {
    eyebrow: 'Nasıl anlatılır',
    title: 'Doğru kelimeleri aramaya gerek yok',
    p1: 'Doğru terimleri aramaya, kategori seçmeye veya konuyu güzelce formüle etmeye çalışmaya gerek yok. Sadece <strong>kendi kelimelerinizle</strong> açıklayın:',
    guideList: [
      'sizi ne ilgilendiriyor;',
      'bunun hakkında ne zaten biliyorsunuz veya ne düşünüyorsunuz;',
      'tam olarak size neyin net olmadığı;',
      'bu sorunun sizin için neden önemli.',
    ],
    p2: 'Gerekirse ajan düşünceyi netleştirmeye yardımcı olur. Sorunuz, gelecek Conceptica araştırmalarından birinin konusu olabilir.',
  },
  form: {
    title: 'Soruyu anlatın',
    hint: 'Form alanları yer tutucudur. Gönderme mantığı daha sonra ortaya çıkacak. Şimdilik her şeyi yazabilirsiniz.',
    messageLabel: 'Mesaj metni',
    messagePlaceholder: `Bunun doğru adının ne olduğunu bilmiyorum, ama uzun süredir ilgimi çekiyor…`,
    contactLabel: 'İletişim (isteğe bağlı)',
    contactPlaceholder: 'telegram veya email',
    hiddenSubject: 'Konu araştırması başvurusu',
    note: 'Yanıt genellikle birkaç gün içinde gelir.',
    submit: 'Gönder →',
  },
  whatHappensNext: {
    eyebrow: 'Sıradaki ne oluyor',
    title: 'Sorudan araştırmaya',
    steps: [
      {
        num: '01',
        title: 'Soruları okuyoruz',
        text: 'Önerilen soruları okuyoruz ve aralarından gelecekteki araştırmalar için konular seçiyoruz.',
      },
      {
        num: '02',
        title: 'Düşünceyi netleştiriyoruz',
        text: 'Gerekirse, ajan sizi neyin ilgilendiğini daha iyi anlamak için netleştirici sorular sorar.',
      },
      {
        num: '03',
        title: 'Sonuç hakkında bilgi veriyoruz',
        text: 'Bir iletişim yolu bıraktıysanız, konuyla ilgili materyal ortaya çıktığında yazarız.',
      },
    ],
  },
  dontKnowHow: {
    eyebrow: `Nasıl formüle edeceğinizi bilmiyor musunuz?`,
    title: 'O zaman bunu yazın',
    blockquote: `Bunun doğru adının ne olduğunu bilmiyorum, ama uzun süredir ilgimi çekiyor…`,
    p1: 'Bu yeterli.',
  },
  cta: {
    card1: {
      title: 'Hazır kavramları okuyun',
      text: 'Belki benzer bir konu zaten ele alınmıştır — kavram listesine göz atın.',
      link: 'Kavramları aç →',
    },
    card2: {
      title: 'Projeyi destekleyin',
      text: "Conceptica'nın var olmasına ve gelişmesine yardımcı olmak istiyorsanız, proje desteklenebilir.",
      link: 'Destekle →',
    },
  },
}
