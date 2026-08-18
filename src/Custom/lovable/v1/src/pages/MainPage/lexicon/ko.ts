import { LexiconObject } from 'src/Custom/Lexicon'

export const ko: LexiconObject = {
  block: {
    hero: {
      eyebrow: 'Conceptica',
      title: '무엇을 이해하고 싶으신가요?',
      subtitle:
        '자신의 말로 질문하세요. AI 에이전트가 이미 이해하고 있는 것을 파악하고 새로운 이해로의 짧은 경로를 구축합니다 — 불필요한 단계 없이.',
      searchPlaceholder: '예: "왜 나를 이해하지 못하지?"',
      searchButton: '질문하기 ✦',
      conceptsButton: '개념 보기 →',
    },
    howItWorks: {
      eyebrow: '작동 방식',
      title: '올바른 단어를 모르나요? 필요하지 않습니다',
      lead: '전통적인 학습은 다른 사람의 용어로 시작합니다. 여기서는 반대입니다: 먼저 당신의 이해, 그 다음 그를 위한 단어.',
      steps: [
        {
          title: '자신의 말로 질문합니다',
          text: '용어나 "올바른 프롬프트"가 필요하지 않습니다. 무엇이 혼란스러운지에 대한 한 문장만 있으면 됩니다.',
        },
        {
          title: '에이전트가 이미 이해하고 있는 것을 파악합니다',
          text: '설명을 처음부터 시작하는 대신, 이미 머릿속에 있는 것에서 지원을 찾습니다.',
        },
        {
          title: '최소 경로가 구축됩니다',
          text: '새로운 이해가 조립될 수 없는 단계만. 불필요한 것은 버려집니다.',
        },
        {
          title: '용어는 마지막에 옵니다',
          text: '이해가 이미 조립되면, 수락된 단어는 라벨이 되지 장벽이 아닙니다.',
        },
      ],
    },
    twoPaths: {
      title: '두 가지 시나리오',
      card1: {
        icon: '✦',
        heading: '무언가를 이해하고 싶습니다',
        text: '자신의 말로 질문하세요. AI 에이전트가 개념을 선택하고 짧은 설명을 조립해 드립니다.',
        button: 'AI 에이전트에게 질문하기 ✦',
      },
      card2: {
        icon: '❏',
        heading: '아이디어를 보고 싶습니다',
        text: '준비된 개념을 스크롤 — 각 개념은 몇 분 정도 걸립니다. 무작위로 책을 넘기는 것처럼 즐겁습니다.',
        button: '개념 보기 →',
      },
    },
    suggestResearchCta: {
      title: '관심 있는 것을 찾지 못했나요?',
      text: '주제를 제안하세요 — 아마도 Conceptica의 다음 개념은 그것에 관한 것일 것입니다.',
      button: '연구 제안하기 ✦',
    },
    aboutBlock: {
      eyebrow: '프로젝트에 대해',
      title: 'Conceptica란 무엇인가요?',
      body: 'Conceptica는 학습 방식을 변경하려는 시도입니다. 다른 사람의 설명을 반복하는 것이 아니라, 사람이 이미 무엇을 이해하고 있는지 파악하고 누락된 것을 구축합니다. 우리는 개념을 게시합니다 — 익숙한 것을 보는 방식을 변경하는 아이디어에 대한 짧은 텍스트 — 그리고 우리는 당신을 위해 그러한 경로를 개인적으로 구축하는 AI 에이전트를 만듭니다.',
      button: '프로젝트에 대해 더 보기 →',
    },
  },
}
