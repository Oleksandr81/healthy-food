import { dishCardInfo } from '../db-dish-cards';

const cards = () => {
  const cardsInfo = dishCardInfo;

  function initCards() {
    const container = document.querySelector('.dishes-cards__block');

    cardsInfo.forEach(item => {
      container.append(generateCard(item));
    });

    const imgCards = document.querySelectorAll('.card-dish__img');
    imgCards.forEach((card, i) => {
      card.style.background = `url('./src/image/dish/${cardsInfo[i].img}')`;
    });
  }

  function generateCard(item) {
    const mainBlockCard = document.createElement('div');
    mainBlockCard.classList.add('dishes-cards__card-dish', 'card-dish');

    mainBlockCard.innerHTML = `
      <div class="card-dish__img">
        <div class="card-dish__img-mask"></div>
      </div>
      <div class="card-dish__description">
        <h4 class="card-dish__title">${item.title}</h4>
        <div class="card-dish__subtitle">${item.subtitle}</div>
        <div class="card-dish__text">${item.descr}</div>
      </div>
      <div class="card-dish__oder-block">
        <div class="card-dish__rating rating">
          <div class="rating__body">
            <div class="rating__active"></div>
          </div>
          <div class="rating__value" id="${item.rating}">${item.rating}</div>
        </div>
        <div class="card-dish__button button button-dish">
          <button class="button__text text-dish">Order</button>
          <span class="button__img">
            <img src="./src/image/icon/buy-icon.svg" alt="buy-icon">
          </span>
        </div>
      </div>
    `;
    return mainBlockCard;
  }

  function bindEventCards() {
    const cards = document.querySelectorAll('.card-dish');
    
    cards.forEach(card => {
      card.addEventListener('mouseover', (e) => {
        const cardsReiting = card.querySelector('.card-dish__rating, .rating');
        
        changeSvgColorToGold(cardsReiting);
      });

      card.addEventListener('mouseout', (e) => {
        const cardsReiting = card.querySelector('.card-dish__rating, .rating');

        changeSvgColorToGrey(cardsReiting);
      });
    });
  }

  function changeSvgColorToGold(card) {
    const stars = card.querySelector('.rating__body'),
      starsRating = stars.querySelector('.rating__active');
      
      // stars.classList.add('rating__body_active');
      starsRating.classList.add('rating__active_active');     
  }

  function changeSvgColorToGrey(card) {
    const stars = card.querySelector('.rating__body'),
      starsRating = card.querySelector('.rating__active');

    // stars.classList.remove('rating__body_active');
    starsRating.classList.remove('rating__active_active');
  }

  initCards();
  bindEventCards();
};

export default cards;