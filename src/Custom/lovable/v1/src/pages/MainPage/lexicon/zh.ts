import { LexiconObject } from 'src/Custom/Lexicon'

export const zh: LexiconObject = {
  block: {
    hero: {
      eyebrow: 'Conceptica',
      title: '您想理解什么？',
      subtitle:
        '用您自己的话提问。AI代理会弄清楚您已经理解的内容，并构建通往新理解的短路径——无需不必要的步骤。',
      searchPlaceholder: '例如："为什么人们不理解我？"',
      searchButton: '提问 ✦',
      conceptsButton: '查看概念 →',
    },
    howItWorks: {
      eyebrow: '如何工作',
      title: '不知道正确的词？您不需要它们',
      lead: '传统学习从别人的术语开始。这里相反：首先是您的理解，然后是它的词汇。',
      steps: [
        {
          title: '您用自己的话提问',
          text: '不需要术语或"正确的提示"。只需一句话说明什么让您困惑。',
        },
        {
          title: '代理弄清楚您已经理解的内容',
          text: '它在您脑海中已有的内容中寻找支持，而不是从头开始解释。',
        },
        {
          title: '构建最小路径',
          text: '只有那些没有它们就无法组装新理解的步骤。不必要的被丢弃。',
        },
        {
          title: '术语在最后出现',
          text: '当理解已经组装时，接受的词成为标签，而不是障碍。',
        },
      ],
    },
    twoPaths: {
      title: '两种场景',
      card1: {
        icon: '✦',
        heading: '我想理解一些东西',
        text: '用您自己的话提问。AI代理将选择一个概念并为您组装简短的解释。',
        button: '询问AI代理 ✦',
      },
      card2: {
        icon: '❏',
        heading: '我想浏览想法',
        text: '滚动浏览现成的概念——每个都需要几分钟。愉快，就像随机翻阅一本书。',
        button: '查看概念 →',
      },
    },
    suggestResearchCta: {
      title: '没有找到您感兴趣的内容？',
      text: '建议一个主题——也许Conceptica上的下一个概念就是关于它的。',
      button: '建议研究 ✦',
    },
    aboutBlock: {
      eyebrow: '关于项目',
      title: '什么是Conceptica？',
      body: 'Conceptica是改变我们学习方式的尝试。不是重复别人的解释，而是弄清楚一个人已经理解什么并构建缺失的内容。我们发布概念——关于改变看待熟悉事物方式的想法的短文——并制作一个AI代理，为您个人构建这样的路径。',
      button: '更多关于项目 →',
    },
  },
}
