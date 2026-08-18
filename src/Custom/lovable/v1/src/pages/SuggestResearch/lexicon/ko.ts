import { LexiconObject } from 'src/Custom/Lexicon'

export const ko: LexiconObject = {
  hero: {
    eyebrow: '연구 제안',
    title: '자신의 말로 질문을 설명하세요',
    lead: '오랫동안 괴롭히는 질문이 있습니까? 이해하고 싶지만 아직 좋은 설명을 찾지 못한 것이 있습니까? 우리 AI 에이전트에게 이에 대해 말씀하세요.',
  },
  howToDescribe: {
    eyebrow: '설명 방법',
    title: '올바른 단어를 찾을 필요가 없습니다',
    p1: '올바른 용어를 찾거나, 카테고리를 선택하거나, 주제를 아름답게 공식화하려고 할 필요가 없습니다. 단순히 <strong>자신의 말로</strong> 설명하세요:',
    guideList: [
      '무엇에 관심이 있는지;',
      '이미 알고 있거나 생각하는 것;',
      '구체적으로 무엇이 불분명한지;',
      '이 질문이 왜 중요한지.',
    ],
    p2: '필요한 경우 에이전트가 생각을 명확히 하는 데 도움을 줍니다. 질문은 다음 Conceptica 연구의 주제가 될 수 있습니다.',
  },
  form: {
    title: '질문을 설명하세요',
    hint: '양식 필드는 자리 표시자입니다. 제출 로직은 나중에 나타납니다. 지금은 무엇이든 쓸 수 있습니다.',
    messageLabel: '메시지 텍스트',
    messagePlaceholder:
      '이것이 올바르게 무엇이라고 불리는지 모르지만 오랫동안 관심이 있었습니다…',
    contactLabel: '연락처 (선택 사항)',
    contactPlaceholder: 'telegram 또는 email',
    hiddenSubject: '주제 연구 신청',
    note: '응답은 보통 며칠 안에 도착합니다.',
    submit: '보내기 →',
  },
  whatHappensNext: {
    eyebrow: '다음에 무엇이 일어나는지',
    title: '질문에서 연구까지',
    steps: [
      {
        num: '01',
        title: '질문을 읽습니다',
        text: '제안된 질문을 읽고 그 중에서 미래 연구를 위한 주제를 선택합니다.',
      },
      {
        num: '02',
        title: '생각을 명확히 합니다',
        text: '필요한 경우 에이전트는 귀하가 무엇에 관심이 있는지 더 잘 이해하기 위해 명확화 질문을 합니다.',
      },
      {
        num: '03',
        title: '결과에 대해 알립니다',
        text: '연락 방법을 남긴 경우 주제에 대한 자료가 나타날 때 씁니다.',
      },
    ],
  },
  dontKnowHow: {
    eyebrow: '공식화하는 방법을 모르십니까?',
    title: '그냥 그렇게 쓰세요',
    blockquote:
      '이것이 올바르게 무엇이라고 불리는지 모르지만 오랫동안 관심이 있었습니다…',
    p1: '그것으로 충분합니다.',
  },
  cta: {
    card1: {
      title: '준비된 개념 읽기',
      text: '아마도 유사한 주제가 이미 다루어졌을 수 있습니다 — 개념 목록을 확인하세요.',
      link: '개념 열기 →',
    },
    card2: {
      title: '프로젝트 지원',
      text: 'Conceptica가 존재하고 발전하는 것을 돕고 싶다면 프로젝트를 지원할 수 있습니다.',
      link: '지원 →',
    },
  },
}
