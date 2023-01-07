export interface IQuizItem {
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
