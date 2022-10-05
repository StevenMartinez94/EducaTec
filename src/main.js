import { createApp } from 'vue'
import App from './App.vue'
import router from '@/routes'
import store from './store/usr-store'

const Educatec = createApp(App)
Educatec.use(router)
Educatec.use(store)
Educatec.mount('#app')
