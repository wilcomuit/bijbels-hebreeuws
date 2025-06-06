const questions: Array<NumbersQuestionType> = [
  {
    m_abs: 'אֶחָד',
    m_cst: 'אַחַד',
    f_abs: 'אַחַת',
    f_cst: 'אַחַת',
    vocabularyAnswers: ['een'],
    type: 'numbers-woordenschat'
  },
  {
    m_abs: 'שְׁנַיִם',
    m_cst: 'שְׁנֵי',
    f_abs: 'שְׁתַּיִם',
    f_cst: 'שְׁתֵּי',
    vocabularyAnswers: ['twee'],
    type: 'numbers-woordenschat'
  },
  {
    m_abs: 'שָׁלֹשׁ',
    m_cst: 'שְׁלֹשׁ',
    f_abs: 'שְׁלֹשָׁה',
    f_cst: 'שְׁלֹשֶׁת',
    vocabularyAnswers: ['drie'],
    type: 'numbers-woordenschat'
  },
  {
    m_abs: 'אַרְבַּע',
    m_cst: 'אַרְבַּע',
    f_abs: 'אַרְבָּעָה',
    f_cst: 'אַרְבַּעַת',
    vocabularyAnswers: ['vier'],
    type: 'numbers-woordenschat'
  },
  {
    m_abs: 'חָמֵשׁ',
    m_cst: 'חֲמֵשׁ',
    f_abs: 'חֲמִשָּׁה',
    f_cst: 'חֲמֵשֶׁת',
    vocabularyAnswers: ['vijf'],
    type: 'numbers-woordenschat'
  },
  {
    m_abs: 'שֵׁשׁ',
    m_cst: 'שֵׁשׁ',
    f_abs: 'שִׁשָּׁה',
    f_cst: 'שֵׁשֶׁת',
    vocabularyAnswers: ['zes'],
    type: 'numbers-woordenschat'
  },
  {
    m_abs: 'שֶׁבַע',
    m_cst: 'שְׁבַע',
    f_abs: 'שִׁבְעָה',
    f_cst: 'שִׁבְעַת',
    vocabularyAnswers: ['zeven'],
    type: 'numbers-woordenschat'
  },
  {
    m_abs: 'שְׁמֹנֶה',
    m_cst: 'שְׁמֹנֵה',
    f_abs: 'שְׁמֹנָה',
    f_cst: 'שְׁמֹנַת',
    vocabularyAnswers: ['acht'],
    type: 'numbers-woordenschat'
  },
  {
    m_abs: 'תֵּשַׁע',
    m_cst: 'תְּשַׁע',
    f_abs: 'תִּשְׁעָה',
    f_cst: 'תִּשְׁעַת',
    vocabularyAnswers: ['negen'],
    type: 'numbers-woordenschat'
  },
  {
    m_abs: 'עֶשֶׂר',
    m_cst: 'עֶשֶׂר',
    f_abs: 'עֲשָׂרָה',
    f_cst: 'עֲשֶׂרֶת',
    vocabularyAnswers: ['tien'],
    type: 'numbers-woordenschat'
  },
  {
    question: 'אַחַד עָשָׂר',
    answers: ['elf'],
    type: 'woordenschat'
  },
  {
    question: 'עַשְׁתֵּי עָשָׂר',
    answers: ['elf'],
    type: 'woordenschat'
  },
  {
    question: 'אַחַת עֶשְׂרֵה',
    answers: ['elf'],
    type: 'woordenschat'
  },
  {
    question: 'עַשְׁתֵּי עֶשְׂרֵה',
    answers: ['elf'],
    type: 'woordenschat'
  },
  {
    question: 'שְׁנֵים עָשָׂר',
    answers: ['twaalf'],
    type: 'woordenschat'
  },
  {
    question: 'שְׁנֵי עָשָׂר',
    answers: ['twaalf'],
    type: 'woordenschat'
  },
  {
    question: 'שְׁתֵּים עֶשְׂרֵה',
    answers: ['twaalf'],
    type: 'woordenschat'
  },
  {
    question: 'שְׁתֵּי עֶשְׂרֵה',
    answers: ['twaalf'],
    type: 'woordenschat'
  },
  {
    question: 'שְׁלֹשָׁה עָשָׂר',
    answers: ['dertien'],
    type: 'woordenschat'
  },
  {
    question: 'שָׁלֹשׁ עֶשְׂרֵה',
    answers: ['dertien'],
    type: 'woordenschat'
  },
  {
    question: 'אַרְבָּעָה עָשָׂר',
    answers: ['veertien'],
    type: 'woordenschat'
  },
  {
    question: 'אַרְבַּע עֶשְׂרֵה',
    answers: ['veertien'],
    type: 'woordenschat'
  },
  {
    question: 'חֲמִשָּׁה עָשָׂר',
    answers: ['vijftien'],
    type: 'woordenschat'
  },
  {
    question: 'חֲמֵשׁ עֶשְׂרֵה',
    answers: ['vijftien'],
    type: 'woordenschat'
  },
  {
    question: 'שִׁשָּׁה עָשָׂר',
    answers: ['zestien'],
    type: 'woordenschat'
  },
  {
    question: 'שֵׁשׁ עֶשְׂרֵה',
    answers: ['zestien'],
    type: 'woordenschat'
  },
  {
    question: 'שִׁבְעָה עָשָׂר',
    answers: ['zeventien'],
    type: 'woordenschat'
  },
  {
    question: 'שְׁבַע עֶשְׂרֵה',
    answers: ['zeventien'],
    type: 'woordenschat'
  },
  {
    question: 'שְׁמֹנָה עָשָׂר',
    answers: ['achttien'],
    type: 'woordenschat'
  },
  {
    question: 'שְׁמֹנֵה עֶשְׂרֵה',
    answers: ['achttien'],
    type: 'woordenschat'
  },
  {
    question: 'תִּשְׁעָה עָשָׂר',
    answers: ['negentien'],
    type: 'woordenschat'
  },
  {
    question: 'תְּשַׁע עֶשְׂרֵה',
    answers: ['negentien'],
    type: 'woordenschat'
  },
  {
    question: 'עֶשְׂרִים',
    answers: ['twintig'],
    type: 'woordenschat'
  },
  {
    question: 'שְׁלֹשִׁים',
    answers: ['dertig'],
    type: 'woordenschat'
  },
  {
    question: 'אַרְבָּעִים',
    answers: ['veertig'],
    type: 'woordenschat'
  },
  {
    question: 'חֲמִשִּׁים',
    answers: ['vijftig'],
    type: 'woordenschat'
  },
  {
    question: 'שִׁשִּׁים',
    answers: ['zestig'],
    type: 'woordenschat'
  },
  {
    question: 'שִׁבְעִים',
    answers: ['zeventig'],
    type: 'woordenschat'
  },
  {
    question: 'שְׁמֹנִים',
    answers: ['tachtig'],
    type: 'woordenschat'
  },
  {
    question: 'תִּשְׁעִים',
    answers: ['negentig'],
    type: 'woordenschat'
  },
  {
    question: 'מֵאָה',
    answers: ['honderd'],
    type: 'woordenschat'
  },
  {
    question: 'מָאתַיִם',
    answers: ['tweehonderd'],
    type: 'woordenschat'
  },
  {
    question: 'שְׁלֹשׁ מֵאוֹת',
    answers: ['driehonderd'],
    type: 'woordenschat'
  },
  {
    question: 'אֶלֶף',
    answers: ['duizend'],
    type: 'woordenschat'
  },
  {
    question: 'אַלְפַּיִם',
    answers: ['tweeduizend'],
    type: 'woordenschat'
  },
  {
    question: 'שְׁלֹשֶׁת אֲלָפִים',
    answers: ['drieduizend'],
    type: 'woordenschat'
  }
]
const lesson12Numbers: LessonType = {
  id: 'lesson12-numbers',
  name: 'Les 12 – Telwoorden',
  type: 'numbers-woordenschat',
  active: false,
  questions
}
export default lesson12Numbers
