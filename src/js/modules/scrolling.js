const scrolling = () => {
  let links = document.querySelectorAll('[href^="#"]'),
    speed = 0.3;

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

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
};

export default scrolling;