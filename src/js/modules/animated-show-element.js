const showElement = (elementSelector, animation, speedTime, timeDelay, timeDelayBlock = 0) => {

    const elements = document.querySelectorAll(elementSelector);

    elements.forEach((element, i) => {
      element.classList.add(animation);
      element.style.animationDuration = `${speedTime}s`;

      setTimeout(() => {
        element.style.animationDelay = `${timeDelay + i * timeDelayBlock}s`;
      }, timeDelay);
    });
};

export default showElement;