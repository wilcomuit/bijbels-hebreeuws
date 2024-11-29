const questions: Array<QuestionType> = [
  {
    question: 'אֲדָמָה',
    answers: ['aarde'],
    type: 'woordenschat'
  },
  {
    question: 'אֲדֹנָי',
    answers: ['de eeuwige', 'eeuwige', 'de heer', 'heer', 'heere'],
    type: 'woordenschat'
  },
  {
    question: 'יְהוָה',
    answers: ['de eeuwige', 'eeuwige', 'de heer', 'heer', 'heere'],
    explanation: '(de naam van God, uitspraak is afhankelijk van laatste klinker: kamets = adonai, chirek = elohiem)',
    type: 'woordenschat'
  },
  {
    question: 'בְּהֵמָה',
    answers: ['vee'],
    type: 'woordenschat'
  },
  {
    question: 'בָּשָׂר',
    answers: ['vlees'],
    explanation: '(van mens of dier, levend of geslacht)',
    type: 'woordenschat'
  },
  {
    question: 'בְּתוֹךְ',
    answers: ['onder', 'temidden van', 'midden in'],
    type: 'woordenschat'
  },
  {
    question: 'גַּם',
    answers: ['ook', 'trouwens', 'bovendien', 'inderdaad'],
    type: 'woordenschat'
  },
  {
    question: 'דֶּרֶךְ',
    answers: ['weg'],
    type: 'woordenschat'
  },
  {
    question: 'יַבָּשָׁה',
    answers: ['het droge', 'droge', 'droog land', 'droge grond'],
    type: 'woordenschat'
  },
  {
    question: 'כִּי',
    answers: ['opdat', 'zodat', 'ook al', 'zelfs als', 'omdat', 'alleen', 'slechts', 'dan', 'maar', 'immers'],
    type: 'woordenschat'
  },
  {
    question: 'כֹּל',
    answers: ['heel', 'al', 'elke', 'alles', 'allerlei'],
    type: 'woordenschat'
  },
  {
    question: 'כֵּן',
    answers: ['zo', 'op die manier', 'recht', 'juist', 'eerlijk'],
    type: 'woordenschat'
  },
  {
    question: 'מְאֹד',
    answers: ['zeer', 'in hoge mate'],
    type: 'woordenschat'
  },
  {
    question: 'מִצְוָה',
    answers: ['gebod', 'bevel', 'verbod'],
    type: 'woordenschat'
  },
  {
    question: 'נֶפֶשׁ',
    answers: ['ziel', 'adem', 'gevoel', 'gemoed', 'levend wezen', 'persoon'],
    type: 'woordenschat'
  },
  {
    question: 'עָפָר',
    answers: ['stof', 'as'],
    explanation: '(zand, aarde)',
    type: 'woordenschat'
  },
  {
    question: 'שָׂדֶה',
    answers: ['veld', 'land', 'gebied', 'buitengebied', 'akker', 'bouwland'],
    type: 'woordenschat'
  },
  {
    question: 'שָׁמַיִם',
    answers: ['hemel'],
    type: 'woordenschat'
  }
]
const lesson6Vocabulary: LessonType = {
  id: 'lesson6-vocabulary',
  name: 'Les 6 – Woordenschat',
  type: 'woordenschat',
  active: false,
  questions
}
export default lesson6Vocabulary
