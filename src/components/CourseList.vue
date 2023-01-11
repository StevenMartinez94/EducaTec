<template>
  <body>
    <header>
      <div class="container">
        <img src="../../public/educatec-branding.png" />
        <h1>EducaTec</h1>
        <input type="checkbox" id="menu-bar" />
        <label class="icon-menu" for="menu-bar"></label>
        <nav class="menu">
          <a href="./">Inicio</a>
          <a href="">Cursos</a>
          <a href="./about">Acerca de nosotros</a>
          <a href="./contact">Contáctanos</a>
        </nav>
      </div>
    </header>
    <div>
      <ul class="tilesWrap">
        <li>
          <h2>01</h2>
          <h3>Introducción a la programación</h3>
          <p>
            Aprende programación desde cero. Domina la tecnología más demandada
            en la industria. Mejora tus habilidades y conocimientos
            desarrollando la lógica de programación.
          </p>
          <router-link to="/courses/intro-prog">
            <button>Entrar al curso</button>
          </router-link>

          <!--{{isCourseCompleted('intro-prog') ? 'Completado' : 'No Completado' }}-->
        </li>
        <li>
          <h2>02</h2>
          <h3>Introducción a la bases de datos</h3>
          <p>
            En este curso de base de datos aprenderás a elaborar bases de datos
            relacionales, para que se te faciliten diversas operaciones
            productivas y estratégicas.
          </p>
          <a href="">
            <button>Próximamente</button>
          </a>
        </li>
        <li>
          <h2>03</h2>
          <h3>Microsoft Word - De principiante a experto</h3>
          <p>
            En este curso de Word aprenderás a utilizar todas las
            funcionalidades que trae el software, por medio de la creación,
            edición y distribución de documentos.
          </p>
          <a href="">
            <button>Próximamente</button>
          </a>
        </li>
        <li>
          <h2>04</h2>
          <h3>Microsoft Excel - De principiante a experto</h3>
          <p>
            Aprende Excel desde lo básico a lo avanzado con este curso práctico
            donde podrás aprender paso a paso y con imágenes descriptivas
            también incluídas.
          </p>
          <a href="">
            <button>Próximamente</button>
          </a>
        </li>
      </ul>
    </div>
  </body>
</template>

<script setup>
import { getObjectData } from "@/firebase/init";

const data = getObjectData("/users");
console.log(data);
//const completedCourse = [
//	'intro-prog'
//]

//const isCourseCompleted = (courseName) => {
//	return completedCourse.some(course => course === courseName)
//}
</script>

<style scoped>
.tilesWrap {
  padding: 0;
  margin: 50px auto;
  list-style: none;
  text-align: center;
}
.tilesWrap li {
  display: inline-block;
  width: 20%;
  min-width: 200px;
  max-width: 230px;
  padding: 80px 20px 40px;
  position: relative;
  vertical-align: top;
  margin: 10px;
  font-family: "helvetica", san-serif;
  min-height: 25vh;
  background: rgb(250, 248, 248);
  border: 1px solid #252727;
  text-align: left;
}
.tilesWrap li h2 {
  font-size: 114px;
  margin: 0;
  position: absolute;
  opacity: 0.2;
  top: 50px;
  right: 10px;
  transition: all 0.3s ease-in-out;
}
.tilesWrap li h3 {
  font-size: 20px;
  color: #b7b7b7;
  margin-bottom: 5px;
}
.tilesWrap li p {
  font-size: 16px;
  line-height: 18px;
  color: #b7b7b7;
  margin-top: 5px;
}
.tilesWrap li button {
  background: transparent;
  border: 1px solid #b7b7b7;
  padding: 10px 20px;
  color: #b7b7b7;
  border-radius: 3px;
  position: relative;
  transition: all 0.3s ease-in-out;
  transform: translateY(-40px);
  opacity: 0;
  cursor: pointer;
  overflow: hidden;
}
.tilesWrap li button:before {
  content: "";
  position: absolute;
  height: 100%;
  width: 120%;
  background: #b7b7b7;
  top: 0;
  opacity: 0;
  left: -140px;
  border-radius: 0 20px 20px 0;
  z-index: -1;
  transition: all 0.3s ease-in-out;
}
.tilesWrap li:hover button {
  transform: translateY(5px);
  opacity: 1;
}
.tilesWrap li button:hover {
  color: #262a2b;
}
.tilesWrap li button:hover:before {
  left: 0;
  opacity: 1;
}
.tilesWrap li:hover h2 {
  top: 0px;
  opacity: 0.6;
}

.tilesWrap li:before {
  content: "";
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  z-index: -1;
  background: #fff;
  transform: skew(2deg, 2deg);
}
.tilesWrap li:after {
  content: "";
  position: absolute;
  width: 40%;
  height: 100%;
  left: 0;
  top: 0;
  background: rgba(255, 255, 255, 0.02);
}
.tilesWrap li:nth-child(1):before {
  background: #c9ffbf;
  background: -webkit-linear-gradient(to right, #ffafbd, #c9ffbf);
  background: linear-gradient(to right, #ffafbd, #c9ffbf);
}
.tilesWrap li:nth-child(2):before {
  background: #f2709c;
  background: -webkit-linear-gradient(to right, #ff9472, #f2709c);
  background: linear-gradient(to right, #ff9472, #f2709c);
}
.tilesWrap li:nth-child(3):before {
  background: #c21500;
  background: -webkit-linear-gradient(to right, #ffc500, #c21500);
  background: linear-gradient(to right, #ffc500, #c21500);
}
.tilesWrap li:nth-child(4):before {
  background: #fc354c;
  background: -webkit-linear-gradient(to right, #0abfbc, #fc354c);
  background: linear-gradient(to right, #0abfbc, #fc354c);
}
</style>