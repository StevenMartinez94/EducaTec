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
      <h1>Arreglos</h1>
      <hr />
      <div class="h1-divider"></div>
      <p class="intro">
        Un arreglo es un conjunto de variables en donde cada una de ellas puede
        ser referenciada utilizando su posición relativa es decir su ubicación
        en relación con el primer elemento de dicho conjunto. Estoy seguro que
        mas de una vez usted habrá notado que el cajero de un Banco para
        referirse a una de las personas que hacen cola para hacer una
        consignación puede decir “Venga la quinta persona” y habrá notado como,
        una persona que no estaba de primera, pasa a ser atendida por él. Varios
        razonamientos se involucran inconscientemente en esta situación:
      </p>

      <p>
        1. En primera instancia sabemos que la “quinta persona” se ubica
        contando a partir de la primera. Esto es algo muy obvio pero para el
        tema que nos ocupa en el momento es importantísimo. 2. Normalmente todas
        las personas, sin equivocación, voltean a mirar a una sola persona que
        es, con toda seguridad, la que ocupa la quinta posición en la fila. 3.
        El “quinto puesto” en la cola tiene que estar ocupado por alguien. No
        puede estar vacío pues esa tuvo que haber sido una de las razones para
        que el cajero se refiriera a dicha persona con tanta seguridad. 4. La
        cola de personas no es infinita. Tiene una cantidad determinada de
        clientes. 5. Delante de la Quinta persona deben haber cuatro personas y
        después de ella pueden haber muchas o ninguna persona. 6. Si existen
        varias colas solo atenderá el llamado del cajero la “quinta persona” de
        la cola a la que él se refiera. 7. Si en algún momento otro cajero
        dijera “Vea, todas las personas de esa cola pasen pásense a esta caja”.
        Entonces todo el conjunto de personas atendería el llamado de ese otro
        cajero lo cual significaría que en cualquier momento ese conjunto de
        personas puede se manejado como una sola unidad.
      </p>

      <article>
        <h2>Índices</h2>
        <p>
          Se conocen como índices todas aquellas variables que nos sirven para
          ubicar perfectamente un elemento dentro de un arreglo. De esta forma
          en el ejemplo de la cola de personas en vez de decir “la quinta
          persona” podríamos haber dicho la “persona No. 5” o, para decirlo de
          una manera mas técnica, la persona sub 5.
        </p>

        <p>
          Cuando el índice es reemplazado por una variable cuyo contenido es el
          dato entero que necesitamos entonces ésta variable se conoce como
          Subíndice. De esta forma si, en el ejemplo de la cola tenemos una
          variable que se llama Num y Num contiene el número 5 entonces
          podríamos habernos referido a la “quinta persona” como la “Persona sub
          Num” (eso sí teniendo la seguridad de que Num contiene solo el número
          5). Luego de esta manera si la cola tiene 10 personas entonces un
          algoritmo de atención para las 10 personas sería:
        </p>

        <img src="../../public/indices1.png" alt="" />

        <p>
          Y de esta manera sabiendo que la variable Num puede tomar valores
          desde 1 hasta 10, pero que cada vez que tome un valor atiende a una
          determinada persona, se podrá concluir que:
        </p>

        <img src="../../public/indices2.png" alt="" />

        <p>
          Fundamentalmente los índices se conciben como números estrictamente
          enteros debido a que referenciar una posición dentro de un arreglo
          siempre se dará en términos enteros. Cuando usted hace una cola en un
          banco usted puede quedar de primero, de segundo, de tercero, etc. o lo
          que se lo mismo puede quedar de 1, de 2, de 3, etc. Lo que no se puede
          concebir es que usted quede de 1.4 ó de 4.6 dentro de la cola. Por
          esta razón es que se han conceptualizado los índices como datos
          estrictamente enteros.
        </p>

        <h2>Vectores</h2>

        <p>
          Un vector es un arreglo en donde la ubicación exacta de cada uno de
          sus elementos necesita solamente la utilización de un subíndice. Tal
          es el ejemplo de una cola de personas en donde cada una de ellas se
          puede ubicar exactamente con un solo numerito: “Venga la quinta
          persona”, “Acérquese la tercera persona”, etc. He resaltado en letra
          cursiva la palabra exacta y exactamente porque ellas representan la
          diferencia con los otros tipos de arreglos.
        </p>

        <p>Un vector siempre tendrá:</p>

        <p>
          1. Tipo .- Por lo que se ha dicho en un vector los datos que se han de
          almacenar siempre serán del mismo tipo por lo cual es supremamente
          importante especificar de qué tipo van a ser los datos almacenados en
          él. No se olvide que los tipos de datos standard son Entero, Real y
          Carácter, cada uno con características propias que fueron explicadas
          en los primeros capítulos. En esta parte es importante anotar que el
          conjunto de datos almacenado en un vector siempre será homogéneo o sea
          que todos los datos son del mismo tipo.
        </p>

        <p>
          2. Nombre.- Sabiendo que todos los datos almacenados en un vector van
          a pertenecer a un mismo arreglo, entonces dicho arreglo deberá tener
          un nombre ajustado a las mismas reglas con que se le colocan los
          nombres a las variables convencionales. No ha de olvidarse que un
          arreglo en el fondo es una variable dividida en varios pedacitos donde
          cada pedacito puede almacenar un dato diferente en su contenido mas no
          es su tipo.
        </p>

        <p>
          3. Dimensión.- Se refiere a la cantidad de elementos que van a ser
          utilizados en el vector. Dimensionar un vector significa definir
          cuántos elementos se van a utilizar. En este aspecto debemos conocer
          lo mejor posible el objetivo porque cuando el algoritmo se haya
          convertido en programa y se encuentre en ejecución no podremos cambiar
          la cantidad de elementos de que consta dicho vector. Esa tal vez será
          una de las desventajas de la utilización de los arreglos en general y
          es que su dimensionamiento nos va a arriesgar a subdimensionar o a
          sobredimensionar, es decir, a definir mas campos de memoria o menos
          campos de memoria de los que necesitemos.
        </p>

        <p>
          4. Tamaño.- El tamaño es la cantidad total de campos de memoria que
          van a ser utilizados. En el caso de los vectores no existe ninguna
          diferencia entre la dimensión y el tamaño, diferencia que se hará muy
          clara cuando expliquemos las matrices.
        </p>

        <p>
          5. Destinación.- Es muy importante, tal como lo hicimos con el
          objetivo, que sepamos cuál va a ser la utilización del vector que
          vayamos a usar. Así como para nosotros en algún algoritmo era claro
          que la variable Cont_Par era la que iba a contener la cantidad de
          números pares que se generaran en algún proceso, así también va a ser
          muy importante que sepa con claridad cuál va a ser el uso de un
          determinado vector. De esta manera siempre que hagamos referencia al
          vector sabremos a qué conjunto de datos nos estamos refiriendo.
        </p>

        <p>
          6. Indice.- Siempre que vamos a usar un vector es natural pensar que
          necesitaremos una variable de tipo entero que será utilizada a manera
          de subíndice o sea que es la que nos va a almacenar cada una de las
          posiciones posibles que tenga el vector. Dicha variable solo tiene que
          cumplir con el requisito de ser una variable entera. Es importante que
          recuerde que por ser el subíndice una variable, ésta, dentro del
          programa podrá tener todos los usos que le queramos dar dentro del
          contexto del mismo algoritmo además de ser utilizada como subíndice.
        </p>

        <p>
          Se justifica la utilización de vectores cuando se dan algunas de las
          siguientes razones: 1. En algún momento se necesita manejar una
          cantidad de datos como todo un conjunto. 2. Se necesitan almacenar
          datos que posteriormente se van a volver a utilizar. 3. Se necesitan
          realizar cálculos de manera que los resultados progresivos se vayan a
          necesitar mas adelante. 4. Se necesita realizar un determinado proceso
          con un conjunto de datos, “al tiempo”. 5. Se necesita realizar
          cálculos tan complejos que resulte mas óptimo almacenar los resultados
          provisionales que volverlos a calcular. 6. En general cada que
          necesitemos hacer operaciones con conjuntos de datos. 7. Siempre que
          se necesite desarrollar algoritmos con conjuntos de datos cuya
          cantidad pueda en algún momento, no dentro de una misma ejecución,
          cambiar.
        </p>

        <p>
          <strong>Ejemplo:</strong>Desarrollar un programa que permita leer 10
          números enteros y determinar en qué posición entró el número mayor.
        </p>

        <img src="../../public/vector-ejemplo.png" alt="" />
      </article>
      <div id="video">
        <p>Vídeo explicativo de resumen</p>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/4s2D-pr8Klo"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </section>
  </main>
  <router-link to="/courses/intro-prog/funciones">
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