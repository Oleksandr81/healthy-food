const scrolling = () => {
  let links = document.querySelectorAll('[href^="#"]'),
    speed = 0.3;

  window.addEventListener('scroll', () => {
    let toTop = document.documentElement.scrollTop;
    console.log(toTop);

    if (toTop < 750) {
      removeActiveClass();
      links[1].classList.add('menu__link-active');
    } else if (toTop > 750 && toTop < 1900) {
      removeActiveClass();
      links[2].classList.add('menu__link-active');
    } else if (toTop > 1900 && toTop < 3240) {
      removeActiveClass();
      links[3].classList.add('menu__link-active');
    } else if (toTop > 3240 && toTop < 3650) {
      removeActiveClass();
      links[4].classList.add('menu__link-active');
    } else if (toTop > 3650 && toTop < 4120) {
      removeActiveClass();
      links[5].classList.add('menu__link-active');
    } else if (toTop > 4120) {
      removeActiveClass();
      links[6].classList.add('menu__link-active');
    }
  });

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      removeActiveClass();

      if (link.classList.contains('menu__link')) {
        link.classList.add('menu__link-active');
      }

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
      if (link.classList.contains('menu__link')) {
        link.classList.remove('menu__link-active');
      }
    });
  }
};

export default scrolling;