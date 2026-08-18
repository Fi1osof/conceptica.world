export interface Concept {
  id: string
  slug: string
  title: string
  description: string | null // SEO meta description
  intro: string | null // short text for cards/lists
  content: string // full content in markdown
  date: string // ISO date of publication
  author?: string
}
