const sliderpopup = (containerSrelctor, prevSelector, nextSelector) => {
  const container = document.querySelector(containerSrelctor),
    btnPrev = document.querySelector(prevSelector),
    btnNext = document.querySelector(nextSelector),
    slides = container.children,
    time = 800;

  let checkButton = false,
    isDragging = false,
    startPos = 0,
    currentTranslate = 0,
    prevTranslate = 0,
    animationID = 0;

    //Touch events
    container.addEventListener('touchstart', (e) => {
      disableImg(e);
      let slide = e.target.closest('.popup__chefs-body');

      slide.addEventListener('touchstart', touchStart());
      slide.addEventListener('touchend', touchEnd);
      slide.addEventListener('touchmove', touchMove);

    });

    container.addEventListener('mousedown', (e) => {
      disableImg(e);
      let slide = e.target.closest('.popup__chefs-body');

      slide.addEventListener('mousedown', touchStart());
      slide.addEventListener('mouseup', touchEnd);
      slide.addEventListener('mouseleave', touchEnd);
      slide.addEventListener('mousemove', touchMove);
    });


  function disableImg(e) {
    let slidesImage = e.target.closest('.popup__chefs-body').querySelectorAll('img');
    slidesImage.forEach(img => {
      img.addEventListener('dragstart', (e) => e.preventDefault());
    });
  }

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
      btnNext.click();
    }

    if (movedBy > 100) {
      btnPrev.click();
    }

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
  //--

  btnPrev.addEventListener('click', () => {
    if (!checkButton) {
      slides[1].classList.remove('showFromRight');
      slides[0].classList.remove('hideToLeft');
      slides[2].classList.remove('hideToRight');

      slides[0].classList.add('showFromLeft');
      slides[1].classList.add('hideToRight');

      let active = slides[slides.length - 1];
      container.insertBefore(active, slides[0]);

      slides[2].classList.remove('showFromLeft');
      slides[0].classList.remove('hideToRight');

      pauseClickButton();
    }
  });

  btnNext.addEventListener('click', () => {
    if (!checkButton) {
      slides[1].classList.remove('showFromLeft');
      slides[2].classList.remove('hideToRight');

      slides[2].classList.add('showFromRight');
      slides[1].classList.add('hideToLeft');

      nextSlide();

      slides[0].classList.remove('showFromRight');

      pauseClickButton();
    }
  });

  function nextSlide() {
    container.appendChild(slides[0]);
    slides[slides.length - 1].classList.remove('hideToLeft');
  }

  function pauseClickButton() {
    checkButton = true;
    setTimeout(() => {
      checkButton = false;
    }, time);
  }
};

export default sliderpopup;