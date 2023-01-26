export default class SliderChef {
  constructor({ container = null, prev = null, next = null }) {
    this.container = document.querySelector(container);
    this.slides = this.container.children;
    this.prev = document.querySelector(prev);
    this.next = document.querySelector(next);
    this.checkButton = false;
    this.time = 1000;

    this.isDragging = false;
    this.startPos = 0;
    this.currentTranslate = 0;
    this.prevTranslate = 0;
    this.animationID = 0;
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

    if (this.slides) {
      Array.from(this.slides).forEach(slide => {
        this.slideImage = slide.querySelector('img');
  
        this.slideImage.addEventListener('dragstart', (e) => e.preventDefault());
  
        //Touch events
        slide.addEventListener('touchstart', this.touchStart());
        slide.addEventListener('touchend', this.touchEnd);
        slide.addEventListener('touchmove', this.touchMove);
  
        //Mouse events
        slide.addEventListener('mousedown', this.touchStart());
        slide.addEventListener('mouseup', this.touchEnd);
        slide.addEventListener('mouseleave', this.touchEnd);
        slide.addEventListener('mousemove', this.touchMove);
      });
    }
    
    
  }

  //--
  touchStart() {
    return function (e) {
      this.startPos = this.getPositionX(e);

      this.isDragging = true;

      this.animationID = requestAnimationFrame(this.animation);
      this.container.classList.add('grabbing');
    };
  }

  touchEnd() {
    this.isDragging = false;
    cancelAnimationFrame(this.animationID);

    const movedBy = this.currentTranslate - this.prevTranslate;

    if (movedBy < -100) {
      this.next.click();
    }

    if (movedBy > 100) {
      this.prev.click();
    }

    this.currentTranslate = 0;
    this.setSliderPosition();
    this.container.classList.remove('grabbing');
  }

  touchMove(e) {

    if (this.isDragging) {
      const currentPosition = this.getPositionX(e);

      this.currentTranslate = this.prevTranslate + this.currentPosition - this.startPos;
    }
  }

  getPositionX(e) {
    return e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
  }

  animation() {
    this.setSliderPosition();

    if (this.isDragging) {
      requestAnimationFrame(this.animation);
    }
  }

  setSliderPosition() {
    this.container.style.transform = `translateX(${this.currentTranslate}px)`;
  }
  //--

  nextSlide() {
    this.container.appendChild(this.slides[0]);
    this.slides[this.slides.length - 1].classList.remove('hideToLeft');
  }

  pauseClickButton() {
    this.checkButton = true;
    setTimeout(() => {
      this.checkButton = false;
    }, this.time);
  }
}