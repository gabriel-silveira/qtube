import { reactive } from "vue";
import { IQuizItem } from "@/services/quiz/interfaces";
import Sound from "@/services/Sound";

class Quiz {
  data: {
    currentIndex: number,
    items: IQuizItem[],
  } = reactive({
    currentIndex: 0,
    items: [],
  });

  sound: Sound;
  timeBar: Element | null = null;
  conclusion: Element | null = null;

  constructor(items: IQuizItem[]) {
    this.data.items = [...items];
    this.sound = new Sound(false);
  }

  get style() {
    return {
      fontFamily: this.current.fontFamily,
      backgroundColor: this.current.backgroundColor,
    };
  }

  get current() {
    return this.data.items[this.data.currentIndex];
  }

  play() {
    this.timeBar = document.querySelector('#time-bar');
    this.conclusion = document.querySelector('#conclusion');

    const { timeBar } = this;

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

    const wrongItems: Element[] = [];

    let i = 0;
    for (const option of options) {
      const item = document.querySelector(`#${option}`);

      if (item) {
        if (i === this.current.answer) {
          setTimeout(() => {
            // remove wrong items
            for (const wrongItem of wrongItems) {
              wrongItem.remove();
            }

            // highlight right answer
            item.classList.add('right');

            this.sound.select();

            setTimeout(() => {
              this.openQuestionConclusion();
            }, 5000);
          }, 550);
        } else {
          item.classList.add('wrong');

          wrongItems.push(item);
        }
      }

      i += 1;
    }
  }

  openQuestionConclusion() {
    if (this.conclusion) {
      this.sound.whoosh();

      this.conclusion.classList.add('open');
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
