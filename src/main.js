import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router/router'
import './assets/main.css'

// 1. Buat instance
const app = createApp(App)

// 2. Tambahkan plugin (router, pinia/vuex, dll)
app.use(router)
// app.use(store) kalau kamu pakai state management

// 3. Mount terakhir
app.mount('#app') // Harus selalu paling akhir di main.js setelah semua plugin dan konfigurasi (seperti router, store, dll) sudah di-use() ke instance app-nya.
