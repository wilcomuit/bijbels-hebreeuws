const questions: Array<QuestionType> = [
  {
    question: 'אָב',
    answers: ['vader', 'voorvader'],
    type: 'woordenschat'
  },
  {
    question: 'אָה',
    answers: ['broer', 'broeder'],
    type: 'woordenschat'
  }
]
const lesson2Vocabulary: LessonType = {
  id: 'lesson2-vocabulary',
  name: 'Les 2 – Woordenschat',
  type: 'woordenschat',
  active: false,
  questions
}
export default lesson2Vocabulary
