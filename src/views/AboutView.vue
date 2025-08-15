<script setup lang="ts">
import { Fa6AngleRight } from 'vue-icons-plus/fa6'
</script>
<template>
  <div class="about">
    <header>
      <div class="icon-header">
        <Fa6AngleRight />
        <h1>about me</h1>
      </div>
      <p>A quick overview of who I am, what I do, some of my projects and what I like.</p>
    </header>
    <div>
      <h2>who am i</h2>
      <p>
        I’m Robert Bradl, a developer based in Jena, Germany. I’m currently studying Computer
        Science and Economics at FSU Jena. Alongside my studies, I work as a Software and DevOps
        engineer at <a href="https://cunnect.de/en/">cunnect GmbH</a>.
      </p>
      <p>
        While I’m generally language-agnostic, I feel most at home working with
        <code class="code-ts">TypeScript</code> and <code class="code-rs">Rust</code>. In my free
        time, I enjoy building small projects and games—sometimes for university, but often just for
        fun.
      </p>
    </div>
  </div>
</template>

<style scoped>
.about {
  font-family: 'Raleway', sans-serif;
  margin: 0 auto;
  padding: 2rem 1rem;
  max-width: 80ch;
}

.icon-header {
  display: flex;
  align-items: center;
  gap: 5px;
}

header {
  border-bottom: #292929 1px solid;
  padding-bottom: 10px;
  margin-bottom: 20px;
}
h1 {
  font-size: 2rem;
}
.code-ts {
  background: #3878c6;
  border-radius: 5px;
  border-color: #73a0d7;
  border-style: solid;
  border-width: 2px;
  padding: 1px 5px 1px 5px;
  font-family: 'IBM Plex Mono', monospace;
}
.code-rs {
  background: #ff6666;
  border-radius: 5px;
  border-color: #ffb3b3;
  border-style: solid;
  border-width: 2px;
  padding: 1px 5px 1px 5px;
  font-family: 'IBM Plex Mono', monospace;
}
</style>
