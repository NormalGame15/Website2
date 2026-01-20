import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import GamesView from './views/GamesView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomeView },      // หน้าหลัก (http://localhost:5173/)
    { path: '/games', component: GamesView } // หน้าเกม (http://localhost:5173/games)
  ]
})

export default router