<script setup lang="ts">
import PostCard from '@/components/PostCard.vue'
import type { MdMod } from '@/types/md-module'
import { parsePosts } from '@/composables/usePosts'

const modules = import.meta.glob<MdMod>('@/posts/**/*.md', { eager: true })
const posts = parsePosts(modules)
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
