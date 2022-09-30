import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/components/HomePage'
import ContactUs from '@/components/ContactUs'
import AboutUs from '@/components/AboutUs'
import LoginNew from '@/components/LoginNew'

const routes = [
    { path: '/', component: HomePage },
    { path: '/contact', component: ContactUs },
    { path: '/about', component: AboutUs },
    { path: '/login', component: LoginNew }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router