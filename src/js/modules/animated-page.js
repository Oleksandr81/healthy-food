import showElement from "./animated-show-element";

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
      arrTitleBlock = [];

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

    window.addEventListener('scroll', () => {
      
      titleBlock.forEach((item, i) => {
        let classTitle = item.getAttribute('class').split(" ");
        arrTitleBlock.push(classTitle[0]);

        if ((titleBlock[i].offsetTop - window.pageYOffset) <= 750) {
          showElement('.' + arrTitleBlock[i], 'fadeIn', 3, 0);
          showElement('.about__slider-dish', 'fadeIn', 3, 0);
        }
      });

      console.log(workBlock.offsetTop - window.pageYOffset);
      console.log('get: ' + workBlock.getBoundingClientRect().bottom);
      
      if ((workBlock.offsetTop - window.pageYOffset) <= 750) {
        showElement('.step__block', 'fadeInDown', 1, 0.5, 0.2);
      }

      if ((dishesBlock.offsetTop - window.pageYOffset) <= 750) {
        showElement('.card-dish', 'fadeInDown', 1, 0.5, 0.2);
      }

      if ((chefsBlock.offsetTop - window.pageYOffset) <= 750) {
        showElement('.card-chef', 'fadeInDown', 1, 0.5, 0.2);
      }

      if ((recipeBlock.offsetTop - window.pageYOffset) <= 750) {
        showElement('.right-side-recipes__block', 'fadeInUpDown', 0.5, 1.5, 0.5);
      }
      
      if ((recipeBlock.offsetTop - window.pageYOffset) <= 750) {
        showElement('.recipes__left-side', 'fadeInLeft', 1, 0.5);
      }
      
      if ((socialBlock.offsetTop - window.pageYOffset) <= 750) {
        showElement('.social__box', 'fadeIn', 1, 0.5, 0.5);
      }      
    });
  }

  showElement('.main__button', 'fadeIn', 1, 9);
  showElement('.contact-main__block', 'fadeInDown', 1, 9.8, 0.2);
  animatedTitle();


};

export default animatedPage;