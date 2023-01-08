export interface IQuizItem {
  type: quizModels,
  fontFamily: string,
  backgroundColor: string,
  question: {
    voice: string,
    word: string,
    size: number,
    backgroundColor: string,
  },
  options: string[],
  answer: number,
  conclusion: {
    image: {
      src: string,
      height: number,
    },
    bottom: {
      phrase: string,
      backgroundColor: string,
      color: string,
    },
  },
}

export enum quizModels {
  WORDS,
}
