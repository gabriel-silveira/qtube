export interface IQuizItem {
  type: quizModels,
  fontFamily: string,
  backgroundColor: string,
  question: {
    value: string,
    size: number,
    backgroundColor: string,
  },
  options: string[],
  answer: number,
}

export enum quizModels {
  ONE_WORD,
}
