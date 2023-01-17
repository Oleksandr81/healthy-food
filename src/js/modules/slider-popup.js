export default class SliderChef {
  constructor({ container = null, slides = null, prev = null, next = null }) {
    this.container = document.querySelector(container);
    this.slides = this.container.children;
    this.prev = document.querySelector(prev);
    this.next = document.querySelector(next);
    this.checkButton = false;
    this.time = 1000;
  }

  bindTriggers() {
    this.next.addEventListener('click', () => {
      if (!this.checkButton) {
        this.slides[1].classList.remove('showFromLeft');
        this.slides[2].classList.remove('hideToRight');

        this.slides[2].classList.add('showFromRight');
        this.slides[1].classList.add('hideToLeft');
        this.nextSlide();
        this.slides[0].classList.remove('showFromRight');

        this.pauseClickButton();
      }

    });

    this.prev.addEventListener('click', () => {
      if (!this.checkButton) {
        this.slides[1].classList.remove('showFromRight');
        this.slides[0].classList.remove('hideToLeft');
        this.slides[2].classList.remove('hideToRight');

        this.slides[0].classList.add('showFromLeft');
        this.slides[1].classList.add('hideToRight');

        let active = this.slides[this.slides.length - 1];
        this.container.insertBefore(active, this.slides[0]);

        this.slides[2].classList.remove('showFromLeft');
        this.slides[0].classList.remove('hideToRight');

        this.pauseClickButton();
      }
    });
  }

  pauseClickButton() {
    this.checkButton = true;
    setTimeout(() => {
      this.checkButton = false;
    }, this.time);
  }

  nextSlide() {
    this.container.appendChild(this.slides[0]);
    this.slides[this.slides.length - 1].classList.remove('hideToLeft');
  }
}