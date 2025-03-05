const questions: Array<QuestionType> = [
  {
    question: 'אֶל',
    answers: ['tot', 'naar'],
    type: 'woordenschat'
  },
  {
    question: 'אֶת',
    answers: ['met'],
    type: 'woordenschat'
  },
  {
    question: 'בְּ',
    answers: ['in', 'onder', 'bij'],
    type: 'woordenschat'
  },
  {
    question: 'כְּ',
    answers: ['zoals'],
    type: 'woordenschat'
  },
  {
    question: 'לְ',
    answers: ['aan', 'tot', 'voor'],
    type: 'woordenschat'
  },
  {
    question: 'מִן',
    answers: ['van', 'uit'],
    type: 'woordenschat'
  },
  {
    question: 'עַד',
    answers: ['tot'],
    type: 'woordenschat'
  },
  {
    question: 'עַל',
    answers: ['op', 'naar'],
    type: 'woordenschat'
  },
  {
    question: 'עִם',
    answers: ['met'],
    type: 'woordenschat'
  }
]
const lesson5Prepositions: LessonType = {
  id: 'lesson5-prepositions',
  name: 'Les 5 – Voorzetsels',
  type: 'woordenschat',
  active: false,
  questions
}
export default lesson5Prepositions
