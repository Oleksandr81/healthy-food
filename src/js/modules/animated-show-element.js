const showElement = () => {

  function fadeIn(elementSelector, animation, speedTime, timeDelay, timeDelayBlock = 0) {
    const elements = document.querySelectorAll(elementSelector);
    
    elements.forEach((element, i) => {
      element.classList.add(animation);
      element.style.animationDuration = `${speedTime}s`;

      setTimeout(() => {
        element.style.animationDelay = `${timeDelay + i*timeDelayBlock}s`;
      }, timeDelay);
    });
  }

  fadeIn('.main__button', 'fadeIn', 1, 9);
  fadeIn('.contact-main__block', 'fadeInDown', 1, 9.8, 0.2);
};

export default showElement;