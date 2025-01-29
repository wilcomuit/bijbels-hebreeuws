const questions: Array<ConjugationQuestionType> = [
  {
    question: 'הוּא',
    answers: ['ev_hij'],
    type: 'personal-pronouns'
  },
  {
    question: 'הִיא',
    answers: ['ev_zij'],
    type: 'personal-pronouns'
  },
  {
    question: 'אַתָּה',
    answers: ['ev_jij_m'],
    type: 'personal-pronouns'
  },
  {
    question: 'אַתְּ',
    answers: ['ev_jij_v'],
    type: 'personal-pronouns'
  },
  {
    question: 'אֲנִי',
    answers: ['ev_ik'],
    type: 'personal-pronouns'
  },
  {
    question: 'אָנֹכִי',
    answers: ['ev_ik'],
    type: 'personal-pronouns'
  },
  {
    question: 'הֵם',
    answers: ['mv_zij_m'],
    type: 'personal-pronouns'
  },
  {
    question: 'הֵמָּה',
    answers: ['mv_zij_m'],
    type: 'personal-pronouns'
  },
  {
    question: 'הֵנָּה',
    answers: ['mv_zij_v'],
    type: 'personal-pronouns'
  },
  {
    question: 'אַתֶּם',
    answers: ['mv_jullie_m'],
    type: 'personal-pronouns'
  },
  {
    question: 'אַתֵּן',
    answers: ['mv_jullie_v'],
    type: 'personal-pronouns'
  },
  {
    question: 'אַתֵּנָה',
    answers: ['mv_jullie_v'],
    type: 'personal-pronouns'
  },
  {
    question: 'נַחְנוּ',
    answers: ['mv_wij'],
    type: 'personal-pronouns'
  },
  {
    question: 'אֲנַחְנוּ',
    answers: ['mv_wij'],
    type: 'personal-pronouns'
  }
]
const lesson8PersonalPronouns: LessonType = {
  id: 'lesson8-personal-pronouns',
  name: 'Les 8 – Persoonlijk voornaamwoord',
  type: 'woordenschat',
  active: false,
  questions
}
export default lesson8PersonalPronouns
