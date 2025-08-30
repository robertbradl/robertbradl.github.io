<script setup lang="ts">
import { tagCount } from '@/composables/usePosts'
const tag = defineModel('tag', { required: true, type: String })

let toggled = false
function toggle() {
  toggled = !toggled
}
</script>

<template>
  <button @click="toggle">{{ tag }} - {{ tagCount(tag) }}</button>
</template>

<style scoped></style>
