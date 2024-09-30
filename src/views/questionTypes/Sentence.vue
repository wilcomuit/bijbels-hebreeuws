<script setup lang="ts">
import { useHebrewPracticeStore } from '@/stores/practice'
import { type Ref, ref } from 'vue'

const chosenIndexes: Ref<Array<number>> = ref([])

const emit = defineEmits(['setHideAnswer'])
const addOption = (index: number) => {
  chosenIndexes.value.push(index)
}

const removeOption = (index: number) => {
  chosenIndexes.value.splice(index, 1)
}

const submit = () => {
  emit('setHideAnswer', true)

  const answers = []
  for (const index of chosenIndexes.value) {
    answers.push(useHebrewPracticeStore().currentQuestion.mixedQuestions[index])
  }
  useHebrewPracticeStore().submitAnswer(answers.join('').toLowerCase())
  chosenIndexes.value = []
}
</script>

<template>
  <div class="answer-outer-container">
    <div class="answer-inner-container">
      <button
        class="option-button"
        v-for="(questionIndex, answerIndex) in chosenIndexes"
        @click="removeOption(answerIndex)"
      >
        {{ useHebrewPracticeStore().currentQuestion.mixedQuestions[questionIndex] }}
      </button>
    </div>
    <button class="submit-button" @click="submit()">></button>
  </div>

  <div class="option-container">
    <button
      class="option-button"
      v-for="(answer, index) in useHebrewPracticeStore().currentQuestion.mixedQuestions"
      :disabled="chosenIndexes.includes(index)"
      @click="addOption(index)"
    >
      {{ answer }}
    </button>
  </div>
</template>

<style lang="scss">
.answer-outer-container {
  width: auto;
  margin: auto;
  margin-bottom: 30px;
  display: inline-block;
  min-height: 50px;

  .answer-inner-container {
    width: 310px;
    min-height: inherit;
    float: left;
    padding: 4px;
    border: 1px solid black;
  }
  .submit-button {
    float: left;
    min-height: inherit;
    border: 1px solid black;
    width: 40px;
    border-left: none;
  }

  .option-button {
    float: left;
  }
}

.option-container {
  margin: 0 auto;
  width: 350px;
  border: 1px solid black;
}

.option-button {
  margin: 5px;
  border: 1px solid black;
}
</style>
