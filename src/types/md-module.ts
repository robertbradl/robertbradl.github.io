import type { Component } from 'vue'
import type { Frontmatter } from './frontmatter'

export type MdMod = Frontmatter & {
  default: Component
}
