import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/components/HomePage'
import ContactUs from '@/components/ContactUs'
import AboutUs from '@/components/AboutUs'
import LoginNew from '@/components/LoginNew'
import { auth } from '../firebase'

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

router.beforeEach((to, from, next)=> { 
  if (to.path === '/login' && auth.currentUser) {
     next('/')
     return; 
   }

   if (to.matched.some(record =>record.meta.requiresAuth) && !auth.currentUser) {
    next('/login')
    return;
   } 
})

export default router