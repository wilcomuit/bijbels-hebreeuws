<script setup lang="ts">
import { useHebrewPracticeStore } from '@/stores/practice'
import { useStateStore } from '@/stores/state'

const emit = defineEmits(['setHideAnswer'])
const props = defineProps({
  hideAnswer: {
    type: Boolean,
    required: true
  }
})

const showAnswer = () => {
  if (props.hideAnswer) useHebrewPracticeStore().addHintCount()
  emit('setHideAnswer', false)
}
</script>

<template>
  <hr />
  <p v-if="hideAnswer" class="answer" @click="showAnswer()">Toon antwoord</p>
  <p
    v-else-if="['woordenschat', 'sentence'].includes(useHebrewPracticeStore().currentQuestion.type)"
    class="answer"
  >
    {{ useHebrewPracticeStore().currentQuestion.answers.join(', ') }}
    {{ useHebrewPracticeStore().currentQuestion.explanation }}
  </p>
  <p>
    Goede antwoorden:
    <span style="color: green">{{ useHebrewPracticeStore().correctAnswerCount }}</span> /
    {{ useHebrewPracticeStore().totalCount }}
  </p>
  <p>
    Foute antwoorden: <span style="color: red">{{ useHebrewPracticeStore().wrongAnswerCount }}</span>
  </p>
  <p>Hints getoond: {{ useHebrewPracticeStore().hintCount }}</p>

  <button v-if="useHebrewPracticeStore().wrongAnswerCount > 0"
          @click="useHebrewPracticeStore().addHintCount(); useStateStore().setState('wrongAnswers')">Fouten inzien</button>

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

.question-font {
  font-family: 'OpenSans';
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
