import { createStore } from "vuex";
import router from '@/routes/index'
import { auth } from '../firebase/init.adm'
import { createUserWithEmailAndPassword, deleteUser, signInWithEmailAndPassword, signOut } from "firebase/auth";


export default createStore({
    state: {
        user: null
    },
    mutations: {
        SET_USER (state, user) {
            state.user= user
        },

        CLEAR_USER (state) {
            state.user = null
        }
    },
    actions: {
        async login ({commit}, details) {
            const { email, password } = details
            try{
                await signInWithEmailAndPassword(auth, email, password)
            }
            catch (error) {
                switch(error.code) {
                    case 'auth/user-not-found':
                        alert("Usuario no encontrado")
                        break
                    case 'auth/wrong-password':
                        alert("Contraseña incorrecta")
                        break
                    default:
                        alert ( "Algo salió mal " )
                }
                return
            }

            commit('SET_USER', auth.currentUser)

            router.push('/dashboard-adm')
        },
     
        async deleteUser(user) {
            try{
                await deleteUser(user)
            }
            finally{
                alert("Usuario borrado")
            }
        },

        async createUser(user) {
            try{
                await createUserWithEmailAndPassword(user)
            }
            finally{
                alert("Usuario creado")
            }
        },

        async logout ({commit}) {
            await signOut(auth)

            commit('CLEAR_USER')
            router.push('/login')

        },
        
        fetchUser ({ commit }){
         auth.onAuthStateChanged(async user => { 
            if (user === null){ 
                commit('CLEAR_USER')
             } else {
                commit('SET_USER', user)
                if (router.isReady() && router.currentRoute.value.path === '/login-adm' ) {
                    router.push('/dashboard-adm')
                }
            } 
         })   
        }
    }
})