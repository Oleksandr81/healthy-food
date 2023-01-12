const menuBuger = (burgerSelector) => {
  const burgerIcon = document.querySelector(burgerSelector),
    menu = document.querySelector('.menu__list');
  
  let intViewportHeight = window.innerHeight;
  
  window.addEventListener('resize', () => {
    intViewportHeight = window.innerHeight;
  });


  burgerIcon.addEventListener('click', () => {
    console.log(intViewportHeight);
    console.log(menu);

    burgerIcon.classList.toggle('_active');
    menu.classList.toggle('show-menu');

    if (burgerIcon.classList.contains('_active')) {
      document.body.style.overflow = 'hidden';
      
    } else {
      document.body.style.overflow = '';
    }

    if (menu.classList.contains('show-menu')) {
      menu.style.height = `${intViewportHeight}px`;
    }
    
  });
};

export default menuBuger;