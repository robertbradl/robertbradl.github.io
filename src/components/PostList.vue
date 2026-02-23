<script setup lang="ts">
import PostCard from '@/components/PostCard.vue'
import type { MdMod } from '@/types/md-module'
import { parsePosts } from '@/composables/usePosts'
import { computed } from 'vue'
import { useTagFilterStore } from '@/stores/tagFilter'

const filter = useTagFilterStore()

const modules = import.meta.glob<MdMod>('@/posts/**/*.md', { eager: true })
const allPosts = computed(() => parsePosts(modules))

const filteredPosts = computed(() => {
  const tag = filter.selectedTag
  if (!tag) return allPosts.value
  return allPosts.value.filter((p) => p.fm.tags?.includes(tag))
})
</script>
<template>
  <section class="post-list">
    <PostCard v-for="p in filteredPosts" :key="p.path" :to="p.path" :fm="p.fm" :slug="p.slug" />
  </section>
</template>
<style scoped>
.post-list {
  display: flex;
  gap: 1.25rem;
  flex-direction: column;
}
</style>
