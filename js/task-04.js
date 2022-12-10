let counterValue = 0;

const decrementClick = () => {
  counterValue -= 1;
  document.querySelector("#value").textContent = counterValue;
};
const incrementClick = () => {
  counterValue += 1;
  document.querySelector("#value").textContent = counterValue;
};

const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');
btnDecrement.addEventListener("click", decrementClick);
btnIncrement.addEventListener("click", incrementClick);
