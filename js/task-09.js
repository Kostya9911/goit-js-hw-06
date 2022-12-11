function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const spanCol = document.querySelector("span.color");
const btn = document.querySelector("button.change-color");
const changeColor = () => {
  let randomCol = getRandomHexColor();
  // let body = document.querySelector("body");
  document.body.style.backgroundColor = randomCol;
  spanCol.textContent = randomCol;
};
btn.addEventListener("click", changeColor);
