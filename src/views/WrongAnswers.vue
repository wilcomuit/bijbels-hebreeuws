<script setup lang="ts">
import type { Header, Item } from "vue3-easy-data-table";

import { ref, computed, type Ref } from 'vue'
import { useHebrewPracticeStore } from '@/stores/practice'
import { useStateStore } from '@/stores/state'

const headers: Ref<Header[]> = ref([
  { text: "Vraag", value: "question", sortable: true },
  { text: "Gegeven antwoord", value: "wrongAnswer" },
  { text: "Goede antwoord", value: "correctAnswer" }
])

const items = computed(() => {
  return useHebrewPracticeStore().wrongAnswers
})


</script>

<template>
  <main class="wrong-answers-screen">
    <div class="result-block">
      <h1 v-if="useHebrewPracticeStore().questions.length === 0">Ga terug naar het menu om opnieuw te oefenen.</h1>
      <h1 v-if="useHebrewPracticeStore().questions.length > 0">Ga terug naar de vragen om verder te oefenen.</h1>
      <h2>
        Foute antwoorden:
        <span style="color: red">{{ useHebrewPracticeStore().wrongAnswerCount }}</span>
      </h2>
    </div>

    <EasyDataTable
      :headers="headers"
      :items="items"
      alternating
      border-cell

    />

    <button v-if="useHebrewPracticeStore().questions.length === 0" class="menu-button" @click="useStateStore().setState('endScreen')">Terug
      naar
      eindscherm</button>
    <button v-if="useHebrewPracticeStore().questions.length > 0"  class="question-button"
            @click="useStateStore().setState('practice')">Terug naar vragen</button>
  </main>
</template>



<style lang="scss">
.menu-button {
  margin-top: 20px;
  margin-right: 2px;
}
.question-button {
  margin-top: 20px;
  margin-left: 2px;
}
.wrong-answers-screen {
  text-align: center;

  .result-block {
    margin-top: 5%;
  }
}
</style>
