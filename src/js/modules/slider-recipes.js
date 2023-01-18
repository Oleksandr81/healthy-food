const sliderRecipes = () => {
  const initSlider = (containerSliderSelector, btnSelector, animated, move = null) => {
    const container = document.querySelector(containerSliderSelector),
      slides = container.children,
      nextBtn = document.querySelectorAll(btnSelector);

    let checkButton = false;

    nextBtn.forEach(btn => {

      btn.addEventListener('click', () => {
        if (!checkButton) {
          checkButton = true;

          if (animated) {
            if (animated === 'moveUp') {
              Array.from(slides).forEach(slide => {
                slide.classList.add(animated);
              });
            } else {
              slides[1].classList.add(animated);
            }
          }

          nextSlide();

          setTimeout(() => {
            checkButton = false;
          }, 1000);

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
      });

    });


    function nextSlide() {
      container.appendChild(slides[0]);
    }
  };

  initSlider('.left-side-recipes__container', '.left-side-recipes__btn', 'fadeIn');
  initSlider('.right-side-recipes__body', '.left-side-recipes__btn', 'moveUp');
};

export default sliderRecipes;