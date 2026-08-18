import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
  useRef,
  useEffect,
} from 'react'
import { ChatMessage, CHAT_SESSION_STORAGE_KEY } from '../interfaces'
import { useSnackbar } from 'src/ui-kit/Snackbar/context'
import { sendMessageStream } from '../../lib/streamClient'
import { useRouter } from 'next/router'
import { useLexicon, LexiconDict } from 'src/Custom/Lexicon'

const chatLexicon: LexiconDict = {
  en: {
    'chat.welcomeTitle': 'Hello! How can I help?',
    'chat.welcomeText': 'Ask anything',
    'chat.placeholder': 'Type your message...',
  },
  ru: {
    'chat.welcomeTitle': 'Привет! Чем могу помочь?',
    'chat.welcomeText': 'Спросите что угодно',
    'chat.placeholder': 'Введите ваше сообщение...',
  },
  vi: {
    'chat.welcomeTitle': 'Xin chào! Tôi có thể giúp gì?',
    'chat.welcomeText': 'Hỏi bất cứ điều gì',
    'chat.placeholder': 'Nhập tin nhắn của bạn...',
  },
  fr: {
    'chat.welcomeTitle': 'Bonjour! Comment puis-je aider?',
    'chat.welcomeText': "Posez n'importe quelle question",
    'chat.placeholder': 'Tapez votre message...',
  },
  de: {
    'chat.welcomeTitle': 'Hallo! Wie kann ich helfen?',
    'chat.welcomeText': 'Fragen Sie alles',
    'chat.placeholder': 'Geben Sie Ihre Nachricht ein...',
  },
  it: {
    'chat.welcomeTitle': 'Ciao! Come posso aiutare?',
    'chat.welcomeText': 'Chiedi qualsiasi cosa',
    'chat.placeholder': 'Digita il tuo messaggio...',
  },
  pl: {
    'chat.welcomeTitle': 'Cześć! Jak mogę pomóc?',
    'chat.welcomeText': 'Zadaj dowolne pytanie',
    'chat.placeholder': 'Wpisz swoją wiadomość...',
  },
  es: {
    'chat.welcomeTitle': '¡Hola! ¿Cómo puedo ayudar?',
    'chat.welcomeText': 'Pregunta cualquier cosa',
    'chat.placeholder': 'Escribe tu mensaje...',
  },
  pt: {
    'chat.welcomeTitle': 'Olá! Como posso ajudar?',
    'chat.welcomeText': 'Pergunte qualquer coisa',
    'chat.placeholder': 'Digite sua mensagem...',
  },
  zh: {
    'chat.welcomeTitle': '你好！有什么可以帮助？',
    'chat.welcomeText': '问任何问题',
    'chat.placeholder': '输入您的消息...',
  },
  hi: {
    'chat.welcomeTitle': 'नमस्ते! मैं कैसे मदद कर सकता हूं?',
    'chat.welcomeText': 'कुछ भी पूछें',
    'chat.placeholder': 'अपना संदेश दर्ज करें...',
  },
  bn: {
    'chat.welcomeTitle': 'হ্যালো! আমি কীভাবে সাহায্য করতে পারি?',
    'chat.welcomeText': 'যেকোনো প্রশ্ন জিজ্ঞাসা করুন',
    'chat.placeholder': 'আপনার বার্তা লিখুন...',
  },
  ja: {
    'chat.welcomeTitle': 'こんにちは！何かお手伝いできることはありますか？',
    'chat.welcomeText': '何でも聞いてください',
    'chat.placeholder': 'メッセージを入力...',
  },
  tr: {
    'chat.welcomeTitle': 'Merhaba! Nasıl yardımcı olabilirim?',
    'chat.welcomeText': 'Her şeyi sorabilirsiniz',
    'chat.placeholder': 'Mesajınızı girin...',
  },
  ko: {
    'chat.welcomeTitle': '안녕하세요! 어떻게 도와드릴까요?',
    'chat.welcomeText': '무엇이든 물어보세요',
    'chat.placeholder': '메시지를 입력하세요...',
  },
  th: {
    'chat.welcomeTitle': 'สวัสดี! ฉันจะช่วยคุณได้อย่างไร?',
    'chat.welcomeText': 'ถามอะไรก็ได้',
    'chat.placeholder': 'พิมพ์ข้อความของคุณ...',
  },
  sw: {
    'chat.welcomeTitle': 'Habari! Ninaweza kusaidia vipi?',
    'chat.welcomeText': 'Uliza chochote',
    'chat.placeholder': 'Andika ujumbe wako...',
  },
  fil: {
    'chat.welcomeTitle': 'Kamusta! Paano ako makakatulong?',
    'chat.welcomeText': 'Magtanong ng kahit anuman',
    'chat.placeholder': 'I-type ang iyong mensahe...',
  },
  ms: {
    'chat.welcomeTitle': 'Hai! Bagaimana saya boleh membantu?',
    'chat.welcomeText': 'Tanya apa-apa sahaja',
    'chat.placeholder': 'Taip mesej anda...',
  },
}

