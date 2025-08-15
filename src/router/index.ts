import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ArchiveView from '@/views/ArchiveView.vue'
import CategoryView from '@/views/CategoryView.vue'
import autoRoutes from 'virtual:generated-pages'

const manualRoutes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
  },
  {
    path: '/archive',
    name: 'archive',
    component: ArchiveView,
  },
  {
    path: '/categories',
    name: 'categories',
    component: CategoryView,
  },
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...manualRoutes, ...autoRoutes],
})

export default router
