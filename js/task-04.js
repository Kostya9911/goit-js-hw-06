let counterValue = 0;
// Переробка. Виніс окрему змінну
const spanAll = document.querySelector("#value");
const decrementClick = () => {
  counterValue -= 1;
  spanAll.textContent = counterValue;
};
const incrementClick = () => {
  counterValue += 1;
  spanAll.textContent = counterValue;
};

const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');
btnDecrement.addEventListener("click", decrementClick);
btnIncrement.addEventListener("click", incrementClick);
