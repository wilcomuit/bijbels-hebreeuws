<script setup lang="ts">
import { useHebrewPracticeStore } from '@/stores/practice'
import { computed } from 'vue'

const submitAnswer = (answer: string) => {
  emit('setHideAnswer', true)
  useHebrewPracticeStore().submitAnswer(answer)
}
const emit = defineEmits(['setHideAnswer'])
const props = defineProps({
  hideAnswer: {
    type: Boolean,
    required: true
  }
})

const answers = computed(() => useHebrewPracticeStore().currentQuestion.answers)
</script>

<template>
  <table>
    <tr>
      <th>Enkelvoud</th>
      <th>Meervoud</th>
    </tr>
    <tr>
      <td>
        <button
          @click="submitAnswer('ev_nominatief')"
          :class="{ 'correct-answer': !hideAnswer && answers.includes('ev_nominatief') }"
        >
          Nominatief
        </button>
      </td>
      <td>
        <button
          @click="submitAnswer('mv_nominatief')"
          :class="{ 'correct-answer': !hideAnswer && answers.includes('mv_nominatief') }"
        >
          Nominatief
        </button>
      </td>
    </tr>
    <tr>
      <td>
        <button
          @click="submitAnswer('ev_accusatief')"
          :class="{ 'correct-answer': !hideAnswer && answers.includes('ev_accusatief') }"
        >
          Accusatief
        </button>
      </td>
      <td>
        <button
          @click="submitAnswer('mv_accusatief')"
          :class="{ 'correct-answer': !hideAnswer && answers.includes('mv_accusatief') }"
        >
          Accusatief
        </button>
      </td>
    </tr>
    <tr>
      <td>
        <button
          @click="submitAnswer('ev_genitief')"
          :class="{ 'correct-answer': !hideAnswer && answers.includes('ev_genitief') }"
        >
          Genitief
        </button>
      </td>
      <td>
        <button
          @click="submitAnswer('mv_genitief')"
          :class="{ 'correct-answer': !hideAnswer && answers.includes('mv_genitief') }"
        >
          Genitief
        </button>
      </td>
    </tr>
    <tr>
      <td>
        <button
          @click="submitAnswer('ev_datief')"
          :class="{ 'correct-answer': !hideAnswer && answers.includes('ev_datief') }"
        >
          Datief
        </button>
      </td>
      <td>
        <button
          @click="submitAnswer('mv_datief')"
          :class="{ 'correct-answer': !hideAnswer && answers.includes('mv_datief') }"
        >
          Datief
        </button>
      </td>
    </tr>
  </table>
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
