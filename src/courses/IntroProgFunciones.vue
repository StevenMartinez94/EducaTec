<template>
  <header>
    <MDBNavbar light bg="light" container>
      <MDBNavbarToggler
        @click="collapse1 = !collapse1"
        target="#navbarToggleExternalContent"
      >
      </MDBNavbarToggler>
    </MDBNavbar>
    <MDBCollapse v-model="collapse1" id="navbarToggleExternalContent">
      <div class="bg-light shadow-3 p-4">
        <router-link to="/courses/intro-prog/variables">
          <MDBBtn color="link" block class="border-bottom m-0">
            Variables y Operadores
          </MDBBtn>
        </router-link>
        <router-link to="/courses/intro-prog/estructuras">
          <MDBBtn color="link" block class="border-bottom m-0">
            Estructuras básicas
          </MDBBtn>
        </router-link>
        <router-link to="/courses/intro-prog/decisiones">
          <MDBBtn color="link" block class="border-bottom m-0">
            Decisiones
          </MDBBtn>
        </router-link>
        <router-link to="/courses/intro-prog/ciclos">
          <MDBBtn color="link" block class="border-bottom m-0"> Ciclos </MDBBtn>
        </router-link>
        <router-link to="/courses/intro-prog/arreglos">
          <MDBBtn color="link" block class="border-bottom m-0">
            Arreglos
          </MDBBtn>
        </router-link>
        <router-link to="/courses/intro-prog/funciones">
          <MDBBtn color="link" block class="border-bottom m-0">
            Funciones
          </MDBBtn>
        </router-link>
        <router-link to="/quiz">
          <MDBBtn color="link" block class="border-bottom m-0">
            Evaluación
          </MDBBtn>
        </router-link>
      </div>
    </MDBCollapse>
  </header>
  <main>
    <section>
      <h1>Funciones</h1>
      <hr />
      <div class="h1-divider"></div>
      <p class="intro">
        Una función es un conjunto de órdenes que cumple con las siguientes
        condiciones: 1. Permite lograr un objetivo 2. Tiene un nombre único
        identificativo 3. Puede necesitar parámetros para lograr dicho objetivo
        4. Nos puede retornar un resultado que deberá concordar con el objetivo
        propuesto 5. Puede ser manejado como una sola unidad
      </p>

      <article>
        <h2>Macro Algoritmo</h2>
        <p>
          Este concepto ha permitido colocar a las funciones en el puesto que
          les corresponde pues con él podemos desarrollar algoritmos en donde,
          basados en Funciones, llegamos claramente a simplificar el algoritmo,
          simplificar las pruebas, y por lo tanto, a encontrar fácilmente
          errores lógicos y reutilizar el Código Fuente.
        </p>

        <p>
          Qué es pues el Macro Algoritmo..? Es un algoritmo dividido en unidades
          funcionales en donde cada una de ellas logra un pequeño objetivo
          dentro de toda la solución y en conjunto dichas unidades logran el
          Objetivo General. Vamos a verlo con un ejemplo:
        </p>

        <img src="../../public/macroalgoritmo.png" alt="" />

        <p>
          Usted podrá notar que este es un algoritmo común y corriente. Ahora
          bien vamos a suponer tres cosas que nos serán muy útiles en este
          ejercicio: 1. Supongamos que este es un algoritmo muy extenso 2.
          Supongamos que este es un algoritmo muy complejo 3. Supongamos que
          este es un algoritmo exageradamente útil. Note usted que este
          algoritmo de ejemplo, al cual es necesario que le hagamos las
          suposiciones aquí expuestas, se divide fundamentalmente en tres
          partes: En la primera parte se leen 10 datos enteros y se almacena
          cada uno en un vector, en la segunda parte se busca cuál es el número
          mayor de entre los números leídos y en la tercera parte se muestra el
          resultado final. Sé que coincidimos en el análisis de este algoritmo y
          en su subdivisión en estas tres partes tan lógicas. Bueno pues
          precisamente ese es el Macro Algoritmo. Escribámoslo técnicamente:
        </p>

        <img src="../../public/macroalgoritmo1.png" alt="" />

        <p>
          Es evidente que nuestro algoritmo se simplificó muchísimo (y mucho mas
          si partimos de las suposiciones hechas inicialmente). Ahora bien
          cabría la pregunta Qué contiene cada uno de estos procesos..? Pues
          veamos cómo quedaría el algoritmo completo.
        </p>

        <img src="../../public/funciones-ejemplo.png" alt="" />

        <p>
          a. Note que existe una Función Principal cuyo objetivo es permitir la
          coordinación de los llamados a las demás funciones. b. También notará
          que este algoritmo está organizado en unas unidades funcionales donde
          cada una cumple un pequeño objetivo frente al objetivo general. Como
          puede ver usted la Función Principal se encarga de llamar a las demás
          funciones, la Función Lectura_De_Datos cumple con el objetivo de leer
          los datos y almacenarlos en el Vector, la Función Búsqueda_del_Mayor
          cumple con el objetivo de encontrar cuál es el mayor de los números
          almacenados en el vector y la función Muestra_del_Resultado se encarga
          de entregarnos el valor solicitado. c. Esta forma de escribir el
          programa nos permite (mirando la función principal) entender mucho mas
          fácil la idea general de solución de este algoritmo y por lo tanto eso
          nos simplifica el camino al momento que de alguna forma le queramos
          hacer ajustes, mejoras o correcciones. d. Realizarle una prueba de
          escritorio al algoritmo inicial (que no se olvide que estamos
          suponiendo que es un algoritmo extenso y muy complejo) se reduce ahora
          a realizar tres pruebas de escritorio sencillas. La primera prueba
          será a la Función Lectura_De_Datos que como ya sabemos busca como
          objetivo leer 10 datos enteros y almacenarlos en un Vector. Si al
          realizar dicha prueba vemos que SOLO esta función cumple su pequeño
          objetivo entonces no tendremos que preocuparnos mas de ella. La
          segunda prueba de escritorio será a la Función Búsqueda_del_Mayor cuyo
          objetivo es encontrar el mayor número almacenado en un Vector de 10
          posiciones enteras. Si al realizar esta prueba vemos que la función
          cumple con este objetivo entonces no tendremos que preocuparnos mas
          por ella. La tercera prueba (y en este caso la mas sencilla) será a la
          Función Muestra_del_Resultado cuyo objetivo será mostrar en pantalla
          un dato entero almacenado en una variable llamada Mayor. Si al
          realizar la prueba de escritorio vemos que realmente se cumple el
          objetivo entonces no tendremos que preocuparnos mas ni por la función
          ni por el objetivo al igual que en todos los casos. e. Como puede
          notar si al realizarle independientemente las respectivas pruebas de
          escritorio a estas tres funciones cada una cumple su objetivo
          (independientemente) entonces ya habremos desarrollado el algoritmo
          completo pues la unión de las tres es lo que nos permite lograr el
          objetivo general del mismo. f. Si alguien nos dijera que nuestro
          algoritmo no está funcionando bien o sea que no cumple con el objetivo
          general de encontrar el número mayor de entre los 10 números leídos
          entonces esto querrá decir, sin lugar a dudas, que el error tiene que
          estar en la función que se encarga de seleccionar el mayor dado que
          este proceso se realiza solo en esta función y no en ninguna de las
          otras dos. g. Si nos encontramos con que al ejecutar el algoritmo al
          final nos muestra en pantalla que el número mayor es un número que
          estamos seguros que no estaba entre los número leídos originalmente
          entonces esto querrá decir que el error con toda seguridad está en la
          lectura de datos y que, seguramente, los datos que se están
          almacenando en el vector no corresponden a los datos leídos. h. Si
          vemos que no nos muestra ningún resultado nuestro algoritmo al momento
          de ejecutarlo entonces esto quiere decir que el error tiene que estar
          en la Función Muestra_de_Resultado. i. Si todas las pruebas de
          escritorio han sido exitosas entonces la Función Principal estará bien
          pues es la que llama a las otras tres funciones y todo lo que
          tendremos que revisar es el orden de los llamados.
        </p>

        <h2>Variables Globales y Variables Locales</h2>

        <p>
          Una variable Global es aquella que se declara por fuera de cualquier
          función y por lo tanto puede ser reconocida en cualquier función. En
          el ejemplo que tratamos en este momento podemos ver que las variables
          Vector ( 10 ), Ind y Mayor son variables globales porque están
          declaradas por fuera de cualquier función (incluyendo la función
          principal). Por eso estas variables las utilizamos indiscriminadamente
          en cualquiera de las funciones.
        </p>

        <p>
          Una variable Local es aquella que se declara dentro de alguna función
          y solo puede ser reconocida en esa función. En el ejemplo aún no hemos
          comenzado a utilizar variables locales. Esta definición implica que
          una función puede tener internamente declarada una variable con un
          nombre determinado y otra función también puede tener internamente
          declarada otra variable con el mismo nombre y no habrá ningún error ya
          que cada variable es diferente y es reconocida en la función en donde
          se declare. Eso es como María la de los Díaz y María la de los Pérez.
        </p>

        <p>
          <strong>Ejemplo:</strong>Leer dos números enteros y mostrar el
          resultado de su suma.
        </p>

        <img src="../../public/funcion-ejemplo2.png" alt="" />
      </article>
      <div id="video">
        <p>Vídeo explicativo de resumen</p>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/MiH3pbP4EFc"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </section>
    <router-link to="/quiz">
      <button>Realizar Evaluación</button>
    </router-link>
  </main>
