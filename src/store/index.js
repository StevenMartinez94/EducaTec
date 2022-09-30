import { createStore } from "vuex";
import router from '@/routes/index'
import { auth } from '../firebase/init'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";


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

            router.push('/')
        },

        async register ({commit}, details) {
            const { email, password } = details
            try{
                await createUserWithEmailAndPassword(auth, email, password)
            }
            catch (error) {
                switch ( error.code ) {
                    case 'auth/email-already-in-use' :
                      alert ( "Ese email está en uso" )
                     break
                    case 'auth/invalid-email' :
                      alert ( "Email inválido" )
                      break
                    case 'auth/operation-not-allowed' :
                      alert ( "Operación no permitida" )
                      break
                    case 'auth/weak-password':
                      alert ( "Prueba con una contraseña más robusta" )
                      break
                   default:
                      alert ( "Algo salió mal" )

                return
            }}

            commit('SET_USER', auth.currentUser)

            router.push('/')
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
             } else {commit('SET_USER')
               if (router.isReady() && router.currentRoute.value.path === '/login' ) {
                router.push('/')
               }
            } 
         })   
        }

    }
})