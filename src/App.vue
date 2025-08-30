<script setup lang="ts">
import LeftBar from '@/components/LeftBar.vue'
import RightBar from '@/components/RightBar.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <LeftBar />
  <main>
    <RouterView />
  </main>
  <RightBar />
</template>

<style scoped>
/* On small screens, show the topbar and give the content a little breathing room */
@media (max-width: 1023.98px) {
  main {
    padding-top: calc(var(--topbar-h) + 1rem);
  }
}
</style>
