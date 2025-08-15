import 'vue-router'
import type { Frontmatter } from './frontmatter'

declare module 'vue-router' {
  interface RouteMeta {
    frontmatter?: Frontmatter
  }
}
