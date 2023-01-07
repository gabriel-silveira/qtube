import { reactive } from "vue";
import { IQuizItem } from "@/services/quiz/interfaces";

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
