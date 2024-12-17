// Pobranie elementów
const menuButton = document.querySelector(".menu__button"); // Przycisk menu
const navigationList = document.querySelector(".navigation__list"); // Lista nawigacyjna

// Funkcja do przełączania klasy aktywnej w menu
menuButton.addEventListener("click", () => {
  navigationList.classList.toggle("active"); // Dodanie lub usunięcie klasy 'active'
});
