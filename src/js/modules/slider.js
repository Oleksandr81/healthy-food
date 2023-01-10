import showElement from "./animated-show-element";

const slider = () => {

  function slider(sliderSelector, sliderConteinerSelector, slidesSelector, btnPrevSelector, btnNextSelector) {
    const slider = document.querySelector(sliderSelector),
      sliderConteiner = document.querySelector(sliderConteinerSelector),
      btnNext = document.querySelector(btnNextSelector),
      btnPrev = document.querySelector(btnPrevSelector),
      slides = document.querySelectorAll(slidesSelector);

    let slideIndex = 0,
      moveSlide;

    function viewVisualSlide() {
      const block = document.createElement('div'),
      sliderBox = document.querySelector('.slider-dish');

      block.classList.add('slider-dish__show-conteiner');

      for (let i = 0; i < slides.length - 1; i++) {
        const showBlock = document.createElement('div');

        showBlock.classList.add('slider-dish__show-block');
        block.append(showBlock);
      }

      sliderBox.append(block);
    }

    function viewSlide(n) {
      const showBlock = document.querySelectorAll('.slider-dish__show-block');
      
      if (n < 0) {
        slideIndex = slides.length - 2;
      }

      if (n > slides.length - 2) {
        slideIndex = 0;
      }

      sliderConteiner.style.left = `-${slideIndex * 385}px`;
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
      nextSlide(1);
    });

    btnPrev.addEventListener('click', () => {
      nextSlide(-1);
    }); 

    slider.addEventListener('mouseenter', () => {
      clearInterval(moveSlide);
    });

    slider.addEventListener('mouseleave', () => {
      showSlideByTime();
    });

    viewVisualSlide();
    viewSlide(slideIndex);
    showSlideByTime();
  }

  slider('.slider-dish', '.slider-dish__container', '.slider-dish__slide', '.prev-btn', '.next-btn');

};

export default slider;