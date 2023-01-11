<template>
  <main class="app">
    <h1>Realiza el siguiente cuestionario</h1>
    <section class="quiz" v-if="!quizCompleted">
      <div class="quiz-info">
        <span class="question">{{ getCurrentQuestion.question }}</span>
        <span class="score"> Puntaje {{ score }}/{{ questions.length }}</span>
      </div>
      <div class="options">
        <label
          v-for="(option, index) in getCurrentQuestion.options"
          :key="index"
          :class="`option ${
            getCurrentQuestion.selected == index
              ? index == getCurrentQuestion.answer
                ? 'correct'
                : 'wrong'
              : ''
          }${
            getCurrentQuestion.selected != null &&
            index != getCurrentQuestion.selected
              ? 'disabled'
              : ''
          }`"
        >
          <input
            type="radio"
            :name="getCurrentQuestion.index"
            :value="index"
            v-model="getCurrentQuestion.selected"
            :disable="getCurrentQuestion.selected"
            @change="setAnswer"
          />
          <span>{{ option }}</span>
        </label>
      </div>
      <button @click="nextQuestion" :disabled="!getCurrentQuestion.selected">
        {{
          getCurrentQuestion.index == questions.length - 1
            ? "Completado"
            : getCurrentQuestion.selected == null
            ? "Selecciona una opción"
            : "Siguiente pregunta"
        }}
      </button>
    </section>
    <section v-else>
      <h2>Has completado el questionario</h2>
      <p>Tu puntaje es {{ score }} / {{ questions.length }}</p>
      <router-link to="/course-list">
        <button id="submit" @click="writeObjectData()">
          Guardar resultado
        </button>
      </router-link>
    </section>
  </main>
</template>

<script setup>
import { ref, computed } from "vue";
import { writeObjectData } from "@/firebase/init";
import store from "@/store/usr-store";

writeObjectData(
  {
    name: "Introduccion a la Programación",
    isCompleted: true,
    email: store.state.user.email,
  },
  "/users/" + store.state.user.uid
);

const questions = ref([
  {
    question: "¿Qué es una variable?",
    answer:
      "Es un espacio de memoria que guarda un valor puede cambiar con el tiempo",
    options: [
      "Es un espacio de memoria cuyo valor nunca cambia con el tiempo",
      "Es un espacio de memoria que guarda un valor puede cambiar con el tiempo",
      "Es una pieza de la PC que se encarga de la salida de audio",
    ],
    selected: null,
  },
  {
    question: "¿Para qué sirven los operadores matemáticos en la programación?",
    answer: "Nos permiten expresar relaciones entre variables y/o constantes",
    options: [
      "Nos permiten expresar relaciones entre variables y/o constantes",
      "Nos permiten abrir la terminal de la PC",
      "Nos permiten guardar valores dentro de un espacio de memoria",
    ],
    selected: null,
  },
  {
    question:
      "¿En cuántas líneas debemos de escribir las operaciones matemáticas al momento de programar?",
    answer: "Una línea",
    options: ["Dos líneas", "Una línea", "Siete líneas"],
    selected: null,
  },
]);

const quizCompleted = ref(false);
const currentQuestion = ref(0);
const score = computed(() => {
  let value = 0;
  questions.value.map((q) => {
    if (q.selected == q.answer) {
      value++;
    }
  });
  return value;
});

const getCurrentQuestion = computed(() => {
  let question = questions.value[currentQuestion.value];
  question.index = currentQuestion.value;
  return question;
});

const setAnswer = (e) => {
  questions.value[currentQuestion.value].selected = e.target.value;
  e.target.value = null;
};

const nextQuestion = () => {
  if (currentQuestion.value < questions.value.length - 1) {
    currentQuestion.value++;
    return;
  }
  quizCompleted.value = true;
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif, "Monserrat";
}

body {
  background-color: blue;
  color: white;
}
.app {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  height: 100vh;
}

h1 {
  font-size: 2rem;
  margin-bottom: 2rem;
}

.quiz {
  background-color: white;
  padding: 1rem;
  width: 100%;
  max-width: 650px;
}

.quiz-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.quiz-info .question {
  color: black;
  font-size: 1.5rem;
}

.quiz-info .score {
  color: white;
  font-size: 1.25rem;
}

.options {
  margin-bottom: 1rem;
}

.option {
  padding: 1rem;
  display: block;
  margin-bottom: 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
}

.option.hover {
  background-color: orange;
}
.option.correct {
  background-color: green;
}
.option.wrong {
  background-color: red;
}

.option:last-of-type {
  margin-bottom: 0;
}

.option.disabled {
  opacity: 0.5;
}

.option.input {
  display: none;
}

button {
  appearance: none;
  outline: none;
  border: none;
  cursor: pointer;
  padding: 1rem 2rem;
  margin-left: 12rem;
  background-color: green;
  color: black;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 1.2rem;
  border-radius: 0.5rem;
}

button:disabled {
  opacity: 0.5;
}

h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
}

p {
  color: green;
  font-size: 1.5rem;
  text-align: center;
}
</style>