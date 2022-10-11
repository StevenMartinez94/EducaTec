import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/components/HomePage'
import ContactUs from '@/components/ContactUs'
import AboutUs from '@/components/AboutUs'
import UsrLogin from '@/components/UserLogin'
import UsrDashboard from '@/components/UserDashboard'
import CourseList from '@/components/CourseList'
import IntroProg from '@/courses/IntroProg'
import { auth } from '@/firebase/init'

const routes = [
    { path: '/', component: HomePage },
    { path: '/contact', component: ContactUs },
    { path: '/about', component: AboutUs },
    { path: '/login', component: UsrLogin },
    { path: '/dashboard-usr', component: UsrDashboard, meta: {requiresAuth: true}},
    { path: '/course-list', component: CourseList},
    { path: '/courses/intro-prog', component: IntroProg}
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