<script setup lang="ts">
import PostCard from '@/components/PostCard.vue'
import type { Frontmatter } from '@/types/frontmatter'
import type { MdMod } from '@/types/md-module'

const modules = import.meta.glob('@/posts/**/*.md', { eager: true }) as Record<string, MdMod>

// pick the frontmatter fields off the module's named exports
function getFm(mod: MdMod): Frontmatter {
  const { title, description, date, tags, image, category } = mod as Record<string, unknown>

  const fm: Frontmatter = {}
  if (title !== undefined) fm.title = String(title)
  if (description !== undefined) fm.description = String(description)
  if (date !== undefined) fm.date = date as any
  if (Array.isArray(tags)) fm.tags = tags as string[]
  if (image !== undefined && image !== null) fm.image = String(image)
  if (Array.isArray(category)) fm.category = category as string[]
  else if (typeof category === 'string') fm.category = category
  // layout is optional; include if you care:
  // if (layout) (fm as any).layout = String(layout)
  return fm
}

function toTs(d: Frontmatter['date']): number {
  if (!d) return 0
  if (typeof d === 'number') return d
  if (d instanceof Date) return d.getTime()
  // Normalize "YYYY-MM-DD HH:mm +0200" → "YYYY-MM-DDTHH:mm:00 +02:00"
  let s = String(d).trim()
  const m = s.match(/^(\d{4}-\d{2}-\d{2})[ T](\d{2}:\d{2})(?::\d{2})?\s+([+-]\d{2}:?\d{2})$/)
  if (m) s = `${m[1]}T${m[2]}:00 ${m[3].replace(/(\d{2})(\d{2})$/, '$1:$2')}`
  const t = Date.parse(s)
  return Number.isNaN(t) ? 0 : t
}

const posts = Object.entries(modules)
  .map(([file, mod]) => {
    const slug = file.replace('/src/posts/', '').replace(/\.md$/, '')
    const fm = getFm(mod)
    return { path: `/blog/${slug}`, slug, fm, ts: toTs(fm.date) }
  })
  .sort((a, b) => b.ts - a.ts)
</script>
<template>
  <section class="post-list">
    <PostCard v-for="p in posts" :key="p.path" :to="p.path" :fm="p.fm" :slug="p.slug" />
  </section>
</template>
<style scoped>
.post-list {
  display: flex;
  gap: 1.25rem;
  flex-direction: column;
}
</style>
