const showUpMenu = () => {
  const header = document.querySelector('header'),
    blockHeader = document.querySelector('.header__block'),
    burgerIcon = document.querySelector('.menu__burger'),
    menu = document.querySelector('.menu__list');

  let timer = null,
    mouseY;

  function scrollMouse() {
    let oldScrollTopPosition = 0;

    window.addEventListener('scroll', () => {
      const scrollTopPosition = document.documentElement.scrollTop;

      addClassShow(scrollTopPosition);

      if (header.classList.contains('show') && oldScrollTopPosition > scrollTopPosition && !timer) {
        headerShow();
        headerHideByTime();
      } else if (header.classList.contains('show') && oldScrollTopPosition < scrollTopPosition && mouseY > 80) {
        headerHide();
      }

      oldScrollTopPosition = scrollTopPosition;
    });
  }

  function addClassShow(scroll) {
    if (scroll > 1200) {
      header.classList.add('show');
    } else {
      if (header.classList.contains('show')) {
        header.classList.remove('show');
      }
    }
  }

  function headerShow() {
    header.classList.remove('hideToUp');
    header.classList.add('fadeInUp');
  }

  function headerHide() {
    header.classList.add('hideToUp');
    header.classList.remove('fadeInUp');
    document.body.style.overflow = '';
    burgerIcon.classList.remove('_active');
    menu.classList.remove('show-menu');

    timer = null;
  }

  function headerHideByTime() {
    timer = setTimeout(() => {
      headerHide();
    }, 5000);
  }

  blockHeader.addEventListener('mouseover', () => {
    clearTimeout(timer);
  });

  blockHeader.addEventListener('mouseout', () => {
    headerHide();
  });

  window.addEventListener('mousemove', (e) => {
    mouseY = e.clientY;
    if (mouseY < 80) {
      headerShow();
      clearTimeout(timer);
    }
  });

  scrollMouse();
};

export default showUpMenu;