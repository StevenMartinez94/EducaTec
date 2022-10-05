import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/components/HomePage'
import ContactUs from '@/components/ContactUs'
import AboutUs from '@/components/AboutUs'
//import LoginPage from '@/components/LoginPage'
import UsrLogin from '@/components/UserLogin'
//import AdmLogin from '@/components/AdmLogin'
import UsrDashboard from '@/components/UserDashboard'
import AdmDashboard from '@/components/AdmDashboard'
import CourseList from '@/components/CourseList'
import { auth } from '@/firebase/init'

const routes = [
    { path: '/', component: HomePage },
    { path: '/contact', component: ContactUs },
    { path: '/about', component: AboutUs },
    //{ path: '/login', component: LoginPage },
    { path: '/login', component: UsrLogin },
    //{ path: '/login-adm', component: AdmLogin },
    { path: '/dashboard-usr', component: UsrDashboard, meta: {requiresAuth: true}},
    { path: '/dashboard-adm', component: AdmDashboard, meta: {requiresAuth: true}},
    { path: '/course-list', component: CourseList, meta: {requiresAuth: true}}
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next)=> { 
  if (to.path === '/login' && auth.currentUser) {
     next('/dashboard-usr')
     return; 
   }

   if (to.matched.some(record =>record.meta.requiresAuth) && !auth.currentUser) {
    next('/login')
    return;
   }
   next()
})

export default router