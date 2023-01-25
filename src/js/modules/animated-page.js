import showElement from "./animated-show-element";
import removeAnimated from "./delete-animated";

const animatedPage = () => {

  function animatedTitle() {
    const titleBlock = document.querySelectorAll('.title-block'),
      workBlock = document.querySelector('.work__block'),
      dishesBlock = document.querySelector('.dishes-cards'),
      chefsBlock = document.querySelector('.chefs__block'),
      recipeBlock = document.querySelector('.recipes__block'),
      recipesBlock = document.querySelectorAll('.right-side-recipes__block'),
      socialBox = document.querySelectorAll('.social__box'),
      socialBlock = document.querySelector('.social__block'),
      aboutTextBlock = document.querySelector('.about__text-block'),
      arrTitleBlock = [];

    let screenDisplayHeight = document.documentElement.clientHeight;

    window.addEventListener('resize', () => {
      screenDisplayHeight = document.documentElement.clientHeight;
    });

    titleBlock.forEach((item, i) => {
      item.style.opacity = '0';
    });

    recipesBlock.forEach(item => {
      item.style.maxHeight = '0';
      item.style.paddingTop = '0';
      item.style.paddingBottom = '0';
    });

    socialBox.forEach(item => {
      item.style.opacity = '0';
    });

    // console.log(screenDisplayHeight);

    function showBlockAbout() {
      showElement('.about__title-block', 'fadeIn', 3, 4);
      showElement('.about__text-block', 'fadeIn', 3, 4.2);
      showElement('.about__slider-dish', 'fadeIn', 3, 4.5);
    }

    function showBlockWork() {
      showElement('.work__title-block', 'fadeIn', 3, 5);
      showElement('.step__block', 'fadeInDown', 1, 5.3, 0.2);
    }

    if (screenDisplayHeight > 950 && screenDisplayHeight < 1750) {
      showBlockAbout();
    } else if (screenDisplayHeight >= 1750) {
      showBlockAbout();
      showBlockWork();
    }

    function showTitleAnimated() {
      window.addEventListener('scroll', () => {
        titleBlock.forEach((item, i) => {
          let classTitle = item.getAttribute('class').split(" ");
          arrTitleBlock.push(classTitle[0]);

          if ((titleBlock[i].offsetTop - window.pageYOffset) <= screenDisplayHeight * 0.8) {
            showElement('.' + arrTitleBlock[i], 'fadeIn', 3, 0);
            showElement('.about__slider-dish', 'fadeIn', 3, 0);
            showElement('.about__text-block', 'fadeIn', 3, 0);
          }
        });
      });

    }

    window.addEventListener('scroll', () => {

      showTitleAnimated();

      if ((workBlock.offsetTop - window.pageYOffset) <= screenDisplayHeight * 0.8) {
        showElement('.step__block', 'fadeInDown', 1, 0.5, 0.2);
      }

      if ((dishesBlock.offsetTop - window.pageYOffset) <= screenDisplayHeight * 0.8) {
        showElement('.card-dish', 'fadeInDown', 1, 0.5, 0.2);
      }

      if ((chefsBlock.offsetTop - window.pageYOffset) <= screenDisplayHeight * 0.8) {
        showElement('.card-chef', 'fadeInDown', 1, 0.5, 0.2);
      }

      if ((recipeBlock.offsetTop - window.pageYOffset) <= screenDisplayHeight * 0.8) {
        showElement('.right-side-recipes__block', 'fadeInUpDown', 0.5, 1.5, 0.5);
        removeAnimated('.right-side-recipes__block', 'fadeInUpDown', 4000);
      }

      if ((recipeBlock.offsetTop - window.pageYOffset) <= screenDisplayHeight * 0.8) {
        showElement('.recipes__left-side', 'fadeInLeft', 1, 0.5);
      }

      if ((socialBlock.offsetTop - window.pageYOffset) <= screenDisplayHeight * 0.8) {
        showElement('.social__box', 'fadeIn', 1, 0.5, 0.5);
      }
    });
  }

  showElement('.main__button', 'fadeIn', 1, 3);
  showElement('.contact-main__block', 'fadeInDown', 1, 3.5, 0.2);
  animatedTitle();


};

export default animatedPage;