function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btn = document.querySelector("button.change-color");
const changeColor = () => {
  let body = document.querySelector("body");
  body.style.backgroundColor = getRandomHexColor();
  document.querySelector("span.color").textContent = getRandomHexColor();
};
btn.addEventListener("click", changeColor);
