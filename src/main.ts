import './assets/main.css'
import 'highlight.js/styles/github-dark.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import PostView from './components/PostView.vue'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)
app.component('PostView', PostView)
app.mount('#app')
