const questions: Array<QuestionType> = [
  {
    question: 'יוֹמָם',
    answers: ['bij dag', 'overdag', 'iedere dag weer', 'dagelijks'],
    type: 'woordenschat'
  }, {
    question: 'יָצָא',
    answers: ['hij kwam naar buiten', 'hij kwam tevoorschijn', 'hij ging uit', 'hij vertrok'],
    type: 'woordenschat'
  }, {
    question: 'יָרֵא',
    answers: ['hij vreesde'],
    type: 'woordenschat'
  }, {
    question: 'יָשַׁב',
    answers: ['hij zat', 'hij ging zitten', 'hij bleef', 'hij woonde'],
    type: 'woordenschat'
  }, {
    question: 'ישׁע',
    answers: ['hij hielp', 'hij redde', 'hij bevrijdde', 'hij kwam te hulp'],
    type: 'woordenschat'
  }, {
    question: 'מוּת',
    answers: ['hij stierf'],
    type: 'woordenschat'
  }, {
    question: 'נצל',
    answers: ['hij haalde eruit', 'hij redde', 'hij nam weg', 'hij maakte los', 'hij bevrijdde'],
    type: 'woordenschat'
  }, {
    question: 'ספר',
    answers: ['hij telde', 'hij schreef', 'hij vertelde', 'hij somde op'],
    type: 'woordenschat'
  }, {
    question: 'עָזַר',
    answers: ['hij hielp', 'hij kwam te hulp'],
    type: 'woordenschat'
  }, {
    question: 'עָנָה',
    answers: ['hij nam het woord', 'hij antwoordde'],
    type: 'woordenschat'
  }, {
    question: 'פּלל',
    answers: ['hij bidde', 'hij bad'],
    type: 'woordenschat'
  }, {
    question: 'פָּרָה',
    answers: ['hij droeg vrucht'],
    type: 'woordenschat'
  }, {
    question: 'צוה',
    answers: ['hij beval', 'hij beveelde', 'hij gebood', 'hij droeg op'],
    type: 'woordenschat'
  }, {
    question: 'רָבָה',
    answers: ['hij was groot', 'hij was talrijk'],
    type: 'woordenschat'
  }, {
    question: 'שִׂים',
    answers: ['hij zette', 'hij legde', 'hij stelde', 'hij maakte tot', 'hij stelde aan'],
    type: 'woordenschat'
  }, {
    question: 'שָׂמַח',
    answers: ['hij was blij', 'hij verheugde zich', 'hij vierde feest'],
    type: 'woordenschat'
  }, {
    question: 'שׁבע',
    answers: ['hij zweerde', 'hij zwoer', 'hij legde een eed af'],
    type: 'woordenschat'
  }, {
    question: 'שׁלך',
    answers: ['hij wierp', 'verwierp', 'hij wierp af', 'hij gaf prijs', 'hij verstootte', 'hij stootte om'],
    type: 'woordenschat'
  }
]
const lesson16Vocabulary: LessonType = {
  id: 'lesson16-vocabulary',
  name: 'Les 16 – Woordenschat',
  type: 'woordenschat',
  active: false,
  questions
}
export default lesson16Vocabulary
