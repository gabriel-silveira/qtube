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

  prepare() {
    this.timeBar = document.querySelector('#time-bar');
    this.conclusion = document.querySelector('#conclusion');

    return this;
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

    let i = 0;
    for (const option of options) {
      const item = document.querySelector(`#${option}`);

      if (item) {
        if (i === this.current.answer) {
          item.classList.add('right');

          this.sound.select();

          setTimeout(() => {
            this.openQuestionConclusion();
          }, 5000);
        } else {
          item.classList.add('wrong');
        }
      }

      i += 1;
    }
  }

  openQuestionConclusion() {
    if (this.conclusion) {
      this.sound.whoosh();

      this.conclusion.classList.add('open');

      setTimeout(() => {
        this.next();
      }, 8000);
    }
  }

  next() {
    if (this.timeBar) this.timeBar.classList.remove('animate');

    const { options } = this.current;

    let i = 0;
    for (const option of options) {
      const item = document.querySelector(`#${option}`);

      if (item) {
        console.log({ ...item.classList });
        if (i === this.current.answer) {
          item.classList.remove('right');
        } else {
          item.classList.remove('wrong');
        }

        i += 1;
      }
    }

    if (this.conclusion) this.conclusion.classList.remove('open');

    this.play();
  }

  restart() {
    //
  }
}

export default Quiz;
