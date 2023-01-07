import { reactive } from "vue";

interface IQuizItem {
  question: {
    value: string,
    size: number,
    backgroundColor: string,
  },
  options: string[],
  answer: number,
}

class Quiz {
  data: {
    active: number,
    items: IQuizItem[],
  } = reactive({
    active: 0,
    items: [],
  });

  constructor(items: IQuizItem[]) {
    this.data.items = [...items];
  }

  get activeItem() {
    return this.data.items[this.data.active];
  }

  play() {
    //
  }

  stop() {
    //
  }

  restart() {
    //
  }
}

export default Quiz;