type ChatContextValue = {
  messages: ChatMessage[]
  isLoading: boolean
  showTypingIndicator: boolean
  isOpen: boolean
  isExpanded: boolean
  setIsOpen: (open: boolean) => void
  setIsExpanded: (expanded: boolean) => void
  submitMessage: (text: string) => Promise<void>
  stopStreaming: () => void
  handleClose: () => void
  handleExpand: () => void
  handleToggle: (event: React.MouseEvent) => void
  welcomeTitle: string
  welcomeText: string
  placeholder: string
  initialMessage: string
  initialMessageSetter: React.Dispatch<React.SetStateAction<string>>
}

const ChatContext = createContext<ChatContextValue | null>(null)

export const useChatContext = () => {
  const context = useContext(ChatContext)
  if (!context) {
    throw new Error('useChatContext must be used within ChatProvider')
  }
  return context
}

type ChatProviderProps = {
  children: React.ReactNode
  welcomeTitle?: string
  welcomeText?: string
  placeholder?: string
}

export const ChatProvider: React.FC<ChatProviderProps> = ({
  children,
  welcomeTitle,
  welcomeText,
  placeholder,
}) => {
  const { t } = useLexicon(chatLexicon)
  const snackbar = useSnackbar()
  const [isOpen, setIsOpen] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [showTypingIndicator, setShowTypingIndicator] = useState(false)
  const [initialMessage, initialMessageSetter] = useState('')

  const sessionIdRef = useRef<string | null>(null)

  const getSessionId = useCallback(() => {
    if (sessionIdRef.current) {
      return sessionIdRef.current
    }
    const stored = localStorage.getItem(CHAT_SESSION_STORAGE_KEY)
    if (stored) {
      sessionIdRef.current = stored
      return stored
    }
    const newId = `chat_${Date.now()}_${Math.random().toString(36).slice(2)}`
    localStorage.setItem(CHAT_SESSION_STORAGE_KEY, newId)
    sessionIdRef.current = newId
    return newId
  }, [])
  const streamingMessageIdRef = useRef<string | null>(null)
  const abortControllerRef = useRef<AbortController | null>(null)
  const typingTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const TYPING_INDICATOR_DELAY = 400

  const startTypingTimer = useCallback(() => {
    if (typingTimerRef.current) {
      clearTimeout(typingTimerRef.current)
    }
    typingTimerRef.current = setTimeout(() => {
      setShowTypingIndicator(true)
    }, TYPING_INDICATOR_DELAY)
  }, [])

  const resetTypingTimer = useCallback(() => {
    setShowTypingIndicator(false)
    if (typingTimerRef.current) {
      clearTimeout(typingTimerRef.current)
    }
    typingTimerRef.current = setTimeout(() => {
      setShowTypingIndicator(true)
    }, TYPING_INDICATOR_DELAY)
  }, [])

  const clearTypingTimer = useCallback(() => {
    if (typingTimerRef.current) {
      clearTimeout(typingTimerRef.current)
      typingTimerRef.current = null
    }
    setShowTypingIndicator(false)
  }, [])

  const handleClose = useCallback(() => {
    setIsOpen(false)
    setIsExpanded(false)
  }, [])

  const handleExpand = useCallback(() => {
    setIsExpanded((prev) => !prev)
  }, [])

  const handleToggle = useCallback((event: React.MouseEvent) => {
    event.stopPropagation()
    event.preventDefault()
    setIsOpen((prev) => !prev)
  }, [])

  const stopStreaming = useCallback(() => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort()
      abortControllerRef.current = null
      streamingMessageIdRef.current = null
      setIsLoading(false)
      clearTypingTimer()
    }
  }, [clearTypingTimer])

  const submitMessage = useCallback(
    async (text: string) => {
      if (!text.trim() || isLoading) {
        return
      }

      const messageText = text.trim()

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          text: messageText,
          isUser: true,
        },
      ])
      setIsLoading(true)
      abortControllerRef.current = new AbortController()
      startTypingTimer()
      setIsExpanded(true)

      try {
        await sendMessageStream(
          messageText,
          getSessionId(),
          {
            onChunk: (chunk) => {
              resetTypingTimer()
              if (!streamingMessageIdRef.current) {
                const botMessageId = Date.now().toString()
                streamingMessageIdRef.current = botMessageId
                setMessages((prev) => [
                  ...prev,
                  {
                    id: botMessageId,
                    text: chunk,
                    isUser: false,
                  },
                ])
              } else {
                setMessages((prev) =>
                  prev.map((msg) =>
                    msg.id === streamingMessageIdRef.current
                      ? { ...msg, text: msg.text + chunk }
                      : msg,
                  ),
                )
              }
            },
            onDone: () => {
              streamingMessageIdRef.current = null
              abortControllerRef.current = null
              setIsLoading(false)
              clearTypingTimer()
            },
            onError: (error) => {
              if (error.name !== 'AbortError') {
                snackbar?.addMessage(error.message, { variant: 'error' })
                if (streamingMessageIdRef.current) {
                  setMessages((prev) =>
                    prev.map((msg) =>
                      msg.id === streamingMessageIdRef.current
                        ? {
                            ...msg,
                            text: 'Извините, что-то пошло не так. Попробуйте снова.',
                          }
                        : msg,
                    ),
                  )
                } else {
                  setMessages((prev) => [
                    ...prev,
                    {
                      id: Date.now().toString(),
                      text: 'Извините, что-то пошло не так. Попробуйте снова.',
                      isUser: false,
                    },
                  ])
                }
              }
              streamingMessageIdRef.current = null
              abortControllerRef.current = null
              setIsLoading(false)
              clearTypingTimer()
            },
          },
          abortControllerRef.current.signal,
        )
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : 'Unknown error'
        snackbar?.addMessage(errorMessage, { variant: 'error' })
        setIsLoading(false)
        clearTypingTimer()
      }
    },
    [
      isLoading,
      snackbar,
      getSessionId,
      startTypingTimer,
      resetTypingTimer,
      clearTypingTimer,
    ],
  )

  const router = useRouter()

  useEffect(() => {
    if (router) {
      setIsOpen(false)
    }
  }, [router])

  const value = useMemo<ChatContextValue>(
    () => ({
      messages,
      isLoading,
      showTypingIndicator,
      isOpen,
      isExpanded,
      setIsOpen,
      setIsExpanded,
      submitMessage,
      stopStreaming,
      handleClose,
      handleExpand,
      handleToggle,
      welcomeTitle: welcomeTitle || t('chat.welcomeTitle'),
      welcomeText: welcomeText || t('chat.welcomeText'),
      placeholder: placeholder || t('chat.placeholder'),
      initialMessage,
      initialMessageSetter,
    }),
    [
      messages,
      isLoading,
      showTypingIndicator,
      isOpen,
      isExpanded,
      submitMessage,
      stopStreaming,
      handleClose,
      handleExpand,
      handleToggle,
      welcomeTitle,
      welcomeText,
      placeholder,
      initialMessage,
      initialMessageSetter,
      t,
    ],
  )

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>
}
