import 'vue-router'

export type Frontmatter = {
  title?: string
  description?: string
  date?: string | number | Date
  tags?: string[]
  image?: string
  category?: string
  // add any custom fields here
}

declare module 'vue-router' {
  // This augments the built-in RouteMeta
  interface RouteMeta {
    frontmatter?: Frontmatter
  }
}
