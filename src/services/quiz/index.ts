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
    const timeBar = document.querySelector('#time-bar');

    if (timeBar) {
      console.log(timeBar.classList);
      timeBar.classList.remove('animate');

      setTimeout(() => {
        timeBar.classList.add('animate');
        console.log(timeBar.classList);

        setTimeout(this.revealAnswer, 7000);
      }, 500);
    }
  }

  revealAnswer() {
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
