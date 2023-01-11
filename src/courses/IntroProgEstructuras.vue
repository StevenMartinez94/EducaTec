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
      <h1>Estructuras Básicas y Técnicas para Representar Algoritmos</h1>
      <hr />
      <div class="h1-divider"></div>
      <p class="intro">
        Una estructura se define como un esquema que nos permite representar de
        manera simplificada alguna idea y que bajo condiciones normales es
        constante. Ello significa que si hablamos de este concepto en este
        momento, significará que de alguna manera el pensamiento del ser humano,
        en lo que se refiere a los algoritmos, está enmarcado en algún tipo de
        Estructuras que no solo le permiten tener un medio mas simplificado y a
        la mano para expresar las ideas sino que además permite “restringir” un
        poco el horizonte de la Lógica Algorítmica.
      </p>
      <article>
        <h2>Estructuras Básicas expresadas Técnicamente</h2>
        <p>
          Precisamente y con el ánimo de facilitar unos patrones técnicos que
          permitan describir las ideas lógicas de una manera uniforme se han
          desarrollado unos esquemas que nos van a permitir escribir las
          estructuras básicas.
        </p>

        <p>
          <strong>Secuencias de órdenes:</strong>Para escribir una secuencia de
          ordenes o acciones todo lo que tiene que hacer es colocar una nueva
          orden o una nueva acción después de la última que haya colocado. De
          esta manera se entiende la secuencialidad y la ordinalidad en la
          ejecución de esas acciones. Vamos a desarrollar un algoritmo que nos
          permita asomarnos a la ventana, pero vamos a asumir que la ventana a
          donde nos queremos asomar ya está abierta y que no estamos muy
          distantes de la ventana. Entonces diríamos:
        </p>

        <div class="placeHolder_img">
          <img src="../../public/ejemplo-secuencia.png" alt="" />
        </div>

        <p>
          <strong>Decisiones:</strong>Siempre que tenemos que tomar una decisión
          o, mas bien, siempre que tengamos que utilizar la estructura de
          Decisiones vamos a depender de una condición. La condición es la que
          nos permite que podamos decidir cuál es el camino lógico correcto a
          tomar. Vamos a desarrollar el mismo algoritmo de asomarnos a la
          ventana pero esta vez no le vamos a colocar las condiciones de que
          estamos cerca de la ventana y de que ésta está abierta. Para ello
          vamos a incorporar una líneas de decisión que nos permitan tener un
          algoritmo mas genérico y que nos permita lograr mejor el objetivo,
          así:
        </p>

        <div class="placeHolder_img">
          <img src="../../public/ejemplo-decision.png" alt="" />
        </div>

        <p>
          1. Las palabras Si que aparecen son exclusivamente condicionales y no
          afirmativas como pudiera pensarse en algunos casos. 2. Después de cada
          Si condicional va una condición que es la que permite que se haga una
          cosa u otra. La condición regula las acciones que vienen después y que
          dependen del Si condicional inicial. 3. Puede usted notar que una
          decisión completa involucra una pregunta que evalúa una condición, un
          conjunto de acciones a realizar en caso de que la condición sea
          verdadera y un conjunto de acciones a realizar en caso de que la
          condición sea falsa. 4. No siempre que exista un condicional Si debe
          existir un Sino asociado a él. Siempre que exista un Sino es porque
          está asociado a un Si condicional determinado.
        </p>

        <p>
          <strong>Ciclos:</strong>Esta es la estructura que nos permite repetir
          una o varias acciones una cantidad definida de veces. Como ejemplo,
          vamos a suponer para ampliar nuestros ejemplos que usted es un
          supervisor de una fábrica y que cada media hora, a lo largo de todo el
          día, debe estar vigilando determinada acción a través de una ventana.
          El algoritmo para cumplir su objetivo que es el de Vigilar (como
          supervisor de la fábrica) parte de una unidad muy sencilla y es
          Asomarse por una ventana. En palabras sencillas usted tendrá que
          asomarse por una ventana mientras no termine el día cada media hora y
          durante el tiempo que usted no esté asomado lo que tiene que hacer es
          seguir en su puesto de trabajo. De esta forma, y partiendo de lo que
          ya tenemos, usted podrá estructurar un algoritmo mas o menos de la
          siguiente manera:
        </p>

        <img src="../../public/ejemplo-ciclo.png" alt="" />

        <h2>Técnicas Para Representar Algoritmos</h2>

        <p>
          <strong>Diagramas de Flujo:</strong>Los Diagramas de Flujo parte de
          unos símbolos que nos permiten decirlo mismo que dijimos hace un
          momento en los algoritmos pero de una manera gráfica y, por supuesto,
          un poco mas entendible. Los siguientes son algunos de los símbolos (y
          el significado de ellos) que se han acordado utilizar dentro de los
          Diagramas de Flujo o Flujogramas son los siguientes:
        </p>

        <img src="../../public/simbolos-diagrama.png" alt="" />

        <p>
          Estos símbolos (en unión con otros símbolos que para efectos de
          nuestro libro tal vez no haya necesidad de citar) fueron utilizados
          por mucho tiempo para representar gráficamente una idea o un
          algoritmo. Cómo se utiliza entonces esta simbología..? Tomemos el
          próximo algoritmo como ejemplo.
        </p>

        <img src="../../public/diagrama-ejemplo1.png" alt="" />

        <img src="../../public/ejemplo-diagrama2.png" alt="" />

        <img src="../../public/ejemplo-diagrama3.png" alt="" />

        <p>
          1. Toda decisión, como es obvio, tiene dos caminos: Un camino nos
          lleva a la acción o las acciones a realizar en el caso de que la
          respuesta a la pregunta sea Verdadera y el otro camino es el que nos
          dice que debemos hacer en caso de que la respuesta a la pregunta sea
          Falsa. 2. Lo que en el algoritmo eran unos ciclos, en el diagrama se
          cambiaron por unas decisiones en donde uno de los caminos se devuelve
          (instrucciones atrás obviamente). Al realizar un seguimiento de este
          Diagrama de Flujo usted notará que se podrá devolver tantas veces como
          lo permita la condición de la Decisión que queda al final y que solo
          se va a salir de ese ciclo cuando la condición sea Verdadera o sea que
          el ciclo se mantiene mientras la condición sea Falsa lo cual concuerda
          con la teoría de los ciclos. 3. En la última decisión, el camino Falso
          nos lleva a una burbuja que tiene un número 1 adentro. Número que
          también está al principio del diagrama pero con la flecha en el otro
          sentido (es decir, no saliendo del diagrama sino entrando a él). Se
          utiliza esta notación solo para simplificar un poco el Diagrama de
          Flujo. 4. Con el Diagrama de Flujo usted puede ver un gráfico de la
          solución y con ello hacerse una idea clara de la secuencia de pasos
          que necesitaría para alcanzar el objetivo. 5. Siempre que vaya a
          desarrollar un Diagrama de Flujo trate de ser muy organizado y muy
          estético, pues no se olvide que si vamos a representar un algoritmo
          computacional (en donde se busca que el computador logre un objetivo
          por nosotros) al momento de la transcripción será muy importante el
          orden que usted haya tenido en la utilización de esta técnica. 6.
          Cuando diseñe un ciclo, no se olvide verificar que, lógicamente, la
          decisión por la cual reemplace el ciclo al momento de diseñar su
          diagrama de flujo tenga el mismo comportamiento, es decir, permitan
          que bajo las mismas condiciones una acción o un conjunto de acciones
          se repitan una cantidad finita de veces. 7. Si el algoritmo que usted
          tiene para lograr este mismo objetivo es diferente, tenga presenta que
          el Diagrama de Flujo también va a ser diferente ya que éste es un
          reflejo gráfico de aquel. 8. Es muy importante que sepa que el solo
          hecho de cambiar la llegada de una determinada flecha, cambia
          completamente el algoritmo. Puede usted notar que la utilización de
          los símbolos resulta ser una tarea muy simplificada, pero lo que si es
          delicado es la colocación de las flechas ya que ellas son las que
          representan el sentido con que se va a “mover” el flujo de nuestro
          lógica.
        </p>

        <p>
          <strong>Diagramas Rectangulares Estructurados:</strong>Una de las
          dificultades de los Diagramas de Flujo radica en que así como brinda
          la posibilidad de representar gráficamente el flujo de una idea o el
          “recorrido” de la solución a un problema también abre el espacio para
          que un programador desordenado ponga flechas de flujo a diestra y
          siniestra y finalmente obtenga una representación mas compleja que la
          idea misma. Precisamente la técnica de Diagramas Rectangulares
          Estructurados nos permite tener unas herramientas gráficas para
          representar la solución a un problema con la ventaja de que no brinda
          la posibilidad de que seamos desordenados en nuestra concepción.
          Gráficamente se basa en representar todo el algoritmo dentro del marco
          de un rectángulo y a diferencia de la técnica anterior, la DRE se
          mueve básicamente con la utilización de tres símbolos que corresponden
          a cada una de las estructuras básicas de la lógica de programación.
          Estas representaciones son las siguientes:
        </p>

        <img src="../../public/diagrama-caja.png" alt="" />

        <p>
          Pero definitivamente la utilización efectiva de esta técnica de
          representación se ve con un ejemplo
        </p>

        <img src="../../public/ejemplo-diagrama-caja.png" alt="" />

        <p>
          <strong>Seudocódigos:</strong>La tercera técnica para representar
          algoritmos es la mas obvia y seguramente usted no le va a encontrar
          nada nuevo: es la técnica de los Seudocódigos. Qué es pues un
          Seudocódigo..? Pues sencillamente es la representación textual de un
          algoritmo de manera que dicho texto se encuentre enmarcado en algunas
          normas técnicas que faciliten su posterior transcripción a un lenguaje
          de Programación.
        </p>

        <p>
          Por lo dicho anteriormente es evidente que la técnica de Seudocódigo
          está muy orientada hacia los algoritmos computacionales. Cuando se
          habla de algunas normas estamos diciendo que existen unos requisitos
          que, si bien pueden ser violados, facilitan la posterior transcripción
          del algoritmo a un Lenguaje de programación de ser cumplidos a
          cabalidad. No debemos perder el faro que todas estas técnicas nos
          deben facilitar la posterior transcripción de los algoritmos. Para
          escribir pues un algoritmo bajo la forma de seudocódigo algunas de las
          normas son las siguientes:
        </p>

        <p>
          <strong>Primera Norma.</strong>Siempre se le ha de colocar un nombre
          al algoritmo de manera que sea lo primero que se lea. Es conveniente
          acostumbrarse a que dicho nombre no supere los ocho caracteres y
          preferiblemente que sea altamente mnemónico o sea que su nombre haga
          una referencia aproximada a lo que contiene.
        </p>

        <p>
          <strong>Segunda Norma.</strong>Luego de colocado el nombre del
          seudocódigo debemos a continuación declarar las variables con las
          cuales vamos a trabajar durante el programa. Todas las variables que
          vayan a ser utilizadas deben ser declaradas. Declararlas significa
          escribir el tipo de dato que van a almacenar y el nombre que dichas
          variables van a llevar.
        </p>

        <p>
          <strong>Tercera Norma.</strong>Todo el cuerpo del algoritmo deberá ir
          “encerrado” entre las palabras Inicio y Fin indicando en donde
          comienza y en donde termina el seudocódigo.
        </p>

        <p>
          <strong>Cuarta Norma.</strong>Cuando quiera que salga un título en la
          pantalla todo lo que tiene que hacer es utilizar la orden Escriba y a
          continuación colocar entre comillas dobles lo que quiera que salga en
          pantalla. Por ejemplo:
        </p>

        <img src="../../public/norma4-ejemplo.png" alt="" />

        <p>
          Si usted quiere que lo que salga en pantalla sea el contenido de una
          variable todo lo que tiene que hacer es utilizar la orden Escriba y a
          continuación y sin comillas dobles el nombre de la variable que quiere
          escribir. Por ejemplo:
        </p>

        <img src="../../public/norma4-ejemplo2.png" alt="" />

        <p>
          Si quiere que en pantalla salga un título y a continuación salga el
          contenido de la variable todo lo que tiene que hacer es colocar el
          título entre comillas dobles y, luego de haberlas cerrado, colocar el
          nombre de la variable que usted quiere escribir al lado del título.
          Por ejemplo:
        </p>

        <img src="../../public/norma4-ejemplo3.png" alt="" />

        <p>
          Si quiere mostrar en pantalla el contenido de varias variables
          entonces simplemente a continuación de la orden Escriba y separadas
          por comas puede escribir los nombres de las variables que usted quiere
          escribir. Por ejemplo:
        </p>

        <img src="../../public/norma4-ejemplo4.png" alt="" />

        <p>
          <strong>Quinta Norma.</strong>a. Cuando usted vaya a leer un dato para
          que sea almacenado en una variable determinada utilice la orden Lea.
          Para no tener que escribir (por ejemplo)
        </p>

        <img src="../../public/norma5-ejemplo1.png" alt="" />

        <p>
          b. Cuando necesite leer mas de un dato para ser almacenado en
          diferentes variables todo lo que tiene que hacer es utilizar la orden
          Lea y escribir las variables separadas por comas. Por ejemplo: "Lea a,
          b"
        </p>

        <p>
          Suponiendo que tanto a como b son variables de tipo entero, esta orden
          le indicará al computador que lea un dato entero y lo almacene en la
          variable a y luego que lea otro dato entero y lo almacene en la
          variable b.
        </p>

        <p>
          c. No necesariamente cuando se lean dos o mas variables utilizando una
          sola orden Lea, éstas deben ser del mismo tipo. Por ejemplo: "Lea
          var_e, var_r, var_c"
        </p>

        <p>
          Asumiendo que var_e es una variable de tipo entero, var_r es una
          variable de tipo real y var_c es una variable de tipo carácter, esta
          orden le indicará al computador que lea un valor entero y lo almacene
          en la variable var_e, luego que lea un valor real y lo almacene en la
          variable var_r y luego que lea un carácter y lo almacene en la
          variable var_c.
        </p>

        <p>
          <strong>Sexta Norma.</strong>Cuando necesite tomar una decisión deberá
          utilizar la orden Si, a continuación escribir la condición
          correspondiente y luego las instrucciones que se han de realizar en
          caso de que la condición sea Verdadera. En caso de que la condición
          sea Falsa y tenga instrucciones a realizarse cuando así sea entonces
          deberá existir una alternativa Sino. Al finalizar toda la decisión
          deberá existir un indicador Fin_Si. La estructura entonces será la
          siguiente:
        </p>

        <img src="../../public/norma6-ejemplo1.png" alt="" />

        <p>
          Las condiciones pueden ser expresadas utilizando los siguientes
          Operadores Relacionales que son los símbolos que nos van a permitir
          obtener una respuesta Verdadera o Falsa:
        </p>

        <img src="../../public/norma6-ejemplo2.png" alt="" />

        <p>
          Cuando éramos niños y nos decían, al mandarnos a la tienda, tráigame
          una gaseosa y un pan de $ 100,oo. teníamos varias opciones. a. Si no
          traíamos ninguna de las dos cosas entonces no habíamos cumplido la
          orden. b. Si no traíamos la gaseosa pero sí traíamos el pan de $100,oo
          tampoco habíamos cumplido la orden c. Si traíamos la gaseosa pero no
          traíamos el pan de $100,oo tampoco habíamos cumplido la orden d. Si
          traíamos la gaseosa y también traíamos el pan de $100,oo entonces allí
          sí habíamos cumplido la orden completamente.
        </p>

        <p>
          Para este ejemplo, y tal como lo hacía nuestra progenitora, asumimos
          que cumplir la orden es hacer el “mandado” completo. Igualmente vamos
          a asumir la frase Hemos cumplido la orden como un Verdadero ( V ) y la
          frase No hemos cumplido la orden como un Falso ( F ). De esta forma
          podríamos organizar la siguiente tabla de verdad:
        </p>

        <img src="../../public/norma6-cuadro.png" alt="" />

        <p>
          Puede notar usted que solamente habremos cumplido la orden
          completamente si hemos cumplido cada una de las ordenes o de lo que
          aquí hemos llamado Condición 1 y Condición 2. Igualmente puede usted
          notar que en el título de la tercera columna hay una Y un poco mas
          grande que el resto del texto. Precisamente esa es el primer operador
          booleano que vamos a conocer. Es el operador Y que en la mayoría de
          los libros se conoce como el operador AND y que precisamente aquí lo
          vamos a llamar AND. Su tabla de verdad es la que está expuesta en ese
          ejemplo por lo cual podemos concluir que cuando utilizamos un operador
          AND solamente genera Verdadero si ambas condiciones se cumplen (no
          olvide que se habla de ambas condiciones porque el operador AND puede
          “conectar” solamente dos condiciones) y en cualquier otro caso genera
          Falso.
        </p>

        <p>
          <strong>Séptima Norma.</strong>Se utilizará como estructura de ciclo
          básica la siguiente:
        </p>

        <img src="../../public/norma7-ejemplo.png" alt="" />

        <p>
          Algunos libros escriben "Mientras que" en vez de "Mientras" solo pero
          esas minucias no son de importancia pues obedecen mas a capricho de
          autores que a alguna razón de fondo frente a la lógica. En el Cuerpo
          del Ciclo se colocan las ordenes que se van a repetir (o iterar)
          mientras la condición sea Verdadera. El Fin_Mientras le indicará
          posteriormente hasta donde llega el bloque de instrucciones u órdenes
          y determinar a partir de donde se devuelve el control del algoritmo
          para evaluar la condición. La forma de ejecución de los ciclos se
          explicará apropiadamente en el capítulo de ciclos así como las otras
          formas referenciales que existen para expresar ciclos
        </p>

        <p>
          <strong>Octava Norma.</strong>Cada que usted vaya a utilizar un
          conjunto de instrucciones deberá indicar claramente en donde comienza
          ese conjunto de instrucciones y en donde termina utilizando
          apropiadamente las palabras Inicio y Fin.
        </p>
      </article>
      <div id="video">
        <p>Vídeo explicativo de resumen</p>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/watch?v=rNY5eWogl18"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </section>
    <router-link to="/courses/intro-prog/decisiones">
      <button>Siguiente Lección</button>
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