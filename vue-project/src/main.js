import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router' // <--- เช็คว่าชื่อไฟล์ตรงไหม (router.js หรือ router/index.js)

const app = createApp(App)

app.use(router) // <--- ต้องมีบรรทัดนี้ก่อน mount

app.mount('#app')