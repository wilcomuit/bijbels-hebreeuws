const questions: Array<QuestionType> = [
  {
    question: 'הוּא',
    answers: ['hij'],
    type: 'woordenschat'
  },
  {
    question: 'הִיא',
    answers: ['zij'],
    type: 'woordenschat'
  },
  {
    question: 'אַתָּה',
    answers: ['jij'],
    type: 'woordenschat'
  },
  {
    question: 'אַתְּ',
    answers: ['jij'],
    type: 'woordenschat'
  },
  {
    question: 'אֲנִי',
    answers: ['ik'],
    type: 'woordenschat'
  },
  {
    question: 'אָנֹכִי',
    answers: ['ik'],
    type: 'woordenschat'
  },
  {
    question: 'הֵם',
    answers: ['zij'],
    type: 'woordenschat'
  },
  {
    question: 'הֵמָּה',
    answers: ['zij'],
    type: 'woordenschat'
  },
  {
    question: 'הֵנָּה',
    answers: ['zij'],
    type: 'woordenschat'
  },
  {
    question: 'אַתֶּם',
    answers: ['jullie'],
    type: 'woordenschat'
  },
  {
    question: 'אַתֵּן',
    answers: ['jullie'],
    type: 'woordenschat'
  },
  {
    question: 'אַתֵּנָה',
    answers: ['jullie'],
    type: 'woordenschat'
  },
  {
    question: 'נַחְנוּ',
    answers: ['wij'],
    type: 'woordenschat'
  },
  {
    question: 'אֲנַחְנוּ',
    answers: ['wij'],
    type: 'woordenschat'
  },
]
const lesson8PersonalPronouns: LessonType = {
  id: 'lesson8-personal-pronouns',
  name: 'Les 8 – Persoonlijk voornaamwoord',
  type: 'woordenschat',
  active: false,
  questions
}
export default lesson8PersonalPronouns
