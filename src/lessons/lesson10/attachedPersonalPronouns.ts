const questions: Array<ConjugationQuestionType> = [
  {
    question: 'וֹ-',
    answers: ['ev_hij'],
    type: 'attached-personal-pronouns'
  },
  {
    question: 'ה-ֹ',
    answers: ['ev_hij'],
    type: 'attached-personal-pronouns'
  },
  {
    question: 'הוּ-',
    answers: ['ev_hij'],
    type: 'attached-personal-pronouns'
  },
  {
    question: 'הּ-ָ',
    answers: ['ev_zij'],
    type: 'attached-personal-pronouns'
  },
  {
    question: 'הָ-',
    answers: ['ev_zij'],
    type: 'attached-personal-pronouns'
  },
  {
    question: 'ךָ-',
    answers: ['ev_jij_m'],
    type: 'attached-personal-pronouns'
  },
  {
    question: 'ךְ-',
    answers: ['ev_jij_v'],
    type: 'attached-personal-pronouns'
  },
  {
    question: 'י-ִ',
    answers: ['ev_ik'],
    type: 'attached-personal-pronouns'
  },
  {
    question: 'נִי-',
    answers: ['ev_ik'],
    type: 'attached-personal-pronouns'
  },
  {
    question: 'מוֹ-',
    answers: ['mv_zij_m'],
    type: 'attached-personal-pronouns'
  },
  {
    question: 'ם-ָ',
    answers: ['mv_zij_m'],
    type: 'attached-personal-pronouns'
  },
  {
    question: 'הֶם-',
    answers: ['mv_zij_m'],
    type: 'attached-personal-pronouns'
  },
  {
    question: 'הֵמָּה-',
    answers: ['mv_zij_m'],
    type: 'attached-personal-pronouns'
  },
  {
    question: 'ן-ָ',
    answers: ['mv_zij_v'],
    type: 'attached-personal-pronouns'
  },
  {
    question: 'הֶן-',
    answers: ['mv_zij_v'],
    type: 'attached-personal-pronouns'
  },
  {
    question: 'הֵנָּה-',
    answers: ['mv_zij_v'],
    type: 'attached-personal-pronouns'
  },
  {
    question: 'כֶם-',
    answers: ['mv_jullie_m'],
    type: 'attached-personal-pronouns'
  },
  {
    question: 'כֶן-',
    answers: ['mv_jullie_v'],
    type: 'attached-personal-pronouns'
  },
  {
    question: 'נוּ-',
    answers: ['mv_wij'],
    type: 'attached-personal-pronouns'
  }
]
const lesson10AttachedPersonalPronouns: LessonType = {
  id: 'lesson10-attached-personal-pronouns',
  name: 'Les 10 – Aangehangen persoonlijk voornaamwoord',
  type: 'woordenschat',
  active: false,
  questions
}
export default lesson10AttachedPersonalPronouns
