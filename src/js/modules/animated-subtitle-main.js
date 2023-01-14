const subtitleAnimation = () => {

  const typeText = (textSelector, speedType, timeStart) => {
    const subtitle = document.querySelector(textSelector),
      text = subtitle.textContent;

    let countLetter = 0;

    subtitle.textContent = '';

    function typeWriter() {
      if (countLetter < text.length) {
        subtitle.innerHTML += text.charAt(countLetter);
        countLetter++;
        setTimeout(typeWriter, speedType);
      }
    }
    
    setTimeout(() => {
      typeWriter();
    }, timeStart);
    
  };

  typeText('.main__text', 10, 1000);
};

export default subtitleAnimation;