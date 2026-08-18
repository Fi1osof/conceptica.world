import { LexiconObject } from 'src/Custom/Lexicon'

export const fil: LexiconObject = {
  block: {
    hero: {
      eyebrow: 'Conceptica',
      title: 'Ano ang gusto mong maintindihan?',
      subtitle:
        'Magtanong gamit ang iyong mga salita. Ang AI agent ay malalaman kung ano ang iyong naiintindihan na at bubuo ng isang maikling landas sa bagong pag-unawa — nang walang mga hindi kinakailangang hakbang.',
      searchPlaceholder: 'Halimbawa: "bakit hindi ako naiintindihan?"',
      searchButton: 'Magtanong ✦',
      conceptsButton: 'Tingnan ang mga konsepto →',
    },
    howItWorks: {
      eyebrow: 'Paano ito gumagana',
      title: 'Hindi mo alam ang tamang mga salita? Hindi mo sila kailangan',
      lead: 'Ang tradisyonal na pag-aaral ay nagsisimula sa mga termino ng iba. Dito ay kabaliktaran: muna ang iyong pag-unawa, pagkatapos ay ang mga salita para dito.',
      steps: [
        {
          title: 'Ikaw ay magtatanong gamit ang iyong mga salita',
          text: 'Walang terminolohiya o "tamang mga prompt" na kailangan. Isang pangungusap lang tungkol sa kung ano ang nagpapalito sa iyo.',
        },
        {
          title: 'Ang agent ay malalaman kung ano ang iyong naiintindihan na',
          text: 'Naghahanap ito ng suporta sa kung ano na ang mayroon ka sa iyong isip, sa halip na magsimula ang paliwanag mula sa simula.',
        },
        {
          title: 'Isang minimal na landas ay binubuo',
          text: 'Lang ang mga hakbang na kung wala nito ang bagong pag-unawa ay hindi maipapaloob. Ang hindi kinakailangan ay itinatapon.',
        },
        {
          title: 'Ang mga termino ay darating sa dulo',
          text: 'Kapag ang pag-unawa ay naipapaloob na, ang tinatanggap na mga salita ay nagiging mga label, hindi mga hadlang.',
        },
      ],
    },
    twoPaths: {
      title: 'Dalawang senaryo',
      card1: {
        icon: '✦',
        heading: 'Gusto kong maintindihan ang isang bagay',
        text: 'Magtanong gamit ang iyong mga salita. Ang AI agent ay pipili ng isang konsepto at bubuo ng isang maikling paliwanag para sa iyo.',
        button: 'Magtanong sa AI agent ✦',
      },
      card2: {
        icon: '❏',
        heading: 'Gusto kong tingnan ang mga ideya',
        text: 'I-scroll ang mga handang konsepto — bawat isa ay tumatagal ng ilang minuto. Masaya, tulad ng pag-browse ng libro nang random.',
        button: 'Tingnan ang mga konsepto →',
      },
    },
    suggestResearchCta: {
      title: 'Hindi mo nakita ang iyong gusto?',
      text: 'Mungkahi ng isang paksa — at baka ang susunod na konsepto sa Conceptica ay tungkol dito.',
      button: 'Mungkahi ng pananaliksik ✦',
    },
    aboutBlock: {
      eyebrow: 'Tungkol sa proyekto',
      title: 'Ano ang Conceptica?',
      body: 'Ang Conceptica ay isang pagsubok na baguhin ang paraan ng pag-aaral. Hindi upang ulitin ang mga paliwanag ng iba, kundi upang malaman kung ano ang naiintindihan na ng isang tao at itayo ang kulang. Inilalathala namin ang mga konsepto — maikling mga teksto tungkol sa mga ideya na nagbabago ang paraan ng pagtingin sa pamilyar — at ginagawa namin ang isang AI agent na itinatayo ang isang ganang landas nang personal para sa iyo.',
      button: 'Higit pa tungkol sa proyekto →',
    },
  },
}
