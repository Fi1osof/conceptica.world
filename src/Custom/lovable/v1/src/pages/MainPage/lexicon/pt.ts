import { LexiconObject } from 'src/Custom/Lexicon'

export const pt: LexiconObject = {
  block: {
    hero: {
      eyebrow: 'Conceptica',
      title: 'O que você quer entender?',
      subtitle:
        'Pergunte com suas próprias palavras. O agente de IA descobrirá o que você já entende e construirá um caminho curto para o novo entendimento — sem etapas desnecessárias.',
      searchPlaceholder: 'Por exemplo: "por que não me entendem?"',
      searchButton: 'Perguntar ✦',
      conceptsButton: 'Ver conceitos →',
    },
    howItWorks: {
      eyebrow: 'Como funciona',
      title: 'Não sabe as palavras certas? Você não precisa delas',
      lead: 'O aprendizado tradicional começa com os termos de outras pessoas. Aqui é o oposto: primeiro seu entendimento, depois as palavras para ele.',
      steps: [
        {
          title: 'Você pergunta com suas próprias palavras',
          text: 'Sem terminologia ou "prompts corretos" necessários. Apenas uma frase sobre o que o confunde.',
        },
        {
          title: 'O agente descobre o que você já entende',
          text: 'Ele encontra apoio no que você já tem na cabeça, em vez de começar a explicação do zero.',
        },
        {
          title: 'Um caminho mínimo é construído',
          text: 'Apenas as etapas sem as quais o novo entendimento não pode ser montado. O desnecessário é descartado.',
        },
        {
          title: 'Os termos vêm no final',
          text: 'Quando o entendimento já está montado, as palavras aceitas tornam-se rótulos, não barreiras.',
        },
      ],
    },
    twoPaths: {
      title: 'Dois cenários',
      card1: {
        icon: '✦',
        heading: 'Quero entender algo',
        text: 'Faça uma pergunta com suas próprias palavras. O agente de IA selecionará um conceito e montará uma explicação curta para você.',
        button: 'Perguntar ao agente de IA ✦',
      },
      card2: {
        icon: '❏',
        heading: 'Quero ver ideias',
        text: 'Navegue pelos conceitos prontos — cada um leva alguns minutos. Agradável, como folhear um livro ao acaso.',
        button: 'Ver conceitos →',
      },
    },
    suggestResearchCta: {
      title: 'Não encontrou o que lhe interessa?',
      text: 'Sugira um tópico — e talvez o próximo conceito na Conceptica seja sobre ele.',
      button: 'Sugerir pesquisa ✦',
    },
    aboutBlock: {
      eyebrow: 'Sobre o projeto',
      title: 'O que é a Conceptica?',
      body: 'A Conceptica é uma tentativa de mudar a forma como aprendemos. Não repetir as explicações de outros, mas descobrir o que uma pessoa já entende e construir o que está faltando. Publicamos conceitos — textos curtos sobre ideias que mudam a forma de olhar o familiar — e criamos um agente de IA que constrói esse caminho pessoalmente para você.',
      button: 'Mais sobre o projeto →',
    },
  },
}
