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
        <input type="submit" value="Registrarse">
      </form>
      <form action="" class="login" @submit.prevent="login">
        <h2>Iniciar sesión</h2>
        <input type="email" placeholder="Dirección de email" v-model="login_form.email">
        <input type="password" placeholder="Contraseña" v-model="login_form.password">
        <input type="submit" value="Entrar">
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
.forms {
    display: flex;
    min-height: 100vh;
}

form {
   flex: 1 1 0%;
   padding: 8rem 1rem 1rem;
}

form.register {
    color: #FFF;
    background-color: rgb(5,126,225); 
    background-image: linear-gradient(
      to bottom right, 
      rgb(5,126,225) 0%,
      rgb(60, 28, 189) 100%
    );
}

h2 {
     font-size: 2rem;
     text-transform: uppercase;
     margin-bottom: 2rem; 

}

input {
   appearance: none;
   border: none;
   outline: none;
   background: none;

   display: block;
   width: 100%;
   max-width: 400px;
   margin: 0 auto;
   font-size: 1.5rem;
   margin-bottom: 2rem;
   padding: 0.5rem 0rem;
}

input:not([type="submit"]) {
    opacity: 0.8;
    transition: 0.4s;
}

input:focus:not([type="submit"]) {
     opacity: 1;
}

input::placeholder {
    color: inherit;
}

form.login input:not([type="submit"]) {
  color: #2c3e50;border-bottom: 2px solid #2c3e50;
}

form.login input[type="submit"] {
  background-color: rgb(5,126,225);
  color: #FFF;
  font-weight: 700;
  padding: 1rem 2rem;
  border-radius: 0.5rem; 
  cursor: pointer;
  text-transform: uppercase;

}

form.register input[type="submit"] {
  background-color: #FFF;
  color: rgb(5,126,225);
  font-weight: 700;
  padding: 1rem 2rem;
  border-radius: 0.5rem; 
  cursor: pointer;
  text-transform: uppercase;
}

form.register input:not([type="submit"]) {
  border-bottom: 2px solid #2c3e50;
}

</style>