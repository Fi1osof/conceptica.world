import { LexiconObject } from 'src/Custom/Lexicon'

export const pt: LexiconObject = {
  hero: {
    eyebrow: 'Sugerir pesquisa',
    title: `Descreva a pergunta em suas próprias palavras`,
    lead: `Tem uma pergunta que tem incomodado você há muito tempo? Algo que você quer entender, mas ainda não encontrou uma boa explicação? Conte ao nosso agente de IA sobre isso.`,
  },
  howToDescribe: {
    eyebrow: 'Como descrever',
    title: 'Não precisa procurar as palavras certas',
    p1: 'Não precisa procurar os termos certos, escolher uma categoria ou tentar formular lindamente o tópico. Apenas explique <strong>em suas próprias palavras</strong>:',
    guideList: [
      'o que lhe interessa;',
      'o que você já sabe ou pensa sobre isso;',
      'o que exatamente não está claro para você;',
      'por que esta pergunta é importante para você.',
    ],
    p2: 'O agente ajudará a esclarecer o pensamento, se necessário. Sua pergunta pode se tornar o tema de uma das próximas pesquisas da Conceptica.',
  },
  form: {
    title: 'Descreva a pergunta',
    hint: 'Campos do formulário são um espaço reservado. A lógica de envio aparecerá mais tarde. Por enquanto, você pode escrever qualquer coisa.',
    messageLabel: 'Texto da mensagem',
    messagePlaceholder: `Eu não sei como isso se chama corretamente, mas tenho me interessado por isso há muito tempo…`,
    contactLabel: 'Contato (opcional)',
    contactPlaceholder: 'telegram ou email',
    hiddenSubject: 'Solicitação de pesquisa de tópico',
    note: 'A resposta geralmente chega em alguns dias.',
    submit: 'Enviar →',
  },
  whatHappensNext: {
    eyebrow: 'O que acontece a seguir',
    title: 'Da pergunta à pesquisa',
    steps: [
      {
        num: '01',
        title: 'Lemos as perguntas',
        text: 'Lemos as perguntas sugeridas e selecionamos temas para pesquisas futuras entre elas.',
      },
      {
        num: '02',
        title: 'Esclarecemos o pensamento',
        text: 'Se necessário, o agente faz perguntas esclarecedoras para entender melhor o que lhe interessa.',
      },
      {
        num: '03',
        title: 'Informamos sobre o resultado',
        text: 'Se você deixou uma forma de contato, escreveremos quando o material sobre o tema aparecer.',
      },
    ],
  },
  dontKnowHow: {
    eyebrow: `Não sabe como formular?`,
    title: 'Apenas escreva isso',
    blockquote: `Eu não sei como isso se chama corretamente, mas tenho me interessado por isso há muito tempo…`,
    p1: 'Isso é suficiente.',
  },
  cta: {
    card1: {
      title: 'Ler conceitos prontos',
      text: 'Talvez um tema semelhante já tenha sido abordado — verifique a lista de conceitos.',
      link: 'Abrir conceitos →',
    },
    card2: {
      title: 'Apoiar o projeto',
      text: 'Se você quer ajudar a Conceptica a existir e se desenvolver, o projeto pode ser apoiado.',
      link: 'Apoiar →',
    },
  },
}
