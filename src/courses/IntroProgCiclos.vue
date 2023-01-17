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
      <h1>Ciclos</h1>
      <hr />
      <div class="h1-divider"></div>
      <p class="intro">
        Un ciclo puede definirse como una estructura que nos permite repetir o
        iterar un conjunto de instrucciones y que tiene las siguientes
        características: a. El conjunto de instrucciones debe ser finito b. La
        cantidad de veces que se repita dicho conjunto de instrucciones también
        debe ser finita. En algunos casos esta cantidad de veces va a depender
        de una condición explícita y en otros casos va a depender de una
        condición implícita. Una condición es explícita cuando depende solamente
        de la misma ejecución del programa sin que sea importante la
        participación del usuario. Asimismo una condición es implícita cuando
        depende solamente de la voluntad del usuario y por lo tanto la cantidad
        de iteraciones o repeticiones del ciclo podría llegar a ser diferente
        cada vez pues sería posible que cambiara con cada usuario. c. Deben
        estar claramente demarcados el inicio y el fin del ciclo. En los casos
        en los cuales solo exista una instrucción a iterar, no serán necesarios
        dichas marcas. d. Dentro de un ciclo podrá ir cualquiera de las otras
        estructuras que se han estudiado incluyendo otros ciclos.
      </p>

      <article>
        <h2>Tipos de Ciclos</h2>
        <p>
          Solo para facilitar la escritura de algunos algoritmos y con el ánimo
          de que desde el balcón de la lógica de programación se puedan tener
          mas herramientas que faciliten la estructuración de los ciclos, la
          mayoría de los lenguajes de programación tienen tres formas de
          presentación de los ciclos, ellas son: a. ciclo Mientras (while) b.
          ciclo Para (for) c. Ciclo Haga Hasta.
        </p>

        <p>
          <strong>Ciclo Mientras(while):</strong>Este es el ciclo que hemos
          utilizado desde que comenzamos a hablar de algoritmos. Es el esquema
          general de trabajo para todos los ciclos, esto quiere decir que si
          usted entiende claramente la lógica de funcionamiento de este ciclo se
          le va a facilitar entender no solo los otros ciclos que aquí se
          explican sino cualquier otro ciclo que encuentre en algún otro libro
          de Lógica de Programación. Es útil que sepa que este ciclo también es
          llamado en algunos libros el Ciclo Mientras Que pero su filosofía es
          la misma del Ciclo Mientras que vamos a explicar aquí y que hemos
          venido utilizando. Su estructura general es la siguiente:
        </p>

        <img src="../../public/norma7-ejemplo.png" alt="" />

        <p>
          Su forma de ejecución (textualmente explicada) es muy sencilla:
          Mientras se cumpla que la condición sea Verdadera entonces se
          ejecutará el Cuerpo del Ciclo. De manera que también podríamos decir
          que el Cuerpo del Ciclo se repetirá tantas veces como lo permita la
          condición o mientras dicha condición sea Verdadera. En condiciones
          normales la cantidad de veces que se repita el cuerpo del ciclo será
          siempre una cantidad finita y deberá existir, dentro del mismo cuerpo
          del ciclo, una o mas instrucciones que nos permitan aproximarnos a la
          condición o sea que propendan porque en algún momento la condición sea
          Falsa.
        </p>

        <p>
          <strong>Ciclo Para (for):</strong>El ciclo Para tiene la siguiente
          estructura
        </p>

        <div class="placeHolder_img">
          <img src="../../public/for.png" alt="" />
        </div>

        <p>
          En este ciclo su forma de ejecución es la siguiente : Var representa
          una variable que va a tomar valores iniciando en tope_inicial y
          terminando en tope_final avanzando con un Paso de Valor. En los casos
          en los que no se especifica el valor del paso la mayoría de los
          lenguajes de programación asume el incremente de 1. El Cuerpo del
          ciclo se ejecutará una vez por cada valor que tome la variable Var.
          Veamos con un ejemplo cuál sería la aplicación de este ciclo.
        </p>

        <img src="../../public/ejemplo-for.png" alt="" />

        <p>
          <strong>Ciclo Haga Hasta:</strong>Esta es otra de las otra de las
          formas que traen algunos de los lenguajes de programación para
          expresar un ciclo. Su estructura general es la siguiente:
        </p>

        <img src="../../public/ejemplo-while2.png" alt="" />

        <p>
          En este ciclo el Cuerpo del mismo se va a ejecutar hasta cuando se
          cumpla una condición esto quiere decir que el conjunto de
          instrucciones que conforman el cuerpo del ciclo se va a repetir
          mientras la evaluación de la condición sea Falsa. Es un ciclo muy
          parecido al Ciclo Mientras con la diferencia de que en éste la
          instrucciones se repiten Mientras la condición sea Falsa y no
          verdadera como sería en el Ciclo Mientras.
        </p>

        <p>
          <strong>Ciclo Haga Mientras (do while):</strong>Esta es otra de las
          otra de las formas que traen algunos de los lenguajes de programación
          para expresar un ciclo. Su estructura general es la siguiente:
        </p>

        <img src="../../public/ejemplo-dowhile.png" alt="" />

        <p>
          Podría decirse que esta es una inversión de la estructura del ciclo
          mientras. En este ciclo el cuerpo del mismo se repite mientras la
          condición sea Verdadera y su única diferencia con el ciclo Mientras es
          que en el Ciclo Haga Mientras primero se ejecuta el cuerpo del ciclo y
          luego se evalúa la condición en cambio en el ciclo Mientras primero se
          evalúa la condición y luego se ejecuta el cuerpo del ciclo.
        </p>

        <h2>Ejemplos</h2>

        <p>
          <strong
            >Leer un número entero y determinar cuántos dígitos tiene:</strong
          >
          Es útil recordar que los datos enteros se manejan con aritmética
          entera, concepto que será muy útil para la concepción de este
          algoritmo ya que la cantidad de dígitos que tiene un número entero es
          igual a la cantidad de veces que se pueda dividir el número entre 10
          sin que el cociente sea cero. Entonces lo que vamos a hacer en este
          algoritmo es leer un número, inicializar una variable (que actuará
          como contador_de_dígitos), dividir progresivamente el número entre 10
          hasta cuando sea igual a cero y por cada vez que se divida entre 10
          vamos a incrementar el contenido de la variable contador_de_dígitos en
          1. De esta manera cuando el número haya llegado a cero tendremos en la
          variable contador_de_dígitos la cantidad de dígitos que originalmente
          tenía el número. En caso de que el número original sea negativo
          también funciona esta lógica. No se olvide que siempre que vaya
          desarrollar un algoritmo primero debe clarificar el objetivo para que
          sepa hacia donde va y hasta donde debe llegar.
        </p>

        <img src="../../public/ejemplo-while3.png" alt="" />

        <img src="../../public/ejemplo-ciclo-3.png" alt="" />

        <img src="../../public/ejemplo-dowhile2.png" alt="" />

        <h2>Ciclos Anidados</h2>

        <p>
          Una variante muy interesante en cuanto a la concepción de ciclos
          corresponde a los ciclos anidados. Se define como ciclos anidados la
          estructura en la cual un ciclo está dentro de otro (completamente).
          Esto significa que si se tratara de una estructura mientras anidada su
          esquema sería el siguiente:
        </p>

        <img src="../../public/ciclo-anidado.png" alt="" />

        <p>
          Su forma de ejecución es muy sencilla: Mientras sea Verdadera la
          condición1 el ciclo externo va a ejecutar el cuerpo del ciclo dentro
          del cual se encuentra un ciclo interno que está regido por la
          condición2 de tal manera que se ejecutará completamente el ciclo
          interno mientras la condición2 sea Verdadera. Cuando ésta condición2
          sea Falsa se ejecutarán el resto de instrucciones del ciclo externo y
          se volverá a la condición1 a evaluar si aún es verdadera para volver a
          entrar en el cuerpo de dicho ciclo.
        </p>

        <p>
          <strong>Ejemplo:</strong>Leer números hasta que digiten 0 y a cada
          valor leído calcularle su factorial.
        </p>

        <img src="../../public/ciclo-anidado-ejemplo.png" alt="" />
      </article>
      <div id="video">
        <p>Vídeo explicativo de resumen</p>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/yNvkL7L0_Vo"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </section>
  </main>
  <router-link to="/courses/intro-prog/arreglos">
    <button id="next-lesson">Siguiente Lección</button>
  </router-link>
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
    const collapse1 = ref(false);
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
  position: relative;
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

#next-lesson {
  appearance: none;
  outline: none;
  border: none;
  cursor: pointer;
  padding: 1rem 2rem;
  margin-left: 0rem;
  background-color: blue;
  color: black;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 1.2rem;
  border-radius: 0.5rem;
  margin-top: 15px;
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