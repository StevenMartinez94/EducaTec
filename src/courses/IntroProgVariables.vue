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
      <h1>Variables, Constantes y Operadores</h1>
      <hr />
      <div class="h1-divider"></div>
      <p class="intro">
        Informalmente algo variable es algo que puede cambiar de un momento a
        otro. Técnicamente una variable es un campo de memoria al que se le
        puede cambiar su contenido cuantas veces sea necesario. Primera
        aclaración, un campo de memoria es un pedacito de la memoria principal
        del computador en donde podemos guardar un dato. Segunda aclaración, a
        pesar de que en la memoria es donde se guarda la información exactamente
        ésta se almacena en variables. Esto le ha de representar a usted que es
        a través de variables como se puede utilizar la memoria del computador.
      </p>
      <article>
        <h3>Variables y sus tipos</h3>
        <p>
          <strong>Entero:</strong> Un dato de tipo entero es un número que no
          tiene punto decimal, por lo tanto en sus operaciones jamás va a
          generar decimales. Por ejemplo 25, -96 y 0. El hecho de que los datos
          de tipo entero no generen decimales significa que operan con un juego
          de reglas llamado Aritmética Entera. Una variable que se declare de
          tipo entero podrá almacenar solamente datos de tipo entero.
        </p>

        <div class="placeHolder_img">
          <img src="../../public/variable.jpg" alt="" />
        </div>

        <p>
          <strong>Real:</strong>Un dato de tipo real es un número que tiene
          punto decimal, por lo tanto en sus operaciones puede generar
          decimales. Por ejemplo 12.3, -78.56 o 45.0. El hecho de que los datos
          de tipo real generen decimales significa que operan con un juego de
          reglas llamado Aritmética Real. Una variable que se declare de tipo
          real podrá almacenar solamente datos de tipo real.
        </p>
        <p>
          <strong>Tipo Caracter:</strong>Un dato tipo carácter es un equivalente
          del Código ASCII ( American Standard Code for Interchange Information
          ). ¿Qué es el código ASCII? Es el Código Internacional de
          equivalencias Internas en el Sistema Binario. A nivel mundial, los
          computadores están construidos en un sistema numérico llamado sistema
          binario, sistema que se basa solamente en la utilización de unos (1s)
          y ceros (0s). Este sistema tiene una relación directa con el sistema
          decimal y por lo tanto fue adoptado ya que permitía aprovechar
          características físicas de los componentes electrónicos. Dada la gran
          importancia que poco a poco fueron adquiriendo los computadores, se
          adoptó un solo código interno para la interpretación de todas y cada
          una de las teclas (de su teclado, obviamente).
        </p>
        <h3>¿Cómo se llevan los datos a las variables?</h3>
        <p>
          Pues a través de un signo muy conocido por usted y es el signo =. Este
          signo tiene, en el caso de los algoritmos computacionales y programas,
          una connotación un poco diferente a la que se le da en matemáticas. El
          signo igual (=) significa que el computador va a realizar lo que está
          a la derecha del igual y lo va a almacenar en la variable que se
          encuentre a la izquierda del igual. De manera que ya usted puede ver
          claramente en esta definición que a la izquierda del igual solo puede
          haber una variable y al lado derecho del igual puede haber una
          constante, una variable ó una expresión.
        </p>
        <img src="../../public/variables-asignacion.png" alt="" />
        <p>
          Puede notarse en este ejemplo que en la variable a se ha almacenado
          una constante, en la variable b se ha almacenado el contenido de otra
          variable y en la variable c se ha almacenado el resultado de una
          expresión. Y qué pasará si luego de tener estas tres instrucciones
          adicionamos la siguiente:
        </p>
        <img src="../../public/variables-asignacion-2.png" alt="" />
        <p>
          De acuerdo a lo dicho vamos a resolver el siguiente conjunto de
          instrucciones:
        </p>
        <img src="../../public/asignaciones-resueltas.png" alt="" />
        <h3>Operadores</h3>
        <p>
          Los operadores son signos que nos permiten expresar relaciones entre
          variables y/o constantes, relaciones de las cuales normalmente se
          desprende un resultado. Ya hemos manejado dos operadores que son el de
          la suma (+) y el de la resta (-) pero no son los únicos. En un
          algoritmo computacional también se pueden utilizar los siguientes
          operadores: "^" Para expresar la potenciación, "*" Para expresar la
          multiplicación, "/" Para expresar la división
        </p>
        <p>
          Algo que debemos tener en cuenta cuando vamos a escribir una expresión
          es que el computador solo entiende las expresiones en formato
          linealizado esto quiere decir escritas en una sola línea. De tal
          manera que si queremos escribir la ecuación
        </p>
        <img src="../../public/division-ej.png" alt="" />
        <p>
          No se la podemos entregar al computador tal y cual como está aquí
          escrita sino que debemos “transformarla” de manera que quede escrita
          en una sola línea. Supondríamos en primera instancia que su
          equivalente (en una sola línea) sería:
        </p>
        <img src="../../public/division-ej-2.png" />
      </article>
      <div id="video">
        <p>Vídeo explicativo de resumen</p>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/kZfuJvkdcHU"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </section>
  </main>
  <router-link to="/courses/intro-prog/estructuras">
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