const menuBuger = (burgerSelector) => {
  const burgerIcon = document.querySelector(burgerSelector),
    menu = document.querySelector('.menu__list');
  
  let intViewportHeight = window.innerHeight;
  
  window.addEventListener('resize', () => {
    intViewportHeight = window.innerHeight;
  });


  burgerIcon.addEventListener('click', () => {
    burgerIcon.classList.toggle('_active');
    menu.classList.toggle('show-menu');

    if (burgerIcon.classList.contains('_active')) {
      document.body.style.overflow = 'hidden';
      menu.style.height = `${intViewportHeight}px`;
    } else {
      document.body.style.overflow = '';
    }    
  });
};

export default menuBuger;