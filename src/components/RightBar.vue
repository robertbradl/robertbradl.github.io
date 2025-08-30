<script setup lang="ts">
import { getTags, tagCount } from '@/composables/usePosts'
import TagButton from '@/components/TagButton.vue'
</script>
<template>
  <aside class="rightbar">
    <h3>tags</h3>
    <TagButton v-for="entry in getTags()" v-bind:key="entry" v-bind:tag="entry" />
    <li v-for="entry in getTags()" v-bind:key="entry">{{ entry }} - {{ tagCount(entry) }}</li>
  </aside>
</template>
<style scoped>
.rightbar {
  position: sticky;
  top: 0;
  align-self: start;
  height: calc(100vh - 2 * var(--page-pad));
  overflow: auto;
  padding-left: 0.5rem;
  border-left: 1px solid rgba(0, 0, 0, 0.08);
}
@media (max-width: 1023.98px) {
  .rightbar {
    position: static;
    height: auto;
    border-left: none;
    border-top: 1px solid rgba(0, 0, 0, 0.08);
    padding-top: calc(var(--topbar-h) + 1rem);
  }
}
</style>
