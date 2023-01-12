import animatedTittle from "./js/modules/animated-tittle-main";
import subtitleAnimation from "./js/modules/animated-subtitle-main";
import showElement from "./js/modules/animated-show-element";
import slider from "./js/modules/slider";
import animatedPage from "./js/modules/animated-page";
import scrolling from "./js/modules/scrolling";
import cards from "./js/modules/cards";
import showUpMenu from "./js/modules/shom-up-menu";
import menuBuger from "./js/modules/menu-burger";

window.addEventListener('DOMContentLoaded', () => {

  'use strict';
  // animatedTittle();
  // animatedPage();
  // subtitleAnimation();
  showElement();
  slider();
  scrolling();
  cards();
  showUpMenu();
  menuBuger('.menu__burger');

});