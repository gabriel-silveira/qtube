import { quizModels } from "@/services/quiz/interfaces";

export default [
  {
    type: quizModels.ONE_WORD,
    fontFamily: 'Calistoga',
    backgroundColor: '#BBCCEE',
    question: {
      value: 'CINZA',
      size: 120,
      backgroundColor: '#666666',
    },
    options: ['White', 'Black', 'Grey'],
    answer: 2,
  },
];
