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

  function startPractice() {
    for (const lesson of useLessonsStore().getActiveLessons()) {
      for (const question of lesson.questions as Array<MixedQuestionType>) {
        if (question.type === 'vervoeging') {
          const results: Array<any> = []
          for (const [key, value] of Object.entries(question)) {
            if (key === 'type') continue
            const foundResult = results.find((r: any) => r.question === value)
            if (foundResult) foundResult.answers.push(key)
            else
              results.push({
                question: value,
                answers: [key],
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
    console.log(currentQuestion)
    return currentQuestion.value
  }

  function getAllConjugationAnswers(question: ConjugationQuestionType, chosenAnswer: string) {
    const results = []
    for (const [key, value] of Object.entries(question)) {
      if (value === chosenAnswer) results.push(key)
    }
    return results
  }

  function submitAnswer(answer: string) {
    if (
      (['vervoeging', 'woordenschat'].includes(currentQuestion.value.type) &&
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

      wrongAnswers.value.push({
        question: currentQuestion.value.question,
        // @ts-ignore
        wrongAnswer: answer?.replaceAll('_', ' '),
        correctAnswer: currentQuestion.value.answers.join(', ')?.replaceAll('_', ' ')
      })
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

  return {
    //font,
    questions,
    totalCount,
    currentQuestion,
    wrongAnswerCount,
    wrongAnswers,
    correctAnswerCount,
    hintCount,
    addHintCount,
    startPractice,
    resetQuestions,
    getNextRandomQuestion,
    submitAnswer
  }
})
