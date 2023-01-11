<template>
  <header>
    <div class="container">
      <img src="../../public/educatec-branding.png" />
      <h1>EducaTec</h1>
      <input type="checkbox" id="menu-bar" />
      <label class="icon-menu" for="menu-bar"></label>
      <nav class="menu">
        <router-link to="./">Inicio</router-link>
        <router-link to="./login">Cursos</router-link>
        <router-link to="./about">Acerca de nosotros</router-link>
        <router-link to="./contact">Contáctanos</router-link>
      </nav>
    </div>
  </header>
  <main>
    <section id="banner">
      <img src="../../public/banner.png" />
      <div class="container">
        <h2>¡No le pongas límites a tu educación!</h2>
        <p>
          EducaTec te ofrece la mejor educación acerca de las más interesantes
          tecnologías
        </p>
        <router-link to="">Leer más</router-link>
      </div>
    </section>

    <section id="welcome">
      <h2>¿Deseas prepararte para trabajar en el área de tecnología?</h2>
      <p>
        EducaTec, como plataforma educativa, ofrece una serie de módulos de
        aprendizaje que permiten desarrollar conocimientos referentes a las
        áreas más demandadas dentro de las aclamadas Tecnologías de La
        Información y la Comunicación (TICs), esto con el objetivo de
        desarrollar los conocimientos que servirán como base para los futuros
        profesionales del mañana.
      </p>
    </section>

    <section id="presentation">
      <h3>¿Qué ofrecemos?</h3>
      <div class="container">
        <router-link to="/login">
          <img src="../../public/programming-img.jpg" />
          <!--<a class="centered" href="">Leer más</a> -->
          <h4>Estudia Programación</h4>
        </router-link>
        <router-link to="/login">
          <img src="../../public/db-img.jpeg" />
          <!--<a class="centered" href="">Leer más</a> -->
          <h4>Estudia Bases de Datos</h4>
        </router-link>
        <router-link to="/login">
          <img src="../../public/ciber-img.jpeg" />
          <!--<a class="centered" href="">Leer más</a> -->
          <h4>Estudia Ciberseguridad</h4>
        </router-link>
      </div>
    </section>
    <section id="info">
      <h3>
        En EducaTec creemos inherentemente en el potencial de la juventud para
        liderar la industria tecnológica de las próximas décadas.
      </h3>
      <div class="container">
        <article class="info-course">
          <img src="../../public/it-mac.jpg" />
          <h4>¡Conviértete en un profesional de TI!</h4>
        </article>
        <div class="info-course">
          <img src="../../public/team.jpg" />
          <h4>¡Elabora soluciones con tu equipo de trabajo!</h4>
        </div>
        <div class="info-course">
          <img src="../../public/dedicate.jpg" />
          <h4>¡Dedícate al área de TI que te apasione!</h4>
        </div>
        <div class="info-course">
          <img src="../../public/internet.png" />
          <h4>Contribuye al desarrollo del internet</h4>
        </div>
      </div>
    </section>
  </main>

  <footer>
    <div class="container">
      <p class="copyright">EducaTec &copy; 2022</p>
      <div class="social-media">
        <router-link to="">
          <img src="../../public/fb-logo.png" />
        </router-link>
        <router-link to="">
          <img src="../../public/ig-logo.png" />
        </router-link>
        <router-link to="">
          <img src="../../public/twitter-logo.png" />
        </router-link>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Courier New", Courier, monospace;
}

header {
  width: 100%;
  height: 50px;
  background: #333;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100%;
}

.container {
  width: 98%;
  margin: auto;
}

h1 {
  float: left;
  padding-top: 7px;
}

header .container {
  display: table;
}

header img {
  float: left;
  padding-top: 8px;
  padding-right: 3px;
}

header h1 {
  margin-top: -3px;
}

#menu-bar {
  display: none;
}

header label {
  float: right;
  font-size: 28px;
  margin: 6px, 0;
  cursor: pointer;
}

.menu {
  position: absolute;
  top: 50px;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(51, 51, 51, 0.9);
  transition: all 0.5s;
  transform: translateX(-100%);
}

.menu a {
  display: block;
  color: #fff;
  height: 50px;
  text-decoration: none;
  padding: 15px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
}

.menu a:hover {
  background: rgba(255, 255, 255, 0.3);
}

#menu-bar:checked ~ .menu {
  transform: translateX(0%);
}

@media (min-width: 1024px) {
  .menu {
    position: static;
    width: auto;
    height: auto;
    transform: translateX(0%);
    float: right;
    display: flex;
  }

  .menu a {
    border: none;
  }

  header label {
    display: none;
  }
}

section {
  width: 100%;
  margin-bottom: 25px;
}

#welcome {
  text-align: center;
}

#welcome p {
  margin-left: 50px;
  margin-right: 50px;
}

#banner {
  position: relative;
}

#banner .container p{
  margin-top: -25px;
}

#banner img {
  width: 100%;
  height: 100%;
}

#banner .container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(50%);
  color: #fff;
}

#banner h2 {
  font-size: 28px;
}

#banner a {
  display: block;
  width: 100px;
  color: #fff;
  text-decoration: none;
  padding: 7px;
  margin-top: 10px;
  border: 3px solid #fff;
}

#banner a:hover {
  background: rgba(51, 51, 51, 0.5);
}

@media (min-width: 480px) {
  #banner h2 {
    font-size: 40px;
  }

  #banner a {
    margin-top: 25px;
  }
}

@media (min-width: 768px) {
  #banner {
    height: 300px;
    overflow: hidden;
  }

  #banner img {
    height: 600px;
    margin-top: -100px;
  }
}

@media (min-width: 1024px) {
  #banner img {
    margin-top: -200px;
  }
}

#presentation h3,
h4 {
  text-align: center;
}

#presentation .container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

#presentation .container a {
  margin: 15px;
}

#presentation .container a img {
  width: 100%;
  max-width: 280px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

#presentation .container h4 {
  color: #333;
}

#presentation .container a img:hover {
  opacity: 0.2 !important;
  transition: opacity 0.4s;
}

#info {
  background: #333;
  color: #fff;
  text-align: center;
  padding: 20px;
}

#info .container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.info-course {
  margin: 20px;
}

.info-course img {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  border: 7px solid #fff;
}

@media (min-width: 480px) {
  .info-course {
    width: 40%;
  }
}

@media (min-width: 1024px) {
  .info-course {
    width: auto;
  }
}

footer .container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-bottom: 25px;
}

footer .copyright {
  font-size: 20px;
}

.social-media {
  width: 100%;
  text-align: center;
  font-size: 28px;
}

.social-media img {
  color: #333;
  text-decoration: none;
  padding: 5px;
}

@media (min-width: 768px) {
  .social-media {
    width: auto;
  }

  footer .container {
    justify-content: space-between;
  }
}

@media (min-width: 1024px) {
  .container {
    width: 1000px;
  }
}
</style>