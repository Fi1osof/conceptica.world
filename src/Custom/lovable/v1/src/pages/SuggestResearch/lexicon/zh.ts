import { LexiconObject } from 'src/Custom/Lexicon'

export const zh: LexiconObject = {
  hero: {
    eyebrow: '建议研究',
    title: '用你自己的话描述问题',
    lead: '有一个问题困扰你很久了吗？有什么你想理解但还没有找到好的解释？告诉我们的AI代理。',
  },
  howToDescribe: {
    eyebrow: '如何描述',
    title: '不需要寻找正确的词',
    p1: '不需要寻找正确的术语，选择类别或尝试优美地表述主题。只需<strong>用你自己的话</strong>解释：',
    guideList: [
      '什么让你感兴趣;',
      '你对此已经知道或想到什么;',
      '什么对你来说不清楚;',
      '为什么这个问题对你很重要.',
    ],
    p2: '如果需要，代理将帮助澄清想法。你的问题可能成为下一个Conceptica研究的主题。',
  },
  form: {
    title: '描述问题',
    hint: '表单字段是占位符。提交逻辑稍后出现。现在你可以写任何东西。',
    messageLabel: '消息文本',
    messagePlaceholder: '我不知道这叫什么正确名称，但我很久以来一直对此感兴趣…',
    contactLabel: '联系方式（可选）',
    contactPlaceholder: 'telegram或email',
    hiddenSubject: '主题研究申请',
    note: '回复通常在几天内到达。',
    submit: '发送 →',
  },
  whatHappensNext: {
    eyebrow: '接下来发生什么',
    title: '从问题到研究',
    steps: [
      {
        num: '01',
        title: '我们阅读问题',
        text: '我们阅读建议的问题，并从中选择未来研究的主题。',
      },
      {
        num: '02',
        title: '我们澄清想法',
        text: '如果需要，代理会提出澄清问题，以更好地理解你感兴趣的内容。',
      },
      {
        num: '03',
        title: '我们通知结果',
        text: '如果你留下了联系方式，当主题材料出现时我们会写信。',
      },
    ],
  },
  dontKnowHow: {
    eyebrow: '不知道如何表述？',
    title: '那就这样写',
    blockquote: '我不知道这叫什么正确名称，但我很久以来一直对此感兴趣…',
    p1: '这就足够了。',
  },
  cta: {
    card1: {
      title: '阅读现成的概念',
      text: '也许类似的主题已经被涵盖——查看概念列表。',
      link: '打开概念 →',
    },
    card2: {
      title: '支持项目',
      text: '如果你想帮助Conceptica存在和发展，可以支持该项目。',
      link: '支持 →',
    },
  },
}
