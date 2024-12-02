// Pobieranie wszystkich slajdów
const slides = document.querySelectorAll(".image-container");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

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

// Inicjalizacja
updateSlide(currentSlide);
