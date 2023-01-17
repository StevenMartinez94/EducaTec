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
      <h1>Decisiones</h1>
      <hr />
      <div class="h1-divider"></div>
      <p class="intro">
        Ya sabemos que una decisión, a nivel de lógica de programación, es la
        escogencia de uno de entre varios caminos lógicos dependientes todos de
        una condición. Normalmente algunos libros acotan en esta definición que
        se escoge uno de entre dos caminos lógicos y dado que todo el proceso
        del computador es binario podemos decir que esos libros también tienen
        la razón. Por facilidades de representación se han esquematizado en los
        algoritmos (y así mismo en los Lenguajes de Programación) dos
        estructuras de decisión que son la Estructura Si-Entonces-Sino que es la
        que hemos estado utilizando en los ejemplos hechos hasta el momento y la
        Estructura Casos que nos permite realizar la escogencia de uno de entre
        varios ramales lógicos dependientes de una misma condición.
      </p>

      <article>
        <h2>Estructura Si-Entonces-Sino</h2>
        <p>
          Esta es la estructura que hemos estado utilizando desde el comienzo de
          los algoritmos. Como ya se conoce podemos decir que su utilidad,
          fundamentalmente, es permitir que el computador escoja uno de dos
          ramales lógicos dependiendo de una determinada condición. Es
          importante anotar que tomar una decisión, por simple que ésta sea, le
          toma mucho tiempo al computador realizarla ya que aunque para nosotros
          es muy sencillo determinar si 9 es mayor que 5 para el computador no
          lo es pues debe realizar algunas operaciones para obtener la respuesta
          correcta.
        </p>

        <p>
          <strong>Decisiones Simples:</strong>Obedecen a la siguiente
          estructura:
        </p>

        <img src="../../public/decision1.png" alt="" />

        <p>
          <strong>Decisiones en Cascada:</strong>Este no es mas que un esquema
          en donde el Sino de cada Si condicional da inicio a un nuevo Si
          condicional y así sucesivamente. Su esquema general es el siguiente:
        </p>

        <img src="../../public/cascada1.png" alt="" />

        <p>
          <strong>Ejemplo:</strong>Leer un número entero y determinar si es de
          uno o dos o tres o cuatro dígitos. Validar que el número no sea
          negativo.
        </p>

        <img src="../../public/cascada-ejemplo.png" alt="" />

        <p>
          <strong>Decisiones en Secuencia:</strong>Este es el tipo de estructura
          que se utiliza cuando se deben realizar varias preguntas en donde no
          es importante (normalmente) el Sino de cada decisión. Su esquema
          general es el siguiente:
        </p>

        <img src="../../public/decision-secuencia.png" alt="" />

        <p>
          <strong>Ejemplo:</strong>Leer un número entero y determinar si es
          positivo o negativo o si es 0.
        </p>

        <img src="../../public/decision-secuencia-ejemplo.png" alt="" />

        <p>
          <strong>Decisiones Anidadas:</strong>Éstas se presentan en aquellos
          casos en los cuales una estructura completa de decisión se encuentra
          dentro de otra. Su esquema general es el siguiente:
        </p>

        <img src="../../public/decision-anidada.png" alt="" />

        <p>
          <strong>Ejemplo:</strong>Leer un número entero y determinar si es
          positivo o negativo. Si es positivo determinar si tiene dos dígitos y
          si es negativo determinar si tiene tres dígitos. Asumir que no puede
          entrar el número cero.
        </p>

        <img src="../../public/decision-anidada-ejemplo.png" alt="" />

        <h2>Estructura Casos</h2>

        <p>
          Esta estructura permite abreviar una serie de Decisiones en cascada o
          en secuencia. La inmensa mayoría de lenguajes de programación tiene
          una instrucción equivalente para su implementación y precisamente lo
          que se busca con esta estructura es facilitar la toma de decisiones
          por parte del computador dado que éste es el proceso que mas tiempo le
          toma. La estructura casos toma el contenido de una variable y lo
          evalúa acorde con unos posibles valores ejecutando lo que se le
          indique en cada una de las opciones.
        </p>

        <p>
          <strong>Estructura Casos Simple</strong>Su estructura general es la
          siguiente:
        </p>

        <img src="../../public/casos-simple.png" alt="" />

        <p>
          Su forma de ejecución es muy sencilla. Al iniciar esta estructura el
          computador recibe la variable con un determinado contenido (o por lo
          menos dentro de nuestros algoritmos nos debemos asegurar de ello),
          verifica si el contenido de la variable es igual a uno de los posibles
          valores que se hayan considerado dentro de la estructura. De ser así,
          ejecuta las órdenes que acompañen el valor determinado. Si el
          contenido de la variable no es igual a ninguno de los contenidos,
          entonces ejecuta las instrucciones que acompañan el Sino de esta
          estructura.
        </p>

        <p>
          <strong>Ejemplo:</strong>Leer un número entero y si es de un dígito y
          además es menor que 5 escribir su nombre en pantalla (El nombre del 1
          es UNO, el nombre del 2 es DOS, etc.).
        </p>

        <img src="../../public/casos-simple-ejemplo.png" alt="" />

        <p>
          <strong>Estructura Casos Anidadas</strong>Esta estructura se utiliza
          cuando una de las opciones de la estructura casos general da origen a
          otra estructura casos y otro conjunto de instrucciones. Veamos un
          ejemplo de esto:
        </p>

        <p>
          Leer un entero y si es igual a cualquier dígito comprendido entre 1 y
          5 escribir su nombre. Si es igual a cinco además de escribir su nombre
          leer otro dígito y, si este último está entre 1 y 5, escribir su
          componente decimal. Si entró un 3 entonces escribir “Cincuenta y
          Tres”, si entró un 1 entonces escribir “Cincuenta y Uno”.
        </p>

        <img src="../../public/casos-anidados.png" alt="" />
      </article>
      <div id="video">
        <p>Vídeo explicativo de resumen</p>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Z0eBpTWQ7UU"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </section>
  </main>
  <router-link to="/courses/intro-prog/ciclos">
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