</template>

<script>
import {
  MDBNavbar,
  MDBNavbarToggler,
  MDBCollapse,
  MDBBtn,
} from "mdb-vue-ui-kit";
import { ref } from "vue";
export default {
  components: {
    MDBNavbar,
    MDBNavbarToggler,
    MDBCollapse,
    MDBBtn,
  },
  setup() {
    const collapse1 = ref("/quiz");
    return {
      collapse1,
    };
  },
};
</script>

<style scoped>
html {
  color: #252525;
}

#video {
  margin: 10px;
  padding: 10px;
}

#video p {
  text-align: center;
}

main {
  position: fixed;
  left: 50%;
  transform: translate(-50%, 0);
  max-width: 1280px;
  padding: 0 18px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  margin-top: 100px;
}
section {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  overflow: hidden;
}
article {
  font-family: "Open Sans", sans-serif;
}
h1 {
  font-family: "Alfa Slab One", cursive;
  text-align: center;
  letter-spacing: 1.5px;
}
hr {
  width: 100%;
}
article h3 {
  font-weight: 800;
  margin: 0;
  line-height: 27px;
}
section p {
  font-family: "Open Sans", sans-serif;
  color: #252525;
  line-height: 25px;
  margin-bottom: 40px;
  text-align: justify;
}
section .intro {
  font-weight: 300;
}
article p {
  margin-top: 0;
  margin-bottom: 50px;
}
article h3,
section p {
  font-size: 16px;
}
.placeHolder_img img {
  width: 800px;
}

