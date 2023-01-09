import { quizModels } from "@/services/quiz/interfaces";

export default [
  {
    type: quizModels.WORDS,
    fontFamily: 'RobotoBold',
    backgroundColor: '#2244CC',
    question: {
      voice: 'Qual destas palavras é cinza em inglês?',
      word: 'AZUL',
      size: 120,
      backgroundColor: '#000088',
    },
    options: ['Brown', 'Blue', 'Black'],
    answer: 1,
    conclusion: {
      image: {
        src: '/images/quizzes/colors1/blue-sky.jpg',
        height: 70,
      },
      bottom: {
        phrase: 'What a beautiful blue sky!',
        backgroundColor: '#2244CC',
        color: '#FFFFFF',
      },
    },
  },
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
    options: ['Gold', 'Green', 'Grey'],
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

