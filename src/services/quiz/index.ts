import { reactive } from "vue";
import { IQuizItem } from "@/services/quiz/interfaces";

class Quiz {
  data: {
    currentIndex: number,
    items: IQuizItem[],
  } = reactive({
    currentIndex: 0,
    items: [],
  });

  constructor(items: IQuizItem[]) {
    this.data.items = [...items];
  }

  get current() {
    return this.data.items[this.data.currentIndex];
  }

  play() {
    const timeBar = document.querySelector('#time-bar');

    if (timeBar) {
      timeBar.classList.remove('animate');

      setTimeout(() => {
        timeBar.classList.add('animate');

        setTimeout(() => {
          this.revealAnswer();
        }, 7000);
      }, 500);
    }
  }

  revealAnswer() {
    const { options } = this.current;

    let i = 0;
    for (const option of options) {
      const item = document.querySelector(`#${option}`);

      if (i === this.current.answer) {
        item?.classList.add('right');
      } else {
        item?.classList.add('wrong');
      }

      i += 1;
    }
  }

  stop() {
    //
  }

  restart() {
    //
  }
}

export default Quiz;
