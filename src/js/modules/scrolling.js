import menuBuger from "./menu-burger";

const scrolling = () => {
  const burgerIcon = document.querySelector('.menu__burger'),
    menu = document.querySelector('.menu__list'),
    titleBlocks = document.querySelectorAll('[data-page-menu]');

  let links = document.querySelectorAll('[data-menu-item]'),
    speed = 0.3;  

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();     

      removeActiveClass();
      link.classList.add('menu__link-active');

      burgerIcon.classList.remove('_active');
      menu.classList.remove('show-menu');
      document.body.style.overflow = '';

      let withTop = document.documentElement.scrollTop,
        hash = link.getAttribute('href'),
        toBlock = document.querySelector(hash).getBoundingClientRect().top,
        start = null;     

      requestAnimationFrame(step);

      function step(time) {
        if (start === null) {
          start = time;
        }

        let progress = time - start,
          r = (toBlock < 0 ? Math.max(withTop - progress / speed, withTop + toBlock) : Math.min(withTop + progress / speed, withTop + toBlock));

        document.documentElement.scrollTo(0, r);
        
        if (r != withTop + toBlock) {
          requestAnimationFrame(step);
        } else {
          location.hash = hash;
        }
      }
    });
  });

  function removeActiveClass() {
    links.forEach(link => {
      // if (link.classList.contains('menu__link')) {
        link.classList.remove('menu__link-active');
      // }
    });
  }
};

export default scrolling;