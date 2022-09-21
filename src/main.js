import { createApp } from 'vue'
import App from './App.vue'
import HomePage from '@/components/HomePage'
import ContactUs from '@/components/ContactUs'
import AboutUs from '@/components/AboutUs'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { path: '/', component: HomePage },
    { path: '/contact', component: ContactUs },
    { path: '/about', component: AboutUs }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

const Educatec = createApp(App)
Educatec.use(router)
Educatec.mount('#app')
