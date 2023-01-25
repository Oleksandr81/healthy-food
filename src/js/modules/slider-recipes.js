const sliderRecipes = () => {
  const initSlider = (containerSliderSelector, btnSelector, animated) => {
    const container = document.querySelector(containerSliderSelector),
      slides = container.children,
      nextBtn = document.querySelectorAll(btnSelector);

    let checkButton = false;

    let isDragging = false,
      startPos = 0,
      currentTranslate = 0,
      prevTranslate = 0,
      animationID = 0;

    Array.from(slides).forEach(slide => {
      const slideImage = slide.querySelector('img');

      slideImage.addEventListener('dragstart', (e) => e.preventDefault());

      if (slide.classList.contains('left-side-recipes__block')) {   
        //Touch events
        slide.addEventListener('touchstart', touchStart());
        slide.addEventListener('touchend', touchEnd);
        slide.addEventListener('touchmove', touchMove);

        //Mouse events
        slide.addEventListener('mousedown', touchStart());
        slide.addEventListener('mouseup', touchEnd);
        slide.addEventListener('mouseleave', touchEnd);
        slide.addEventListener('mousemove', touchMove);
      }
    });

    function touchStart() {
      return function (e) {
        startPos = getPositionX(e);

        isDragging = true;

        animationID = requestAnimationFrame(animation);
        container.classList.add('grabbing');
      };
    }

    function touchEnd() {
      isDragging = false;
      cancelAnimationFrame(animationID);

      const movedBy = currentTranslate - prevTranslate;

      if (movedBy < -100) {
        nextBtn.forEach(btn => btn.click());
      }

      if (movedBy > 100) { }

      currentTranslate = 0;
      setSliderPosition();
      container.classList.remove('grabbing');
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

      if (isDragging) {
        requestAnimationFrame(animation);
      }
    }

    function setSliderPosition() {
      container.style.transform = `translateX(${currentTranslate}px)`;
    }

    nextBtn.forEach(btn => {

      btn.addEventListener('click', () => {
        if (!checkButton) {
          checkButton = true;

          startAnimated();
          nextSlide();

          setTimeout(() => {
            checkButton = false;
          }, 1000);

          endAnimated();
        }
      });
    });

    function startAnimated() {

      if (animated) {
        if (animated === 'moveUp') {
          Array.from(slides).forEach(slide => {
            slide.classList.add(animated);
          });
        } else {
          slides[1].classList.add(animated);
        }
      }
    }

    function endAnimated() {
      if (animated) {
        if (animated === 'moveUp') {
          setTimeout(() => {
            Array.from(slides).forEach(slide => {
              slide.classList.remove(animated);
            });
          }, 1000);

        } else {
          slides[slides.length - 1].classList.remove(animated);
        }
      }
    }

    function nextSlide() {
      container.appendChild(slides[0]);
    }
  };

  initSlider('.left-side-recipes__container', '.left-side-recipes__btn', 'fadeIn');
  initSlider('.right-side-recipes__body', '.left-side-recipes__btn', 'moveUp');
};

export default sliderRecipes;