img {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
}
/*--------------------------

     Media Queries 

--------------------------*/
/*    Mobile    */

@media only screen and (min-width: 320px) {
  /* 320px */
  h1 {
    font-size: 42px;
    line-height: 44px;
  }
  .h1-divider {
    width: 222px;
    height: 19px;
  }
  .placeHolder_img {
    height: 320px;
    margin: 0 0 50px 0;
  }
}

@media only screen and (min-width: 375px) {
  /* 375 */
}

@media only screen and (min-width: 414px) {
  /* 414 */
}

@media only screen and (min-width: 568px) {
  /* 568 */
}

@media only screen and (min-width: 667px) {
  /* 667px */
  article p {
    column-count: 2;
    column-gap: 42px;
  }
}

@media only screen and (min-width: 736px) {
  /* 736px */
}

/*Tablet*/

@media only screen and (min-width: 768px) {
  /* 768 */
  main {
    padding: 0 40px;
  }
  h1 {
    font-size: 53.1px;
    line-height: 0.98;
    letter-spacing: 1.1px;
    margin-bottom: 20px;
  }
  .h1-divider {
    width: 339px;
    height: 24px;
    margin-bottom: 53px;
  }
  article p {
    margin-bottom: 40px;
  }
  .placeHolder_img {
    height: 344px;
    margin: 0 0 40px 0;
  }
}

/*    Desktop    */

@media only screen and (min-width: 1024px) {
  /* 1024 */
  section {
    width: 820px;
  }
  h1 {
    font-size: 66.4px;
    line-height: 0.95;
    letter-spacing: 1.4px;
    margin-bottom: 30px;
  }
  .h1-divider {
    width: 486px;
    margin-bottom: 38px;
  }
  .placeHolder_img {
    height: 442px;
  }
}

@media only screen and (min-width: 1140px) {
  /* 1140 */
  section {
    width: 1035px;
  }
  h1 {
    font-size: 72px;
    line-height: 0.98;
  }
  .h1-divider {
    width: 480px;
    margin-bottom: 45px;
  }
  .placeHolder_img {
    height: 432px;
  }
}

@media only screen and (min-width: 1440px) {
  /* 1440 */
}

@media only screen and (min-width: 1662px) {
  /* 1662px */
}
</style>