<script setup lang="ts">
import { tagCount } from '@/composables/usePosts'
const tag = defineModel('tag', { required: true, type: String })

let toggled = false
function toggle() {
  toggled = !toggled
}
</script>

<template>
  <button class="tag-button" @click="toggle">{{ tag }} - {{ tagCount(tag) }}</button>
</template>

<style scoped>
.tag-button {
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  display: block;

  font-family: monospace;
  font-size: 16px;
  color: var(--color-text);
  transition:
    color 0.15s ease,
    background-color 0.15s ease;
  cursor: pointer;
}
.tag-button:hover {
  background-color: hsl(200, 100%, 70%, 0.3);
  color: white;
}
</style>
