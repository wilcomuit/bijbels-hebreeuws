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
          @click="submitAnswer('ev_hij')"
          :class="{ 'correct-answer': !hideAnswer && answers.includes('ev_hij') }"
        >
          Hij
        </button>
      </td>
      <td>
        <button
          @click="submitAnswer('mv_zij_m')"
          :class="{ 'correct-answer': !hideAnswer && answers.includes('mv_zij_m') }"
        >
          Zij (m)
        </button>
      </td>
    </tr>
    <tr>
      <td>
        <button
          @click="submitAnswer('ev_zij')"
          :class="{ 'correct-answer': !hideAnswer && answers.includes('ev_zij') }"
        >
          Zij
        </button>
      </td>
      <td>
        <button
          @click="submitAnswer('mv_zij_v')"
          :class="{ 'correct-answer': !hideAnswer && answers.includes('mv_zij_v') }"
        >
          Zij (v)
        </button>
      </td>
    </tr>
    <tr>
      <td>
        <button
          @click="submitAnswer('ev_jij_m')"
          :class="{ 'correct-answer': !hideAnswer && answers.includes('ev_jij_m') }"
        >
          Jij (m)
        </button>
      </td>
      <td>
        <button
          @click="submitAnswer('mv_jullie_m')"
          :class="{ 'correct-answer': !hideAnswer && answers.includes('mv_jullie_m') }"
        >
          Jullie (m)
        </button>
      </td>
    </tr>
    <tr>
      <td>
        <button
          @click="submitAnswer('ev_jij_v')"
          :class="{ 'correct-answer': !hideAnswer && answers.includes('ev_jij_v') }"
        >
          Jij (v)
        </button>
      </td>
      <td>
        <button
          @click="submitAnswer('mv_jullie_v')"
          :class="{ 'correct-answer': !hideAnswer && answers.includes('mv_jullie_v') }"
        >
          Jullie (v)
        </button>
      </td>
    </tr>
    <tr>
      <td>
        <button
          @click="submitAnswer('ev_ik')"
          :class="{ 'correct-answer': !hideAnswer && answers.includes('ev_ik') }"
        >
          Ik
        </button>
      </td>
      <td>
        <button
          @click="submitAnswer('mv_wij')"
          :class="{ 'correct-answer': !hideAnswer && answers.includes('mv_wij') }"
        >
          Wij
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
