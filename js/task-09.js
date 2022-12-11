function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const spanCol = document.querySelector("span.color");
const btn = document.querySelector("button.change-color");

const changeColor = () => {
  // Переробка.Результат функції виніс до змінної
  let randomCol = getRandomHexColor();

  document.body.style.backgroundColor = randomCol;
  spanCol.textContent = randomCol;
};
btn.addEventListener("click", changeColor);
