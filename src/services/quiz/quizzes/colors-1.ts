import { quizModels } from "@/services/quiz/interfaces";

export default [
  {
    type: quizModels.ONE_WORD,
    fontFamily: 'Calistoga',
    backgroundColor: '#BBCCEE',
    question: {
      value: 'CINZA',
      size: 105,
      backgroundColor: '#666666',
    },
    options: ['WHITE', 'BLACK', 'GREY'],
    answer: 2,
  },
];
