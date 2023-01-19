const starsRating = () => {
  const ratingBloks = document.querySelectorAll('.card-dish__rating, .rating');

  ratingBloks.forEach(block => {
    const ratingValue = block.lastElementChild.id,
      ratingLine = block.querySelector('.rating__active');
    
    let ratingPercent = Math.floor((+ratingValue / 5) * 100);
    
    ratingLine.style.width = `${ratingPercent}%`;
  });
  
};

export default starsRating;