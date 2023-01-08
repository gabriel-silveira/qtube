import { quizModels } from "@/services/quiz/interfaces";

export default [
  {
    type: quizModels.WORDS,
    fontFamily: 'RobotoBold',
    backgroundColor: '#CCCCDD',
    question: {
      voice: 'Qual destas palavras é cinza em inglês?',
      word: 'CINZA',
      size: 120,
      backgroundColor: '#666666',
    },
    options: ['White', 'Black', 'Grey'],
    answer: 2,
    conclusion: {
      image: {
        src: '/images/quizzes/colors1/grey-car.jpg',
        height: 70,
      },
      bottom: {
        phrase: 'This car is grey.',
        backgroundColor: '#444',
        color: '#FFFFFF',
      },
    },
  },
];

