import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/components/HomePage'
import ContactUs from '@/components/ContactUs'
import AboutUs from '@/components/AboutUs'
import UsrLogin from '@/components/UserLogin'
import UsrDashboard from '@/components/UserDashboard'
import CourseList from '@/components/CourseList'
import IntroProgVariables from '@/courses/IntroProgVariables'
import IntroProgDecisiones from '@/courses/IntroProgDecisiones'
import IntroProgCiclos from '@/courses/IntroProgCiclos'
import IntroProgArreglos from '@/courses/IntroProgArreglos'
import IntroProgFunciones from '@/courses/IntroProgFunciones'
import IntroProgEstructuras from '@/courses/IntroProgEstructuras'
import { auth } from '@/firebase/init'
import QuizProg from '@/courses/QuizProg'
import store from '@/store/usr-store'

const routes = [
    { path: '/', component: HomePage },
    { path: '/contact', component: ContactUs },
    { path: '/about', component: AboutUs },
    { path: '/login', component: UsrLogin },
    { path: '/dashboard-usr', component: UsrDashboard, meta: { requiresAuth: true } },
    { path: '/course-list', component: CourseList, meta: { requiresAuth: true } },
    { path: '/courses/intro-prog/variables', component: IntroProgVariables, meta: { requiresAuth: true } },
    { path: '/courses/intro-prog/decisiones', component: IntroProgDecisiones, meta: { requiresAuth: true } },
    { path: '/courses/intro-prog/ciclos', component: IntroProgCiclos, meta: { requiresAuth: true } },
    { path: '/courses/intro-prog/arreglos', component: IntroProgArreglos, meta: { requiresAuth: true } },
    { path: '/courses/intro-prog/funciones', component: IntroProgFunciones, meta: { requiresAuth: true } },
    { path: '/courses/intro-prog/estructuras', component: IntroProgEstructuras, meta: { requiresAuth: true } },
    { path: '/quiz', component: QuizProg, meta: { requiresAuth: true } },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    if (to.path === '/login' && auth.currentUser && store.state.user) {
        next('/dashboard-usr')
        return;
    }

    if (to.matched.some(record => record.meta.requiresAuth) && !auth.currentUser) {
        next('/login')
        return;
    }
    next()
})

export default router