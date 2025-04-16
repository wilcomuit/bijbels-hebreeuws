const questions: Array<QuestionType> = [
  {
    question: 'בָּטַח',
    answers: ['hij vertrouwde', 'hij stelde vertrouwen in'],
    type: 'woordenschat'
  },
  {
    question: 'גָּדַל',
    answers: ['hij was groot', 'hij groeide'],
    type: 'woordenschat'
  },
  {
    question: 'דָּרַשׁ',
    answers: ['hij zocht', 'hij zocht na', 'hij onderzocht', 'hij eiste op', 'hij vorderde rekenschap', 'hij raadpleegde'],
    type: 'woordenschat'
  },
  {
    question: 'דֶּשֶׁא',
    answers: ['gras', 'jong groen'],
    type: 'woordenschat'
  },
  {
    question: 'הָרַג',
    answers: ['hij doodde', 'hij sloeg dood'],
    type: 'woordenschat'
  },
  {
    question: 'זָבַח',
    answers: ['hij offerde', 'hij slachtte'],
    type: 'woordenschat'
  },
  {
    question: 'חָזַק',
    answers: ['hij was sterk', 'hij was hard', 'hij was volhardend', 'hij was vasthoudend', 'hij drong aan bij'],
    type: 'woordenschat'
  },
  {
    question: 'חָשַׁב',
    answers: ['hij dacht', 'hij rekende', 'hij achtte', 'hij bedacht', 'hij beraamde'],
    type: 'woordenschat'
  },
  {
    question: 'כָּבֵד',
    answers: ['hij was zwaar', 'hij was belangrijk', 'hij was ernstig', 'hij was aanzienlijk'],
    type: 'woordenschat'
  },
  {
    question: 'כָּנָף',
    answers: ['vleugel', 'rand', 'zoom', 'uiteinde', 'hoek'],
    type: 'woordenschat'
  },
  {
    question: 'כּפר',
    answers: ['hij verzoende', 'hij droeg zoenoffers op'],
    type: 'woordenschat'
  },
  {
    question: 'לָבַשׁ',
    answers: ['hij kleedde zich', 'hij kleedde zich aan'],
    type: 'woordenschat'
  },
  {
    question: 'נַחַל',
    answers: ['beekdal'],
    type: 'woordenschat'
  },
  {
    question: 'עָזַב',
    answers: ['hij liet achter', 'hij liet los', 'hij liet in de steek', 'hij onthoudde'],
    explanation: '(hij onthoudde, als in: hij gaf niet)',
    type: 'woordenschat'
  },
  {
    question: 'קָרַב',
    answers: ['hij naderde', 'hij trad aan', 'hij offerde'],
    type: 'woordenschat'
  },
  {
    question: 'רָדַף',
    answers: ['hij volgde', 'hij ging achterna', 'hij streefde na'],
    type: 'woordenschat'
  },
  {
    question: 'שֵׁבֶט',
    answers: ['stok', 'heersersstaf', 'scepter', 'herdersstaf', 'speer', 'werpspies'],
    type: 'woordenschat'
  },
  {
    question: 'שָׁכַן',
    answers: ['hij ging wonen', 'hij verbleef', 'hij legerde zich', 'hij woonde', 'hij bewoonde'],
    type: 'woordenschat'
  }
]
const lesson15Vocabulary: LessonType = {
  id: 'lesson15-vocabulary',
  name: 'Les 15 – Woordenschat',
  type: 'woordenschat',
  active: false,
  questions
}
export default lesson15Vocabulary
