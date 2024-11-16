<script setup lang="ts">
import { useLessonsStore } from '../stores/lessons'
import { useHebrewPracticeStore } from '../stores/practice'
import { type Ref, ref } from 'vue'

const error: Ref<string> = ref('')
const setupTTS = () => {
  try {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return
    window.speechSynthesis.addEventListener("voiceschanged", function() {
      for (const newVoice of window?.speechSynthesis?.getVoices()||[]) {
        if (newVoice.lang === 'he-IL') {
          useHebrewPracticeStore().setVoice(newVoice)
          break
        }
      }
    });
  }catch (e) {
error.value = JSON.stringify(e)
  }
}
setupTTS()




</script>

<template>
  <main class="main-menu">
    <h1>Welkom!</h1>

    {{error }}
    <h3>Selecteer items om te oefenen.</h3>
    <div v-for="lesson in useLessonsStore().lessons" :key="lesson.id">
      <input
        type="checkbox"
        @change="useLessonsStore().toggleLesson(lesson.id)"
        :id="'lesson-' + lesson.id"
      /><label :for="'lesson-' + lesson.id" style="margin-left: 5px" v-html="lesson.name"></label>
    </div>
    <button
      @click="useHebrewPracticeStore().startPractice()"
      :disabled="useLessonsStore().getActiveLessons().length === 0"
    >
      Start
    </button>
  </main>
</template>

<style lang="scss">
.main-menu {
  text-align: center;
  margin-left: 5px;
  margin-right: 5px;
  button {
    margin-top: 10px;
    margin-bottom: 10px;
  }
  input {
    margin-top: 10px;
    margin-bottom: 10px;
  }
}
</style>
