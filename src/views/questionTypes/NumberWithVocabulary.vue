<script setup lang="ts">
import { useHebrewPracticeStore } from '@/stores/practice'
import { computed, ref } from 'vue'


const answerInput: any = ref(null)

const submittedVocabulary: any = ref('')

const submitAnswer = (answer: string) => {
  emit('setHideAnswer', true)
  useHebrewPracticeStore().submitAnswer(answer, submittedVocabulary.value)
  answerInput.value.value = ''
  submittedVocabulary.value = ''
}
const emit = defineEmits(['setHideAnswer'])
const props = defineProps({
  hideAnswer: {
    type: Boolean,
    required: true
  }
})

const inputAnswer = () => {
  submittedVocabulary.value = answerInput?.value?.value?.toLowerCase()
}

const answers = computed(() => useHebrewPracticeStore().currentQuestion.answers)
</script>

<template>

  <div v-show='!submittedVocabulary'>
    <p
      style="margin-top: 15px"
    >
      Geef de vertaling van nominatief enkelvoud van bovenstaand woord.<br>
      Klik op enter om naar de volgende vraag te gaan.

    </p>


    <div>
      <input ref="answerInput" type="text" @keyup.enter="inputAnswer()" />
    </div>
    <p
      style="margin-top: 15px"
    >
    </p>

  </div>
  <div v-show='submittedVocabulary'>
    <table>
      <tr>
        <th>Mannelijk</th>
        <th>Vrouwelijk</th>
      </tr>
      <tr>
        <td>
          <button
            @click="submitAnswer('m_abs')"
            :class="{ 'correct-answer': !hideAnswer && answers.includes('m_abs') }"
          >
            Absolutus
          </button>
        </td>
        <td>
          <button
            @click="submitAnswer('f_abs')"
            :class="{ 'correct-answer': !hideAnswer && answers.includes('f_abs') }"
          >
            Absolutus
          </button>
        </td>
      </tr>
      <tr>
        <td>
          <button
            @click="submitAnswer('m_cst')"
            :class="{ 'correct-answer': !hideAnswer && answers.includes('m_cst') }"
          >
            Constructus
          </button>
        </td>
        <td>
          <button
            @click="submitAnswer('f_cst')"
            :class="{ 'correct-answer': !hideAnswer && answers.includes('f_cst') }"
          >
            Constructus
          </button>
        </td>
      </tr>
    </table>

  </div>


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
