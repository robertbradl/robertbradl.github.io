<script setup lang="ts">
import CategoryItem from '@/components/CategoryItem.vue'
import type { MdMod } from '@/types/md-module'
import { parsePosts } from '@/composables/usePosts'
import { Fa6FolderOpen } from 'vue-icons-plus/fa6'

const modules: Record<string, MdMod> = import.meta.glob<MdMod>('@/posts/**/*.md', { eager: true })
const categories = Object.entries(modules).reduce(
  (acc, [title, frontmatter]) => {
    if (!frontmatter.category) return acc
    for (const c of frontmatter.category) {
      if (!acc[c]) acc[c] = {}
      acc[c][title] = frontmatter
    }
    return acc
  },
  {} as Record<string, Record<string, MdMod>>,
)
function formatPosts(category: string) {
  return parsePosts(categories[category])
}

function getCategories() {
  return Object.keys(categories)
}
</script>
<template>
  <section class="category-list">
    <section v-for="entry in getCategories()" v-bind:key="entry">
      <div class="category-header">
        <Fa6FolderOpen />
        <h1 class="category-title">{{ entry }}</h1>
      </div>
      <CategoryItem
        v-for="p in formatPosts(entry)"
        :key="p.path"
        :to="p.path"
        :fm="p.fm"
        :slug="p.slug"
      />
    </section>
  </section>
</template>
<style scoped>
.category-header {
  display: flex;
  align-items: center;
  font-size: 2rem;
}
svg {
  width: 2rem;
  height: 2rem;
}

.category-title {
  padding: 0 0 0 2px;
}
</style>
