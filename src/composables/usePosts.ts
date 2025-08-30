import type { MdMod } from '@/types/md-module'
import type { Frontmatter } from '@/types/frontmatter'

const modules: Record<string, MdMod> = import.meta.glob<MdMod>('@/posts/**/*.md', { eager: true })
const tagList = Object.entries(modules).reduce(
  (acc, [post, frontmatter]) => {
    if (!frontmatter.tags) return acc
    for (const tag of frontmatter.tags) {
      if (!acc[tag]) acc[tag] = {}
      acc[tag][post] = frontmatter
    }
    return acc
  },
  {} as Record<string, Record<string, MdMod>>,
)

function toTs(d: Frontmatter['date']): number {
  if (!d) return 0
  if (typeof d === 'number') return d
  if (d instanceof Date) return d.getTime()
  return Date.parse(d)
}

export function getTags() {
  return Object.keys(tagList)
}

export function tagCount(tag: string) {
  return Object.keys(tagList[tag]).length
}

export function parsePosts(modules: Record<string, MdMod>) {
  return Object.entries(modules)
    .map(([file, mod]: [string, MdMod]) => {
      const slug = file.replace('/src/posts/', '').replace(/\.md$/, '')
      const fm: Frontmatter = {
        layout: mod.layout,
        title: mod.title,
        description: mod.description,
        image: mod.image,
        category: mod.category,
        tags: mod.tags,
        date: mod.date,
      }
      return { path: `/blog/${slug}`, slug, fm, ts: toTs(fm.date) }
    })
    .sort((a, b) => b.ts - a.ts)
}
