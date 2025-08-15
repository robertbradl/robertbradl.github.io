import type { Component } from 'vue'
import type { Frontmatter } from './frontmatter'

export type MdMod = {
  default: Component
} & Frontmatter
