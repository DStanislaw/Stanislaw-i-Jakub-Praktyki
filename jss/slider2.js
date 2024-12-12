// Pobieranie wszystkich slajdów
const slides = document.querySelectorAll(".slider__image-container");
const leftArrow = document.querySelector(".left__arrow");
const rightArrow = document.querySelector(".right__arrow");
const leftArrow_2 = document.querySelector(".left__arrow_2");
const rightArrow_2 = document.querySelector(".right__arrow_2");

let currentSlide = 0;

// Funkcja do aktualizacji widoczności slajdów
function updateSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? "block" : "none";
  });
}

// Obsługa następnego slajdu
function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlide(currentSlide);
}

// Obsługa poprzedniego slajdu
function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateSlide(currentSlide);
}

// Podpięcie eventów
leftArrow.addEventListener("click", prevSlide);
rightArrow.addEventListener("click", nextSlide);

leftArrow_2.addEventListener("click", prevSlide);
rightArrow_2.addEventListener("click", nextSlide);

// Inicjalizacja
updateSlide(currentSlide);
