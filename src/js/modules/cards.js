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
        <div class="card-dish__reiting">
          <object data="./src/image/icon/stars.svg" type="image/svg+xml" id="stars"></object>
          <div class="card-dish__voice">${item.reiting}</div>
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
        const cardsReiting = card.querySelector('.card-dish__reiting');
        changeSvgColorToGold(cardsReiting);
      });

      card.addEventListener('mouseout', (e) => {
        const cardsReiting = card.querySelector('.card-dish__reiting');

        changeSvgColorToGrey(cardsReiting);
      });
    });
  }

  function changeSvgColorToGold(card) {
    const svg = card.querySelector('#stars').contentDocument,
      elements = svg.querySelectorAll('.primaryColor');

    elements.forEach(item => {
      item.style.fill = '#F9AD3D';
    });
  }

  function changeSvgColorToGrey(card) {
    const svg = card.querySelector('#stars').contentDocument,
      elements = svg.querySelectorAll('.primaryColor');

    elements.forEach(item => {
      item.style.fill = '#4D4D4D';
    });
  }

  initCards();
  bindEventCards();
};

export default cards;