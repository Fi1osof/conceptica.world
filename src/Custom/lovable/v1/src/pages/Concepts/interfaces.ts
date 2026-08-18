export interface Concept {
  id: string
  slug: string
  title: string
  description: string | null | undefined // SEO meta description
  intro: string | null | undefined // short text for cards/lists
  content: string // full content in markdown
  date: string // ISO date of publication
  author?: string
}
