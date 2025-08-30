<script setup lang="ts">
import type { Frontmatter } from '@/types/frontmatter'

const { to, fm, slug } = defineProps<{
  to: string
  fm: Frontmatter
  slug?: string
}>()
</script>

<template>
  <article class="category-item">
    <RouterLink :to="to">
      <h3>{{ fm.title ?? slug }}</h3>
    </RouterLink>
  </article>
</template>

<style scoped>
.category-item {
  padding: 0 0 0 50px;
  border-left: 2px solid;
  underline: solid;
}
a {
  padding: 0;
}
</style>
