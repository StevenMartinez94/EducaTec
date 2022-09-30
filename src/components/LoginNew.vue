<template>
  <header>
    <div class="container">
        <img src="../../public/educatec-branding.png">
        <h1>EducaTec</h1>
        <input type="checkbox" id="menu-bar">
        <label class="icon-menu" for="menu-bar"></label>
        <nav class='menu'>
            <a href="./">Inicio</a>
            <a href="">Cursos</a>
            <a href="./about">Acerca de nosotros</a>
            <a href="./contact">Contáctanos</a>
        </nav>
    </div>
  </header>
  <main class="login">
    <section class="forms">
      <form action="" class="register" @submit.prevent="register">
        <h2>Registro</h2>
        <input type="email" placeholder="Dirección de email" v-model="register_form.email">
        <input type="password" placeholder="Contraseña" v-model="register_form.password">
        <input type="submit" value="Register">
      </form>
      <form action="" class="login" @submit.prevent="login">
        <h2>Iniciar sesión</h2>
        <input type="email" placeholder="Dirección de email" v-model="login_form.email">
        <input type="password" placeholder="Contraseña" v-model="login_form.password">
        <input type="submit" value="Login">
      </form>
    </section>
  </main>
</template>

<script>
  import {ref} from 'vue'
  import {useStore} from 'vuex'
  export default {
    setup () {
      const login_form = ref({})
      const register_form = ref({})
      const store = useStore()

      const login = () => {
        store.dispatch('login', login_form.value)
      }

      const register = () => {
        store.dispatch('register', register_form.value)
      }      

      return {
        login_form,
        register_form,
        login,
        register
      }
  }
}
</script>

<style>
</style>