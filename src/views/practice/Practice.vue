<script setup lang="ts">
import { ref, computed, type Ref } from 'vue'
import { useHebrewPracticeStore } from '@/stores/practice'
import { useStateStore } from '@/stores/state'
import Conjugation from '@/views/questionTypes/Conjugation.vue'
import Footer from './Footer.vue'
import Vocabulary from '@/views/questionTypes/Vocabulary.vue'
import Sentence from '@/views/questionTypes/Sentence.vue'
import PersonalPronouns from '@/views/questionTypes/PersonalPronouns.vue'

const answerInput: any = ref(null)
const hideAnswer: Ref<boolean> = ref(true)

const inputAnswer = () => {
  hideAnswer.value = true
  useHebrewPracticeStore().submitAnswer(answerInput?.value?.value?.toLowerCase())
  answerInput.value.value = ''
}

const questionPrefix = computed(() => {
  const questionPrefix: any = {
    woordenschat: 'Vertaal naar het Nederlands:',
    vervoeging: 'Klik op de bijbehorende vervoeging:'
  }
  return questionPrefix[useHebrewPracticeStore().currentQuestion.type]
})

//:class="['question', useHebrewPracticeStore().font]"
</script>

<template>
  <main class="practice-screen" v-if="useStateStore().state === 'practice'">
    <button class="menu-button" @click="useStateStore().setState('menu')">Terug naar menu</button>

    <div class="question-block">
      <h1 v-if="questionPrefix">{{ questionPrefix }}</h1>
      <h2 class="question question-font" @click='useHebrewPracticeStore().speak(useHebrewPracticeStore().currentQuestion.question)'>{{ useHebrewPracticeStore().currentQuestion.question
        }}</h2>
      <Vocabulary
        v-if="useHebrewPracticeStore().currentQuestion.type === 'woordenschat'"
        @setHideAnswer="(val) => (hideAnswer = val)"
      />
      <Sentence
        v-if="useHebrewPracticeStore().currentQuestion.type === 'sentence'"
        @setHideAnswer="(val) => (hideAnswer = val)"
      />
      <PersonalPronouns
        v-if="useHebrewPracticeStore().currentQuestion.type === 'personal-pronouns'"
        :hide-answer="hideAnswer"
        @setHideAnswer="(val) => (hideAnswer = val)"
      />
      <Conjugation
        v-if="useHebrewPracticeStore().currentQuestion.type === 'vervoeging'"
        :hide-answer="hideAnswer"
        @setHideAnswer="(val) => (hideAnswer = val)"
      />
      <Footer :hide-answer="hideAnswer" @setHideAnswer="(val) => (hideAnswer = val)" />
    </div>

    <span v-if="false" style="color: green">✔</span>
    <span v-if="false" style="color: red">✘</span>
  </main>
</template>

<style lang="scss">
.practice-screen {
  text-align: center;
  .question-block {
    margin-top: 5%;
  }
  .question {
    margin-top: 25px;
    margin-bottom: 30px;
  }
  .answer {
    border: 1px solid black;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
    width: 350px;
  }
}
.menu-button {
  margin-top: 20px;
}
.question-font {
  font-family: 'Hebrew';
}

.correct-answer {
  background-color: lightgreen;
}

table {
  border-collapse: collapse;
  width: auto;
  margin-left: auto;
  margin-right: auto;
}

td,
th {
  text-align: center;
  padding: 8px;
}

th:nth-child(even),
td:nth-child(even) {
  border-left: 1px solid #dddddd;
}
</style>
