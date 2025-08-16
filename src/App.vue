<script setup lang="ts">
import { Fa6Github, Fa6Envelope, Fa6LinkedinIn, Fa6Terminal } from 'vue-icons-plus/fa6'
import { SiLemmy } from 'vue-icons-plus/si'
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { getTags, tagCount } from '@/composables/usePosts'

const isOpen = ref(false)
const toggleMenu = () => (isOpen.value = !isOpen.value)
const closeMenu = () => (isOpen.value = false)

const onKey = (e: KeyboardEvent) => {
  if (e.key === 'Escape') closeMenu()
}
onMounted(() => window.addEventListener('keydown', onKey))
onUnmounted(() => window.removeEventListener('keydown', onKey))
</script>

<template>
  <!-- Mobile top bar -->
  <div class="mobile-topbar">
    <button
      class="hamburger"
      :aria-expanded="isOpen ? 'true' : 'false'"
      aria-controls="leftnav"
      aria-label="Toggle menu"
      @click="toggleMenu"
    >
      <span class="hamburger-box" aria-hidden="true">
        <span class="hamburger-inner" :class="{ open: isOpen }"></span>
      </span>
    </button>
  </div>

  <!-- Left nav: fixed on desktop, off-canvas on mobile -->
  <header id="leftnav" class="leftnav" :class="{ open: isOpen }">
    <div class="top">
      <RouterLink to="/">
        <div class="title">
          <Fa6Terminal />
          <h1>robertbradl</h1>
        </div>
      </RouterLink>
      <p>Finding beauty in the dissonance.</p>
    </div>

    <div class="inner">
      <nav>
        <RouterLink to="/" @click="closeMenu">home</RouterLink>
        <RouterLink to="/categories" @click="closeMenu">categories</RouterLink>
        <RouterLink to="/archive" @click="closeMenu">archive</RouterLink>
        <RouterLink to="/about" @click="closeMenu">about</RouterLink>
      </nav>
    </div>

    <div class="bottom">
      <div class="bottom-buttons">
        <a
          href="https://github.com/robertbradl"
          aria-label="github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Fa6Github />
        </a>
        <a
          href="https://lemmy.ml/u/robertbradl"
          aria-label="lemmy"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiLemmy />
        </a>
        <a href="mailto:rb@cunnect.de" aria-label="mail" target="_blank" rel="noopener noreferrer">
          <Fa6Envelope />
        </a>
        <a
          href="https://www.linkedin.com/in/r-bradl-cunnect"
          aria-label="linkedin"
          target="_blank"
          rel="noopener noreferrer"
          ><Fa6LinkedinIn />
        </a>
      </div>
    </div>
  </header>

  <!-- Backdrop only when open -->
  <div class="backdrop" v-if="isOpen" @click="closeMenu"></div>

  <!-- Main + right sidebar -->
  <main>
    <RouterView />
  </main>
  <aside class="rightbar">
    <h3>tags</h3>
    <li v-for="entry in getTags()" v-bind:key="entry">{{ entry }} - {{ tagCount(entry) }}</li>
  </aside>
</template>

<style scoped>
/* Component-scoped styles kept to the hamburger/backdrop so they don’t fight global layout */

/* Mobile top bar */
:root {
  --topbar-h: 56px;
}

.mobile-topbar {
  position: sticky;
  top: 0;
  z-index: 30;
  display: none;
  background: var(--color-background, #111);
  color: var(--color-text, #fff);
}

@media (hover: hover) {
  a:hover {
    background-color: hsl(200, 100%, 70%, 0.3);
  }
}
.hamburger {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
  height: var(--topbar-h);
  padding: 0 1rem;
  background: transparent;
  color: inherit;
  border: 0;
  cursor: pointer;
}

.brand {
  font-weight: 600;
  font-size: 0.95rem;
}

/* Hamburger icon */
.hamburger-box {
  width: 24px;
  height: 16px;
  position: relative;
  display: inline-block;
}
.hamburger-inner,
.hamburger-inner::before,
.hamburger-inner::after {
  position: absolute;
  left: 0;
  right: 0;
  height: 2px;
  content: '';
  background: currentColor;
  transition:
    transform 0.2s ease,
    opacity 0.2s ease;
}
.hamburger-inner {
  top: 7px;
}
.hamburger-inner::before {
  top: -7px;
}
.hamburger-inner::after {
  top: 7px;
}
.hamburger-inner.open {
  transform: rotate(45deg);
}
.hamburger-inner.open::before {
  transform: translateY(7px) rotate(90deg);
}
.hamburger-inner.open::after {
  transform: translateY(-7px) rotate(90deg);
}

/* Backdrop sits below the drawer but above content */
.backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  z-index: 900;
}

.avatar {
  width: 100px;
}
/* On small screens, show the topbar and give the content a little breathing room */
@media (max-width: 1023.98px) {
  .mobile-topbar {
    display: block;
  }
  main,
  .rightbar {
    padding-top: calc(var(--topbar-h) + 1rem);
  }
}
</style>
