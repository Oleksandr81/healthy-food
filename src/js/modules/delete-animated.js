const removeAnimated = (itemsSelector, animatedClass, time) => {
  const items = document.querySelectorAll(itemsSelector),
    removeClass = animatedClass,
    timeRemove = time;

  setTimeout(() => {
    items.forEach(item => {
      if (item.classList.contains(removeClass)) {
        item.style.cssText = '';
        item.classList.add('stop-animated');
        item.classList.remove(removeClass);
      }
    });
  }, timeRemove);
    
};

export default removeAnimated;