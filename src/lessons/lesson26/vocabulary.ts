const questions: Array<QuestionType> = [
  {
    question: 'בָּכָה',
    answers: ['hij weende', 'hij beweende'],
    type: 'woordenschat'
  },
  {
    question: 'זָנָה',
    answers: ['hij pleegde ontucht', 'hij bedreef ontucht'],
    type: 'woordenschat'
  },
  {
    question: 'חָזָה',
    answers: ['hij zag', 'hij schouwde', 'hij zag uit', 'hij zag om'],
    explanation: '(zien als in een visioen)',
    type: 'woordenschat'
  },
  {
    question: 'חָלָה',
    answers: ['hij was ziek', 'hij was zwak'],
    type: 'woordenschat'
  },
  {
    question: 'חָנָה',
    answers: ['hij legde zich neer', 'hij ging rusten', 'hij sloeg kamp op', 'hij legerde zich'],
    type: 'woordenschat'
  },
  {
    question: 'חָרָה',
    answers: ['hij gloeide', 'hij brandde'],
    explanation: '(van woede, ergernis, ijver, hartstocht)',
    type: 'woordenschat'
  },
  {
    question: 'יָרָה',
    answers: ['hij wees', 'hij onderwees'],
    type: 'woordenschat'
  },
  {
    question: 'כָּסָה',
    answers: ['hij bedekte', 'hij verhulde'],
    type: 'woordenschat'
  },
  {
    question: 'עָנָה',
    answers: ['hij nam het woord', 'hij antwoordde', 'hij ging gebukt', 'hij werd onderdrukt', 'hij leed onder'],
    type: 'woordenschat'
  },
  {
    question: 'צָפָה',
    answers: ['hij spiedde', 'hij stond op de uitkijk'],
    type: 'woordenschat'
  },
  {
    question: 'קָנָה',
    answers: ['hij verworf', 'hij kocht'],
    type: 'woordenschat'
  },
  {
    question: 'שׁחה',
    answers: ['hij wierp zich op de grond', 'hij drukte neer', 'hij deprimeerde', 'hij betuigde eerbied door diep te buigen', 'hij' +
    ' aanbidde'],
    type: 'woordenschat'
  },
  {
    question: 'אַמָּה',
    answers: ['el'],
    type: 'woordenschat'
  },
  {
    question: 'מַחֲנֶה',
    answers: ['leger', 'legerplaats', 'kamp'],
    type: 'woordenschat'
  },
  {
    question: 'מַטֶּה',
    answers: ['tak', 'stok', 'stam', 'boomtak', 'staf'],
    type: 'woordenschat'
  },
  {
    question: 'מַעֲשֶׂה',
    answers: ['werk', 'daad'],
    type: 'woordenschat'
  },
  {
    question: 'מִשְׁפָּחָה',
    answers: ['familie', 'clan'],
    type: 'woordenschat'
  },
  {
    question: 'עֹלָה',
    answers: ['brandoffer'],
    type: 'woordenschat'
  }
]

const lesson26Vocabulary: LessonType = {
  id: 'lesson26-vocabulary',
  name: 'Les 26 – Woordenschat',
  type: 'woordenschat',
  active: false,
  questions
}
export default lesson26Vocabulary
