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
      slidesLenght,
      checkButton = false,
      
      isDragging = false,
      startPos = 0,
      currentTranslate = 0,
      prevTranslate = 0,
      animationID = 0,
      currentIndex = 0;

    //Disable context menu
    window.oncontextmenu = function (e) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    };

    slides.forEach((slide, index) => {
      const slideImage = slide.querySelector('img');

      slideImage.addEventListener('dragstart', (e) => e.preventDefault());

      //Touch events
      slide.addEventListener('touchstart', touchStart());
      slide.addEventListener('touchend', touchEnd);
      slide.addEventListener('touchmove', touchMove);

      //Mouse events
      slide.addEventListener('mousedown', touchStart());
      slide.addEventListener('mouseup', touchEnd);
      slide.addEventListener('mouseleave', touchEnd);
      slide.addEventListener('mousemove', touchMove);
    });
   
    function touchStart() {
      return function (e) {             
        startPos = getPositionX(e); 
                     
        isDragging = true;

        animationID = requestAnimationFrame(animation);
        sliderConteiner.classList.add('grabbing');
      };
    }

    function touchEnd() {
      isDragging = false;
      cancelAnimationFrame(animationID);
      
      const movedBy = currentTranslate - prevTranslate;
      
      if (movedBy < -65) {
        nextSlide(1);
      }

      if (movedBy > 65) {
        nextSlide(-1);
      }

      sliderConteiner.classList.remove('grabbing');
    }

    function setPositionByIndex() {
      if (intViewportWidth < 500) {
        currentTranslate = -slideIndex * 335;
      } else {
        currentTranslate = -slideIndex * 385;
      }

      prevTranslate = currentTranslate;
      setSliderPosition();
    }
 
    function touchMove(e) {

      if (isDragging) {
        const currentPosition = getPositionX(e);
        
        currentTranslate = prevTranslate + currentPosition - startPos;
      }
    }

    function getPositionX(e) {
      return e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
    }

    function animation() {
      setSliderPosition();

      if(isDragging) {
        requestAnimationFrame(animation);
      }
    }

    function setSliderPosition() {
      sliderConteiner.style.transform = `translateX(${currentTranslate}px)`;
    }

    window.addEventListener('resize', () => {
      intViewportWidth = document.documentElement.clientWidth;
      viewVisualScrolling();
      viewSlide(slideIndex);
    });

    function viewVisualScrolling() {
      const block = document.createElement('div'),
        sliderBox = document.querySelector('.slider-dish');

      // console.log(intViewportWidth);

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

      setPositionByIndex();

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
      // clearInterval(moveSlide);
    });

    slider.addEventListener('mouseleave', () => {
      // showSlideByTime();
    });

    function pauseClickButton() {
      checkButton = true;
      setTimeout(() => {
        checkButton = false;
      }, time);
    }

    viewVisualScrolling();
    viewSlide(slideIndex);
    // showSlideByTime();
  }

  slider('.slider-dish', '.slider-dish__container', '.slider-dish__slide', '.prev-btn', '.next-btn');
};

export default slider;