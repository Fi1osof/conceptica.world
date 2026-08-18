import { Concept } from '@/pages/Concepts/interfaces'
import { KbConceptFragment } from 'src/gql/generated'

export function conceptToLovable(concept: KbConceptFragment): Concept {
  const {
    id,
    content,
    createdAt: date,
    description,
    intro,
    uri: slug,
    name: title,
  } = concept

  return {
    id,
    content: content || '',
    date: date instanceof Date ? date.toISOString() : date,
    description,
    intro,
    slug,
    title,
  }
}
