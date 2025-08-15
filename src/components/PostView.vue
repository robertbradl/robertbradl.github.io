<script setup lang="ts">
const props = defineProps<{ frontmatter?: Record<string, unknown> }>()
</script>
<template>
  <article class="post-layout">
    <header v-if="props.frontmatter" class="post-heading">
      <h1>{{ (props.frontmatter as any).title }}</h1>
      <p v-if="(props.frontmatter as any).description">
        {{ (props.frontmatter as any).description }}
      </p>
    </header>

    <div class="markdown-body">
      <slot />
    </div>
  </article>
</template>
<style scoped>
.post-layout {
  font-family: 'Raleway', sans-serif;
  margin: 0 auto;
  padding: 2rem 1rem;
  max-width: 80ch;
}
.post-heading {
  border-bottom: #292929 1px solid;
  padding-bottom: 10px;
  margin-bottom: 20px;
}
.post-heading h1 {
  font-size: 2rem;
}

.post-title {
  font-size: 2rem;
  font-weight: 800;
  margin: 0 0 0.5rem;
}
.post-meta {
  color: #6b7280;
  margin-bottom: 0.75rem;
}
.post-desc {
  color: #374151;
  margin-bottom: 1.25rem;
}
:deep(.markdown-body p) {
  padding: 5px 0px 5px 0px;
}
:deep(.markdown-body :not(pre) > code) {
  background: #262626;
  border-radius: 5px;
  padding: 2px 5px 2px 5px;
  font-family: 'IBM Plex Mono', monospace;
}
</style>
