<template>
  <div class="container">
    <div class="columns">
      <div class="column is-6 is-offset-3"><br>
        <h3 class="title is-3">Crear una cuenta</h3><hr>
        <form action="#" @submit.prevent=register>
          <div class="field">
            <label class="label">Nombre</label>
            <div class="control">
              <input class="input" type="text" placeholder="Ej: Enrique Rodríguez" v-model="name">
            </div>
          </div>
          <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input class="input" type="email" placeholder="Ej: enriquerod@gmail.com" v-model="email">
            </div>
          </div>
          <div class="field">
            <label class="label">Contraseña</label>
            <div class="control">
              <input class="input" type="password" v-model="password">
            </div>
          </div>
          <button type="submit" class="button is-primary">Registrarme</button>
        </form>
        <div class="notification is-danger" v-if="error">
          Primar lorem ipsum dolor sit amet, consectetur
          adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur.
        </div>
      </div>   
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      error: ''
    }
  },
  name: 'RegisterFunc',
  methods: {
    register() {
      if (this.name && this.email && this.password) {
        console.log("");
      }
      else {
        this.error = 'Prueba de nuevo '
      }
    }
  }
}
</script>

<style>
</style>