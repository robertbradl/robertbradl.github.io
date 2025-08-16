import type { MdMod } from '@/types/md-module'

const modules: Record<string, MdMod> = import.meta.glob<MdMod>('@/posts/**/*.md', { eager: true })
const tagList = Object.entries(modules).reduce(
  (acc, [post, frontmatter]) => {
    if (!frontmatter.tags) return acc
    for (const tag of frontmatter.tags) {
      ;(acc[tag] ??= []).push([post, frontmatter])
    }
    return acc
  },
  {} as Record<string, Array<[string, MdMod]>>,
)

export function logModules() {
  console.log(modules)
  for (const m in modules) {
    console.log(modules[m].tags)
  }
}

export function getTags() {
  return Object.keys(tagList)
}

export function tagCount(tag: string) {
  return tagList[tag].length
}
