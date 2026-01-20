import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router' // 1. Import router เข้ามา

const app = createApp(App)
app.use(router)             // 2. สั่งให้ใช้ router
app.mount('#app')