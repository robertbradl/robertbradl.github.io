import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import Markdown from 'unplugin-vue-markdown/vite'
import Pages from 'vite-plugin-pages'
import hljs from 'highlight.js'

// https://vite.dev/config/
export default defineConfig({
  base: '/robertbradl.github.io/',
  plugins: [
    vue({ include: [/\.vue$/, /\.md$/] }),
    vueDevTools(),
    Markdown({
      exposeFrontmatter: true,
      exportFrontmatter: true,
      headEnabled: false,
      wrapperComponent: 'PostView',
      markdownItSetup(md) {
        md.set({ langPrefix: 'language-' })

        md.set({
          highlight: function (str, lang) {
            if (lang && hljs.getLanguage(lang)) {
              try {
                const html = hljs.highlight(str, { language: lang, ignoreIllegals: true }).value
                // Many hljs themes target the .hljs class; add it on <pre>
                return `<pre class="hljs"><code class="language-${lang}">${html}</code></pre>`
              } catch {
                /* fall through */
              }
            }
            // Fallback: escape and still wrap so it gets base styling
            const escaped = md.utils.escapeHtml(str)
            return `<pre class="hljs"><code>${escaped}</code></pre>`
          },
        })
      },
    }),
    Pages({
      dirs: [{ dir: 'src/posts/', baseRoute: 'blog' }],
      extensions: ['vue', 'md'],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
