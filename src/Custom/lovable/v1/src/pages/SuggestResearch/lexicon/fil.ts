import { LexiconObject } from 'src/Custom/Lexicon'

export const fil: LexiconObject = {
  hero: {
    eyebrow: 'Magmungkahi ng pananaliksik',
    title: 'Ilarawan ang tanong sa iyong sariling mga salita',
    lead: 'May tanong ba na nagpapabagabag sa iyo nang matagal? May bagay na gusto mong maintindihan pero hindi pa nakakahanap ng magandang paliwanag? Sabihin sa aming AI agent tungkol dito.',
  },
  howToDescribe: {
    eyebrow: 'Paano ilalarawan',
    title: 'Hindi kinakailangang maghanap ng tamang mga salita',
    p1: 'Hindi kinakailangang maghanap ng tamang termino, pumili ng kategorya, o subukang pormulahin nang maganda ang paksa. Ipaliwanag lang <strong>sa iyong sariling mga salita</strong>:',
    guideList: [
      'ang ano ang interesado sa iyo;',
      'ang ano na alam mo o iniisip mo tungkol dito;',
      'ang ano talaga ang hindi malinaw sa iyo;',
      'bakit ang tanong na ito ay mahalaga sa iyo.',
    ],
    p2: 'Tutulungan ng agent na linawin ang kaisipan kung kinakailangan. Maaaring maging paksa ang iyong tanong ng isa sa mga susunod na pananaliksik ng Conceptica.',
  },
  form: {
    title: 'Ilarawan ang tanong',
    hint: 'Ang mga field ng form ay isang placeholder. Ang logic ng pagpapadala ay lalabas mamaya. Para ngayon, maaari kang magsulat ng anumang bagay.',
    messageLabel: 'Teksto ng mensahe',
    messagePlaceholder:
      'Hindi ko alam kung ano ang tamang tawag dito, pero interesado ako dito nang matagal na…',
    contactLabel: 'Kontak (opsyonal)',
    contactPlaceholder: 'telegram o email',
    hiddenSubject: 'Applikasyon ng pananaliksik ng paksa',
    note: 'Ang sagot ay karaniwang darating sa loob ng ilang araw.',
    submit: 'Ipadala →',
  },
  whatHappensNext: {
    eyebrow: 'Ang ano ang nangyayari susunod',
    title: 'Mula sa tanong hanggang sa pananaliksik',
    steps: [
      {
        num: '01',
        title: 'Binabasa namin ang mga tanong',
        text: 'Binabasa namin ang mga iminungkahing tanong at pinipili ang mga paksa para sa mga pananaliksik sa hinaharap sa kanila.',
      },
      {
        num: '02',
        title: 'Linilinaw namin ang kaisipan',
        text: 'Kung kinakailangan, nagtatanong ang agent ng mga clarifying question para mas maunawaan kung ano ang interesado sa iyo.',
      },
      {
        num: '03',
        title: 'Inaalam namin ang resulta',
        text: 'Kung iniwan mo ang paraan ng kontak, magsusulat kami kapag lumilitaw ang materyal tungkol sa paksa.',
      },
    ],
  },
  dontKnowHow: {
    eyebrow: 'Hindi alam kung paano pormulahin?',
    title: 'Isulat lang iyan',
    blockquote:
      'Hindi ko alam kung ano ang tamang tawag dito, pero interesado ako dito nang matagal na…',
    p1: 'Iyan ay sapat na.',
  },
  cta: {
    card1: {
      title: 'Basahin ang mga handang konsepto',
      text: 'Maringaring ang isang katulad na paksa ay sakop na — tingnan ang listahan ng mga konsepto.',
      link: 'Buksan ang mga konsepto →',
    },
    card2: {
      title: 'Suportahan ang proyekto',
      text: 'Kung gusto mong tulungan ang Conceptica na umiral at mag-unlad, maaaring suportahan ang proyekto.',
      link: 'Suportahan →',
    },
  },
}
