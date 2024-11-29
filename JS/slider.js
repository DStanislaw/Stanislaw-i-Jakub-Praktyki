document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const scrollAmount = 350; // Ilość przesuwania w px
  
    // Obsługa kliknięcia przycisku "prev"
    prevButton.addEventListener('click', () => {
      carousel.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      });
    });
  
    // Obsługa kliknięcia przycisku "next"
    nextButton.addEventListener('click', () => {
      carousel.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    });
  });
  