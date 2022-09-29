<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="/">
    <img src="../../public/educatec-branding.png">
    <h3 class="title is-3">EducaTec</h3>
    </a>

    <a role="button" class="navbar-burger burger" :class="{'is-active': IsOpen}" @click.prevent="ToggleMenu" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu" :class="{'is-active': IsOpen}">
    <div class="navbar-start">
      <a class="navbar-item" href="/">
        Home
      </a>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Registrarse</strong>
          </a>
          <a class="button is-light">
            Iniciar Sesión
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
</template>

<script>
export default {
    data() {
        return{
            IsOpen: false
        }
    },
    methods: {
        ToggleMenu() {
            const status = !this.IsOpen
            this.IsOpen = status
        }
    }
}
</script>

<style>
</style>