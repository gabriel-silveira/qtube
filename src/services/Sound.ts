class Sound {
  readonly mute: boolean;
  bodyElement: HTMLBodyElement | null;

  constructor(muted: boolean) {
    this.mute = muted;
    this.bodyElement = document.querySelector('body');
  }

  play(url: string, removeAfter = 2000) {
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

      body.appendChild(embeddedSound);

      setTimeout(() => {
        embeddedSound.remove();
      }, removeAfter);
    }
  }

  select() {
    this.play('sounds/select.wav', 3000);
  }

  whoosh() {
    this.play('sounds/whoosh.wav', 3000);
  }
}

export default Sound;
