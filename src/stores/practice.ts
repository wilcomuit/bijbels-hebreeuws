import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'
import { useStateStore } from './state'
import { useLessonsStore } from './lessons'

export const useHebrewPracticeStore = defineStore('hebrewPractice', () => {
  //const fonts = ['deja-vu-font', 'open-sans-font', 'ubuntu-font']
  //const font: Ref<string> = ref('ubuntu-font')
  const questions: Ref<Array<any>> = ref([])
  const currentQuestion: Ref<any> = ref({})

  const wrongAnswers: Ref<any> = ref([])
  const wrongAnswerCount = ref(0)
  const correctAnswerCount = ref(0)
  const hintCount = ref(0)
  const totalCount = ref(0)

  const voice: Ref<any> = ref(null)

  function startPractice() {
    for (const lesson of useLessonsStore().getActiveLessons()) {
      for (const question of lesson.questions as Array<MixedQuestionType>) {

        if (question.type === 'vervoeging' || question.type ==='numbers-woordenschat') {
          const results: Array<any> = []
          for (const [key, value] of Object.entries(question)) {
            if (key === 'type' || key === 'vocabularyAnswers') continue
            const foundResult = results.find((r: any) => r.question === value)
            if (foundResult) foundResult.answers.push(key)
            else
              results.push({
                question: value,
                answers: [key],
                vocabularyAnswers: question.vocabularyAnswers,
                type: question.type
              })
          }
          if (useStateStore().options.allConjugations) {
            questions.value = [...questions.value, ...results]
          } else {
            const conjugationIndex = Math.floor(Math.random() * results.length)
            questions.value.push(results[conjugationIndex])
          }
        } else {
          questions.value.push(question)
        }
      }
    }
    totalCount.value = questions.value.length
    getNextRandomQuestion()
    useStateStore().setState('practice')
  }

  function resetQuestions() {
    questions.value = []
    wrongAnswers.value = []
    wrongAnswerCount.value = 0
    correctAnswerCount.value = 0
    hintCount.value = 0
    useLessonsStore().deactivateLessons()
  }

  function addHintCount() {
    hintCount.value++
  }


  async function speak(text: string) {
    if (!voice.value) return
    const msg = new SpeechSynthesisUtterance(text);
    msg.voice = voice.value;
    msg.rate = 0.5
    window?.speechSynthesis?.cancel()
    window?.speechSynthesis.speak(msg);
  }

  function getNextRandomQuestion() {
    if (questions.value.length === 0) return false
    const index = Math.floor(Math.random() * questions.value.length)
    const question = questions.value[index]
    currentQuestion.value = question
    if (currentQuestion.value.type === 'sentence')
      currentQuestion.value.mixedQuestions = shuffleArray([
        ...question.correctOptions,
        ...question.wrongOptions
      ])


    speak(question.question)

    return currentQuestion.value
  }

  function getAllConjugationAnswers(question: ConjugationQuestionType, chosenAnswer: string) {
    const results = []
    for (const [key, value] of Object.entries(question)) {
      if (value === chosenAnswer) results.push(key)
    }
    return results
  }

  function submitAnswer(answer: string, vocabularyAnswer: string = '') {
    if (
      (['numbers-woordenschat'].includes(currentQuestion.value.type) &&
        currentQuestion.value.answers
        .map((answer: string) => answer.toLowerCase())
        .includes(answer)&& currentQuestion.value.vocabularyAnswers
        .map((answer: string) => answer.toLowerCase())
        .includes(vocabularyAnswer))
      ||
      (['vervoeging', 'woordenschat', 'personal-pronouns', 'attached-personal-pronouns'].includes(currentQuestion.value.type) &&
        currentQuestion.value.answers
          .map((answer: string) => answer.toLowerCase())
          .includes(answer)) ||
      (currentQuestion.value.type === 'sentence' &&
        currentQuestion.value.answers
          .map((answer: string) => answer.split(' ').join('').toLowerCase())
          .includes(answer))
    ) {
      correctAnswerCount.value++
      if (useStateStore().options.deleteAfterSuccess === true) {
        questions.value = questions.value.filter(
          (question: any) => question.question !== currentQuestion.value.question
        )
      }
    } else {

      const tempObject = {
        question: currentQuestion.value.question,
        // @ts-ignore
        wrongAnswer: answer?.replaceAll('_', ' '),
        correctAnswer: currentQuestion.value.answers.join(', ')?.replaceAll('_', ' ')
      }
      
      if(currentQuestion.value.type === 'numbers-woordenschat') {
        tempObject.wrongAnswer += `: ${vocabularyAnswer}`
        tempObject.correctAnswer += `: ${currentQuestion.value.vocabularyAnswers.join(', ')?.replaceAll('_', ' ')}`
      }
      wrongAnswers.value.push(tempObject)
      wrongAnswerCount.value++
    }
    if (questions.value.length === 0) useStateStore().setState('endScreen')
    getNextRandomQuestion()
  }

  function shuffleArray(array: Array<string>) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[array[i], array[j]] = [array[j], array[i]]
    }
    return array
  }

  function setVoice(newVoice: any) {
    voice.value = newVoice
  }

  return {
    //font,
    questions,
    totalCount,
    currentQuestion,
    wrongAnswerCount,
    wrongAnswers,
    correctAnswerCount,
    hintCount,
    speak,
    addHintCount,
    startPractice,
    resetQuestions,
    getNextRandomQuestion,
    submitAnswer,
    setVoice
  }
})
