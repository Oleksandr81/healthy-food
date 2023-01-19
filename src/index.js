import animatedTittle from "./js/modules/animated-tittle-main";
import subtitleAnimation from "./js/modules/animated-subtitle-main";
import showElement from "./js/modules/animated-show-element";
import slider from "./js/modules/slider";
import animatedPage from "./js/modules/animated-page";
import scrolling from "./js/modules/scrolling";
import cards from "./js/modules/cards";
import showUpMenu from "./js/modules/shom-up-menu";
import menuBuger from "./js/modules/menu-burger";
import changeActiveMenu from "./js/modules/change-active-menu";
import modals from "./js/modules/modals";
import SliderChef from "./js/modules/slider-popup";
import sliderRecipes from "./js/modules/slider-recipes";
import starsRating from "./js/modules/stars-rating";

window.addEventListener('DOMContentLoaded', () => {

  'use strict';
  animatedTittle();
  animatedPage();
  subtitleAnimation();
  showElement();
  slider();
  scrolling();
  cards();
  showUpMenu();
  menuBuger('.menu__burger');
  changeActiveMenu();
  modals('.popup__chefs', '.card-chef', '.popup__chefs-btn-close');
  sliderRecipes();
  starsRating();


  const sliderChef = new SliderChef({
    container: '.popup__chefs-block' ,
    slides: '.popup__chefs-body',
    prev: '.popup__chefs-btn-prev',
    next: '.popup__chefs-btn-next'
  });
  sliderChef.bindTriggers();
});