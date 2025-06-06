const questions: Array<QuestionType> = [
  {
    question: 'אַחֲרֵי',
    answers: ['na', 'achter', 'achterna'],
    type: 'woordenschat'
  },
  {
    question: 'אֶל',
    answers: ['naar', 'tot', 'wegens', 'over', 'omtrent'],
    type: 'woordenschat'
  },
  {
    question: 'בֵּין',
    answers: ['tussen'],
    type: 'woordenschat'
  },
  {
    question: 'לִפְנֵי',
    answers: ['voor'],
    explanation: '(van tijd of plaats)',
    type: 'woordenschat'
  },
  {
    question: 'מִן',
    answers: ['uit', 'weg van'],
    type: 'woordenschat'
  },
  {
    question: 'עַד',
    answers: ['tot', 'tot aan', 'bij'],
    explanation: '(van tijd of plaats)',
    type: 'woordenschat'
  },
  {
    question: 'עִם',
    answers: ['met', 'bij', 'jegens'],
    type: 'woordenschat'
  },
  {
    question: 'תַּחַת',
    answers: ['onder', 'in plaats van'],
    type: 'woordenschat'
  },
  {
    question: 'אֵין',
    answers: ['er is geen'],
    type: 'woordenschat'
  },
  {
    question: 'בֹּקֶר',
    answers: ['morgen', 'ochtend'],
    type: 'woordenschat'
  },
  {
    question: 'יָד',
    answers: ['hand'],
    type: 'woordenschat'
  },
  {
    question: 'יוֹם',
    answers: ['dag'],
    type: 'woordenschat'
  },
  {
    question: 'יֵשׁ',
    answers: ['zijn', 'er is', 'er zijn'],
    type: 'woordenschat'
  },
  {
    question: 'לֹא',
    answers: ['niet', 'geen'],
    type: 'woordenschat'
  },
  {
    question: 'לַיְלָה',
    answers: ['nacht'],
    type: 'woordenschat'
  },
  {
    question: 'מָקוֹם',
    answers: ['plaats'],
    type: 'woordenschat'
  },
  {
    question: 'עֵץ',
    answers: ['boom', 'hout'],
    type: 'woordenschat'
  },
  {
    question: 'עֶרֶב',
    answers: ['avond'],
    type: 'woordenschat'
  },
  {
    question: 'פְּרִי',
    answers: ['vrucht'],
    type: 'woordenschat'
  }
]
const lesson5Vocabulary: LessonType = {
  id: 'lesson5-vocabulary',
  name: 'Les 5 – Woordenschat',
  type: 'woordenschat',
  active: false,
  questions
}
export default lesson5Vocabulary
