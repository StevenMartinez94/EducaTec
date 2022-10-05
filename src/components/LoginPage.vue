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
      <form action="" class="register">
        <a href="./login-usr">
            <input type="submit" value="Click aquí para acceso de Usuario">
            <img src="../../public/user-icon.png" alt="">
        </a>
      </form>
      <form action="" class="login" @submit.prevent="login">
        <a href="./login-adm"> 
            <h2>Click aquí para acceso de Administrador</h2>
            <img src="../../public/adm-icon.png" alt="">
        </a>
        </form>
    </section>
  </main>
</template>

<script>
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
</style>