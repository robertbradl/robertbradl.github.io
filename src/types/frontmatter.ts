export interface Frontmatter {
  layout?: string
  title: string
  description?: string
  image?: string | null
  category?: string[] | string
  tags?: string[]
  date?: string | number | Date
}
