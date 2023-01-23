import showElement from "./animated-show-element";

const slider = () => {

  function slider(sliderSelector, sliderConteinerSelector, slidesSelector, btnPrevSelector, btnNextSelector) {
    const slider = document.querySelector(sliderSelector),
      sliderConteiner = document.querySelector(sliderConteinerSelector),
      btnNext = document.querySelector(btnNextSelector),
      btnPrev = document.querySelector(btnPrevSelector),
      slides = document.querySelectorAll(slidesSelector),
      time = 600;
    
    let intViewportWidth = document.documentElement.clientWidth,
      slideIndex = 0,
      moveSlide,
      slidesLenght,
      checkButton = false;

    window.addEventListener('resize', () => {
      intViewportWidth = document.documentElement.clientWidth;
      viewVisualSlide();
      viewSlide(slideIndex);
    });

    function viewVisualSlide() {
      const block = document.createElement('div'),
        sliderBox = document.querySelector('.slider-dish');

      console.log(intViewportWidth);
      
      if (intViewportWidth < 993) {
        slidesLenght = slides.length;
      } else {
        slidesLenght = slides.length - 1;
      }

      block.classList.add('slider-dish__show-conteiner');

      for (let i = 0; i < slidesLenght; i++) {
        const showBlock = document.createElement('div');

        showBlock.classList.add('slider-dish__show-block');
        block.append(showBlock);
      }

      sliderBox.append(block);
    }

    function viewSlide(n) {
      const showBlock = document.querySelectorAll('.slider-dish__show-block');

      if (n < 0) {
        slideIndex = slidesLenght - 1;
      }

      if (n > slidesLenght - 1) {
        slideIndex = 0;
      }

      console.log(intViewportWidth);
      
      if (intViewportWidth < 500) {
        sliderConteiner.style.left = `-${slideIndex * 335}px`;
      } else {
        sliderConteiner.style.left = `-${slideIndex * 385}px`;
      }

      showBlock[slideIndex].style.opacity = '0.8';

      showBlock.forEach((item, i) => {
        item.style.opacity = '0.1';

        if (slideIndex === i) {
          item.style.opacity = '0.8';
        }

        item.addEventListener('click', () => {
          nextSlide(i - slideIndex);
        });
      });
    }

    function nextSlide(n) {
      viewSlide(slideIndex += n);
    }

    function showSlideByTime() {
      moveSlide = setInterval(() => {
        btnNext.click();
      }, 3000);
    }

    btnNext.addEventListener('click', () => {
      if (!checkButton) {
        nextSlide(1);
        pauseClickButton();
      }
    });

    btnPrev.addEventListener('click', () => {
      if (!checkButton) {
        nextSlide(-1);
        pauseClickButton();
      }
    });

    slider.addEventListener('mouseenter', () => {
      clearInterval(moveSlide);
    });

    slider.addEventListener('mouseleave', () => {
      showSlideByTime();
    });

    function pauseClickButton() {
      checkButton = true;
      setTimeout(() => {
        checkButton = false;
      }, time);
    }

    viewVisualSlide();
    viewSlide(slideIndex);
    showSlideByTime();
  }

  slider('.slider-dish', '.slider-dish__container', '.slider-dish__slide', '.prev-btn', '.next-btn');
};

export default slider;