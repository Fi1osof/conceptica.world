import { LexiconObject } from 'src/Custom/Lexicon'

export const es: LexiconObject = {
  block: {
    hero: {
      eyebrow: 'Conceptica',
      title: '¿Qué quieres entender?',
      subtitle:
        'Pregunta con tus propias palabras. El agente de IA descubrirá lo que ya entiendes y construirá un camino corto hacia el nuevo entendimiento — sin pasos innecesarios.',
      searchPlaceholder: 'Por ejemplo: "¿por qué no me entienden?"',
      searchButton: 'Preguntar ✦',
      conceptsButton: 'Ver conceptos →',
    },
    howItWorks: {
      eyebrow: 'Cómo funciona',
      title: '¿No conoces las palabras correctas? No las necesitas',
      lead: 'El aprendizaje tradicional comienza con los términos de otros. Aquí es lo contrario: primero tu entendimiento, luego las palabras para él.',
      steps: [
        {
          title: 'Preguntas con tus propias palabras',
          text: 'Sin terminología o "prompts correctos" necesarios. Solo una frase sobre lo que te confunde.',
        },
        {
          title: 'El agente descubre lo que ya entiendes',
          text: 'Encuentra apoyo en lo que ya tienes en la cabeza, en lugar de comenzar la explicación desde cero.',
        },
        {
          title: 'Se construye un camino mínimo',
          text: 'Solo los pasos sin los cuales el nuevo entendimiento no puede ensamblarse. Lo innecesario se descarta.',
        },
        {
          title: 'Los términos vienen al final',
          text: 'Cuando el entendimiento ya está ensamblado, las palabras aceptadas se convierten en etiquetas, no en barreras.',
        },
      ],
    },
    twoPaths: {
      title: 'Dos escenarios',
      card1: {
        icon: '✦',
        heading: 'Quiero entender algo',
        text: 'Haz una pregunta con tus propias palabras. El agente de IA seleccionará un concepto y ensamblará una explicación corta para ti.',
        button: 'Preguntar al agente de IA ✦',
      },
      card2: {
        icon: '❏',
        heading: 'Quiero ver ideas',
        text: 'Desplázate por los conceptos listos — cada uno toma un par de minutos. Agradable, como hojear un libro al azar.',
        button: 'Ver conceptos →',
      },
    },
    suggestResearchCta: {
      title: '¿No encontraste lo que te interesa?',
      text: 'Sugiere un tema — y quizás el próximo concepto en Conceptica sea sobre él.',
      button: 'Sugerir investigación ✦',
    },
    aboutBlock: {
      eyebrow: 'Sobre el proyecto',
      title: '¿Qué es Conceptica?',
      body: 'Conceptica es un intento de cambiar la forma en que aprendemos. No repetir las explicaciones de otros, sino descubrir lo que una persona ya entiende y construir lo que falta. Publicamos conceptos — textos cortos sobre ideas que cambian la forma de ver lo familiar — y hacemos un agente de IA que construye ese camino personalmente para ti.',
      button: 'Más sobre el proyecto →',
    },
  },
}
