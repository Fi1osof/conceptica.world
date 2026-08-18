import { LexiconObject } from 'src/Custom/Lexicon'

export const vi: LexiconObject = {
  hero: {
    eyebrow: 'Đề xuất nghiên cứu',
    title: 'Mô tả câu hỏi bằng lời của bạn',
    lead: 'Bạn có một câu hỏi đã làm phiền bạn từ lâu không? Có điều gì bạn muốn hiểu nhưng vẫn chưa tìm thấy lời giải thích tốt? Hãy nói với AI agent của chúng tôi về điều đó.',
  },
  howToDescribe: {
    eyebrow: 'Cách mô tả',
    title: 'Không cần tìm đúng từ',
    p1: 'Không cần tìm đúng thuật ngữ, chọn danh mục hoặc cố gắng trình bày chủ đề một cách đẹp. Ch cần giải thích <strong>bằng lời của bạn</strong>:',
    guideList: [
      'điều gì bạn quan tâm;',
      'bạn đã biết hoặc nghĩ gì về nó;',
      'cụ thể điều gì không rõ với bạn;',
      'tại sao câu hỏi này quan trọng với bạn.',
    ],
    p2: 'Agent sẽ giúp làm rõ suy nghĩ nếu cần. Câu hỏi của bạn có thể trở thành chủ đề của một trong các nghiên cứu Conceptica tiếp theo.',
  },
  form: {
    title: 'Mô tả câu hỏi',
    hint: 'Các trường biểu mẫu là trình giữ chỗ. Logic gửi sẽ xuất hiện sau. Hiện tại bạn có thể viết bất cứ thứ gì.',
    messageLabel: 'Văn bản tin nhắn',
    messagePlaceholder:
      'Tôi không biết tên chính xác của cái này là gì, nhưng tôi đã quan tâm đến nó từ lâu…',
    contactLabel: 'Liên hệ (tùy chọn)',
    contactPlaceholder: 'telegram hoặc email',
    hiddenSubject: 'Đơn xin nghiên cứu chủ đề',
    note: 'Phản hồi thường đến trong vài ngày.',
    submit: 'Gửi →',
  },
  whatHappensNext: {
    eyebrow: 'Điều gì xảy ra tiếp theo',
    title: 'Từ câu hỏi đến nghiên cứu',
    steps: [
      {
        num: '01',
        title: 'Chúng tôi đọc câu hỏi',
        text: 'Chúng tôi đọc các câu hỏi được đề xuất và chọn chủ đề cho các nghiên cứu trong tương lai trong số chúng.',
      },
      {
        num: '02',
        title: 'Chúng tôi làm rõ suy nghĩ',
        text: 'Nếu cần, agent đặt câu hỏi làm rõ để hiểu rõ hơn điều gì bạn quan tâm.',
      },
      {
        num: '03',
        title: 'Chúng tôi thông báo kết quả',
        text: 'Nếu bạn để lại cách liên hệ, chúng tôi sẽ viết khi tài liệu về chủ đề xuất hiện.',
      },
    ],
  },
  dontKnowHow: {
    eyebrow: 'Không biết cách diễn đạt?',
    title: 'Chỉ cần viết như vậy',
    blockquote:
      'Tôi không biết tên chính xác của cái này là gì, nhưng tôi đã quan tâm đến nó từ lâu…',
    p1: 'Điều đó là đủ.',
  },
  cta: {
    card1: {
      title: 'Đọc các khái niệm đã sẵn sàng',
      text: 'Có thể một chủ đề tương tự đã được đề cập — hãy kiểm tra danh sách các khái niệm.',
      link: 'Mở khái niệm →',
    },
    card2: {
      title: 'Hỗ trợ dự án',
      text: 'Nếu bạn muốn giúp Conceptica tồn tại và phát triển, dự án có thể được hỗ trợ.',
      link: 'Hỗ trợ →',
    },
  },
}
