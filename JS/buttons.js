document.addEventListener("DOMContentLoaded", function () {
    // Pobranie wszystkich kontrolek zmiany ilości
    const productCards = document.querySelectorAll(".product-card");
  
    productCards.forEach((card) => {
      const minusBtn = card.querySelector(".quantity-controls button:first-child"); // Przycisk "-"
      const plusBtn = card.querySelector(".quantity-controls button:last-child"); // Przycisk "+"
      const quantityInput = card.querySelector(".quantity-controls .quantity"); // Pole ilości
  
      // Obsługa zmniejszania ilości
      minusBtn.addEventListener("click", () => {
        let currentValue = parseInt(quantityInput.value) || 1; // Aktualna wartość
        if (currentValue > 1) {
          quantityInput.value = currentValue - 1; // Zmniejsz ilość
        }
      });
  
      // Obsługa zwiększania ilości
      plusBtn.addEventListener("click", () => {
        let currentValue = parseInt(quantityInput.value) || 1; // Aktualna wartość
        quantityInput.value = currentValue + 1; // Zwiększ ilość
      });
  
      // Obsługa wpisywania ręcznie w polu ilości
      quantityInput.addEventListener("input", () => {
        let value = parseInt(quantityInput.value);
        if (isNaN(value) || value < 1) {
          quantityInput.value = 1; // Minimalna ilość to 1
        }
      });
    });
  });
  