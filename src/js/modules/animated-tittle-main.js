const animatedTittle = () => {
  const title = document.querySelector('.main__title');
  console.log(title);

  let arrTitle = (title.textContent.split(" ")),
    timeInterval = 0.1;

  title.textContent = "";

  for (let i = 0; i < arrTitle.length; i++) {
    const span = document.createElement('span');
    
    if (i !== arrTitle.length - 1 && i !== 2) {
      span.innerHTML = arrTitle[i] + '&nbsp';
    } else {
      span.innerHTML = arrTitle[i];
    }

    if (i === 0 || i === 3) {
      span.classList.add('main__title-normal');
    } 
    
    // span.classList.add('main__title-normal');
    span.style.cssText = 'display: inline-block; opacity: 0;filter: blur(4px)';
    span.style.cssText += `animation: fade-in 0.8s ${timeInterval}s forwards cubic-bezier(0.11, 0, 0.5, 0);`;
    timeInterval += 0.1;
    title.append(span);
  }
};

export default animatedTittle;