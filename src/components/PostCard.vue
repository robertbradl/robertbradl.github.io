<script setup lang="ts">
import { Fa6CalendarDays, Fa6FolderOpen } from 'vue-icons-plus/fa6'
import type { Frontmatter } from '@/types/frontmatter'

const { to, fm, slug } = defineProps<{
  to: string
  fm: Frontmatter

  slug?: string
}>()

function formatDate(input?: string | number | Date): string {
  if (!input) return ''
  const d = new Date(input)
  return Number.isNaN(d.getTime())
    ? ''
    : new Intl.DateTimeFormat(undefined, {
        year: 'numeric',
        month: 'short',
        day: '2-digit',
      }).format(d)
}
</script>
<template>
  <article class="post-card">
    <RouterLink :to="to" class="block">
      <figure v-if="fm.image" class="post-cover">
        <img :src="fm.image" :alt="fm.title ?? slug ?? 'Post cover'" />
      </figure>

      <h2 class="post-title">{{ fm.title ?? slug }}</h2>

      <p v-if="fm.description" class="post-desc">
        {{ fm.description }}
      </p>
      <div class="post-meta">
        <div class="meta-container">
          <Fa6CalendarDays />
          <time v-if="fm.date">{{ formatDate(fm.date) }}</time>
        </div>
        <div class="meta-container">
          <Fa6FolderOpen />
          <span v-if="fm.category">
            {{ Array.isArray(fm.category) ? fm.category.join(', ') : fm.category }}
          </span>
        </div>
      </div>
    </RouterLink>
  </article>
</template>
<style scoped>
.post-card {
  border-radius: 0.75rem;
  border: #292929 2px solid;
  overflow: hidden;
  background: #1e1e1e;
  color: #fff;
  font-family: 'Raleway', sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
}
@media (hover: hover) {
  .post-card:hover {
    background: #262626;
  }
}
.post-cover {
  aspect-ratio: 16/9;
  background: #f3f4f6;
}
.post-cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.post-title {
  font-weight: 700;
  font-size: 1.125rem;
  margin: 0.75rem 1rem 0;
}
.post-meta {
  display: flex;
  align-items: center;
  color: #6b7280;
  margin: 0.25rem 1rem 0.5rem;
  font-size: 0.875rem;
}
.meta-container {
  display: flex;
  align-items: center;
  margin-right: 1rem;
}

.post-desc {
  margin: 0 0.75rem 0.75rem 1rem;
  color: #6b7280;
}
.tags {
  margin: 0 1rem 0.75rem;
  font-size: 0.8rem;
  color: #4b5563;
}
.tag {
  margin-right: 0.5rem;
}
.read-more {
  display: flex;
  gap: 10px;
  font-weight: 600;
  margin: 0 1rem 1rem;
}
</style>
