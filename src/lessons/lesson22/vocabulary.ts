const questions: Array<QuestionType> = [
  {
    question: 'אָחַז',
    answers: ['hij greep', 'hij hield vast', 'hij hield in bezit', 'hij was gevangen'],
    explanation: '(hij was gevangen = Nif.)',
    type: 'woordenschat'
  },
  {
    question: 'גָּנַב',
    answers: ['hij stal', 'hij steelde', 'hij misleidde'],
    type: 'woordenschat'
  },
  {
    question: 'הָפַךְ',
    answers: ['hij keerde om', 'hij veranderde', 'hij verwoestte', 'hij was veranderd', 'hij was omgedraaid', 'hij was verwoest'],
    explanation: '(hij was ... = Nif.)',
    type: 'woordenschat'
  },
  {
    question: 'הָרַס',
    answers: ['hij sloopte', 'hij brak af', 'hij scheurde'],
    type: 'woordenschat'
  },
  {
    question: 'חָגַר',
    answers: ['hij omgordde', 'hij deed een gordel om'],
    type: 'woordenschat'
  },
  {
    question: 'חדשׁ',
    answers: ['hij vernieuwde', 'hij herstelde'],
    explanation: '(Pi.)',
    type: 'woordenschat'
  },
  {
    question: 'חָפֵץ',
    answers: ['hij verlangde', 'hij schiep behagen in'],
    type: 'woordenschat'
  },
  {
    question: 'עָרַךְ',
    answers: ['hij ordende', 'hij schikte', 'hij legde klaar', 'hij lag klaar'],
    type: 'woordenschat'
  },
  {
    question: 'אָז',
    answers: ['toen', 'dan'],
    type: 'woordenschat'
  },
  {
    question: 'אַךְ',
    answers: ['beslist', 'echt', 'meteen', 'alleen', 'maar', 'slechts'],
    type: 'woordenschat'
  },
  {
    question: 'אֱמוּנָה',
    answers: ['trouw', 'zekerheid', 'vastheid', 'veiligheid'],
    type: 'woordenschat'
  },
  {
    question: 'בְּאֵר',
    answers: ['bron', 'put', 'Beer'],
    explanation: '(Beer = in plaatsnamen: Beer-Elim bijv.)',
    type: 'woordenschat'
  },
  {
    question: 'בְּכוֹר',
    answers: ['eerstgeborene'],
    type: 'woordenschat'
  },
  {
    question: 'דְּבַשׁ',
    answers: ['honing'],
    type: 'woordenschat'
  },
  {
    question: 'חֹק',
    answers: ['wet', 'bepaling', 'regel', 'voorschrift'],
    type: 'woordenschat'
  },
  {
    question: 'לָשׁוֹן',
    answers: ['tong', 'taal', 'spraak'],
    type: 'woordenschat'
  },
  {
    question: 'מָוֶת',
    answers: ['dood', 'de dood'],
    type: 'woordenschat'
  },
  {
    question: 'מִזְבֵּחַ',
    answers: ['altaar'],
    type: 'woordenschat'
  }
]
const lesson22Vocabulary: LessonType = {
  id: 'lesson22-vocabulary',
  name: 'Les 22 – Woordenschat',
  type: 'woordenschat',
  active: false,
  questions
}
export default lesson22Vocabulary
