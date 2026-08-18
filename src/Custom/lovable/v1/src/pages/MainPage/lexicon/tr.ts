import { LexiconObject } from 'src/Custom/Lexicon'

export const tr: LexiconObject = {
  block: {
    hero: {
      eyebrow: 'Conceptica',
      title: 'Ne anlamak istiyorsunuz?',
      subtitle:
        'Kendi kelimelerinizle sorun. AI ajanı zaten ne anladığınızı figured out edecek ve yeni anlayışa kısa bir yol oluşturacak — gereksiz adımlar olmadan.',
      searchPlaceholder: 'Örneğin: "beni neden anlamıyorlar?"',
      searchButton: 'Sor ✦',
      conceptsButton: 'Kavramları gör →',
    },
    howItWorks: {
      eyebrow: 'Nasıl çalışır',
      title: 'Doğru kelimeleri bilmiyor musunuz? Gereksinmez',
      lead: 'Geleneksel öğrenme başkalarının terimleriyle başlar. Burada tersidir: önce anlayışınız, sonra onun için kelimeler.',
      steps: [
        {
          title: 'Kendi kelimelerinizle soruyorsunuz',
          text: 'Terminoloji veya "doğru promptlar" gerekmez. Sizi neyin şaşırttığı hakkında tek bir cümle.',
        },
        {
          title: 'Ajan zaten ne anladığınızı figured out eder',
          text: 'Açıklamayı sıfırdan başlatmak yerine, zaten kafanızda olan şeyde destek bulur.',
        },
        {
          title: 'Minimal bir yol oluşturulur',
          text: 'Yeni anlayışın olmadan yapılamayacak sadece adımlar. Gereksiz olan atılır.',
        },
        {
          title: 'Terimler sonda gelir',
          text: 'Anlayış zaten oluşturulduğunda, kabul edilen kelimeler etiketler haline gelir, engeller değil.',
        },
      ],
    },
    twoPaths: {
      title: 'İki senaryo',
      card1: {
        icon: '✦',
        heading: 'Bir şey anlamak istiyorum',
        text: 'Kendi kelimelerinizle bir sorun sor. AI ajanı bir kavram seçecek ve sizin için kısa bir açıklama oluşturacak.',
        button: 'AI ajanına sor ✦',
      },
      card2: {
        icon: '❏',
        heading: 'Fikirleri görmek istiyorum',
        text: 'Hazır kavramları kaydırın — her biri birkaç dakika sürer. Rastgele bir kitap çevirmek gibi hoş.',
        button: 'Kavramları gör →',
      },
    },
    suggestResearchCta: {
      title: 'İlgilendiğinizi bulamadınız mı?',
      text: "Bir konu önerin — ve belki Conceptica'daki bir sonraki kavram tam olarak onunla ilgili olur.",
      button: 'Araştırma öner ✦',
    },
    aboutBlock: {
      eyebrow: 'Proje hakkında',
      title: 'Conceptica nedir?',
      body: 'Conceptica, öğrenme şeklimizi değiştirme girişimidir. Başkalarının açıklamalarını tekrarlamak değil, bir kişinin zaten ne anladığını figured out etmek ve eksik olanı oluşturmaktır. Kavramları yayınlıyoruz — tanıdığa bakma şeklini değiştiren fikirler hakkında kısa metinler — ve sizin için böyle bir yol kişisel olarak oluşturan bir AI ajanı yapıyoruz.',
      button: 'Proje hakkında daha fazla →',
    },
  },
}
