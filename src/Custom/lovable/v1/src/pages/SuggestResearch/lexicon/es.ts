import { LexiconObject } from 'src/Custom/Lexicon'

export const es: LexiconObject = {
  hero: {
    eyebrow: 'Sugerir investigación',
    title: `Describe la pregunta con tus propias palabras`,
    lead: `¿Tienes una pregunta que te ha estado molestando desde hace mucho tiempo? Algo que quieres entender pero aún no has encontrado una buena explicación? Cuéntaselo a nuestro agente de IA.`,
  },
  howToDescribe: {
    eyebrow: 'Cómo describir',
    title: 'No hay necesidad de buscar las palabras correctas',
    p1: 'No hay necesidad de buscar los términos correctos, elegir una categoría o intentar formular bellamente el tema. Simplemente explica <strong>con tus propias palabras</strong>:',
    guideList: [
      'lo que te interesa;',
      'lo que ya sabes o piensas sobre ello;',
      'qué exactamente no está claro para ti;',
      'por qué esta pregunta es importante para ti.',
    ],
    p2: 'El agente ayudará a aclarar el pensamiento si es necesario. Tu pregunta puede convertirse en el tema de una de las próximas investigaciones de Conceptica.',
  },
  form: {
    title: 'Describe la pregunta',
    hint: 'Los campos del formulario son un marcador de posición. La lógica de envío aparecerá más tarde. Por ahora, puedes escribir cualquier cosa.',
    messageLabel: 'Texto del mensaje',
    messagePlaceholder: `No sé cómo se llama esto correctamente, pero me ha interesado desde hace mucho tiempo…`,
    contactLabel: 'Contacto (opcional)',
    contactPlaceholder: 'telegram o email',
    hiddenSubject: 'Solicitud de investigación de tema',
    note: 'La respuesta suele llegar en unos pocos días.',
    submit: 'Enviar →',
  },
  whatHappensNext: {
    eyebrow: 'Qué sucede a continuación',
    title: 'De la pregunta a la investigación',
    steps: [
      {
        num: '01',
        title: 'Leemos las preguntas',
        text: 'Leemos las preguntas sugeridas y seleccionamos temas para investigaciones futuras entre ellas.',
      },
      {
        num: '02',
        title: 'Aclaramos el pensamiento',
        text: 'Si es necesario, el agente hace preguntas aclaratorias para entender mejor qué te interesa.',
      },
      {
        num: '03',
        title: 'Informamos sobre el resultado',
        text: 'Si dejaste una forma de contacto, te escribiremos cuando aparezca el material sobre el tema.',
      },
    ],
  },
  dontKnowHow: {
    eyebrow: `¿No sabes cómo formular?`,
    title: 'Simplemente escribe eso',
    blockquote: `No sé cómo se llama esto correctamente, pero me ha interesado desde hace mucho tiempo…`,
    p1: 'Eso es suficiente.',
  },
  cta: {
    card1: {
      title: 'Leer conceptos listos',
      text: 'Quizás un tema similar ya haya sido tratado — revisa la lista de conceptos.',
      link: 'Abrir conceptos →',
    },
    card2: {
      title: 'Apoyar el proyecto',
      text: 'Si quieres ayudar a Conceptica a existir y desarrollarse, el proyecto puede ser apoyado.',
      link: 'Apoyar →',
    },
  },
}
