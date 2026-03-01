import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GamesView from '../views/ProductView.vue'
import GamesType from '../views/AboutView.vue'
import AboutView from '../views/ContactUsView.vue'
import LogIn from '../views/LogIn.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomeView },
    { path: '/games', component: GamesView },
    { path: '/gamestype', component: GamesType },
    { path: '/aboutus', component: AboutView },
    { path: '/login', component: LogIn }
  ]
})

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LogIn.vue')
  },
]

export default router