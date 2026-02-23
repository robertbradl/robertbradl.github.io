<script setup lang="ts">
import { tagCount } from '@/composables/usePosts'

const props = defineProps<{
  tag: string
  active?: boolean
}>()

const emit = defineEmits<{
  (e: 'select', tag: string): void
}>()
</script>

<template>
  <button
    type="button"
    class="tag-button"
    :class="{ active: props.active }"
    @click="emit('select', props.tag)"
  >
    {{ props.tag }} - {{ tagCount(props.tag) }}
  </button>
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
.tag-button.active {
  color: hsl(200, 100%, 70%);
  text-decoration: underline;
}
</style>
