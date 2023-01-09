import Quiz from "@/services/quiz";

class Sound {
  quiz: Quiz;
  readonly mute: boolean;
  bodyElement: HTMLBodyElement | null;

  constructor(quiz: Quiz, muted: boolean) {
    this.quiz = quiz;
    this.mute = muted;
    this.bodyElement = document.querySelector('body');
  }

  play(url: string, removeAfter = 2000, loop = false) {
    if (this.mute) {
      console.warn('Sound is muted.');
      return;
    }

    const body = document.querySelector('body');

    if (body) {
      const embeddedSound = document.createElement('audio');

      embeddedSound.setAttribute(
        'src',
        url,
      );

      embeddedSound.setAttribute('autoplay', 'true');
      if (loop) embeddedSound.setAttribute('loop', 'true');

      body.appendChild(embeddedSound);

      setTimeout(() => {
        embeddedSound.remove();
      }, removeAfter);
    }
  }

  timer() {
    this.play(
      'sounds/clock.mp3',
      this.quiz.timerDuration + 500,
      true,
    );
  }

  select() {
    this.play('sounds/select.wav', 3000);
  }

  whoosh() {
    this.play('sounds/whoosh.wav', 3000);
  }
}

export default Sound;
