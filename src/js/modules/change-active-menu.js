const changeActiveMenu = () => {

  const menuLinks = document.querySelectorAll('[data-menu-item]'),
    titleBlocks = document.querySelectorAll('[data-page-menu]');


  function activeMenu() {
    let len = titleBlocks.length;

    for (let i = 0; i < len; i++) {
      if (window.scrollY >= titleBlocks[i].offsetTop) {
        removeActiveClass();
        menuLinks[i].classList.add('menu__link-active');
      }
    }
  }

  function removeActiveClass() {
    menuLinks.forEach(item => {
      item.classList.remove('menu__link-active');
    });
  }

  activeMenu();
  window.addEventListener('scroll', activeMenu);

};

export default changeActiveMenu;

