type LessonType = {
  id: string
  name: string
  type: string
  active: boolean
  questions: Array<QuestionType | ConjugationQuestionType>
}

type QuestionType = {
  question: string
  answers: Array<string>
  explanation?: string
  correctOptions?: Array<string>
  wrongOptions?: Array<string>
  type: string
}

type MixedQuestionType = {
  question?: string
  answers?: Array<string>
  explanation?: string
  ev_nominatief?: string
  ev_accusatief?: string
  ev_genitief?: string
  ev_datief?: string
  mv_nominatief?: string
  mv_accusatief?: string
  mv_genitief?: string
  mv_datief?: string
  type: string
}

type ConjugationQuestionType = {
  ev_nominatief?: string
  ev_accusatief?: string
  ev_genitief?: string
  ev_datief?: string
  mv_nominatief?: string
  mv_accusatief?: string
  mv_genitief?: string
  mv_datief?: string
  type: string
}
