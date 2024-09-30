<script setup lang="ts">
import { useHebrewPracticeStore } from '@/stores/practice'
import { ref } from 'vue'

const answerInput: any = ref(null)

const inputAnswer = () => {
  emit('setHideAnswer', true)
  useHebrewPracticeStore().submitAnswer(answerInput?.value?.value?.toLowerCase())
  answerInput.value.value = ''
}

const emit = defineEmits(['setHideAnswer'])
</script>

<template>
  <div v-if="useHebrewPracticeStore().currentQuestion.type === 'woordenschat'">
    <input ref="answerInput" type="text" @keyup.enter="inputAnswer()" />
  </div>
  <p
    v-if="useHebrewPracticeStore().currentQuestion.type === 'woordenschat'"
    style="margin-top: 15px"
  >
    Klik op enter om naar de volgende vraag te gaan.
  </p>
</template>

<style lang="scss">
.menu-button {
  margin-top: 20px;
}
.end-screen {
  text-align: center;

  .result-block {
    margin-top: 5%;
  }
}
</style>
