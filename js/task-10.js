function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
let size = 20;
const createBoxes = (amount) => {
  for (let i = 1; i <= amount; i += 1) {
    size += 10;
    const createDiv = document.createElement("div");
    const boxes = document.querySelector("div#boxes");
    boxes.append(createDiv);
    createDiv.style.height = `${size}px`;
    createDiv.style.width = `${size}px`;
    createDiv.style.backgroundColor = getRandomHexColor();
    createDiv.style.margin = "50px 10px";
    createDiv.style.border = "1px solid black";
    createDiv.style.display = "inline-block";
  }
};
const destroyBoxes = (amount) => {
  for (let i = 1; i <= amount; i += 1) {
    const allCat = document.querySelector("#boxes div");
    allCat.remove();
    size -= 10;
  }
};
btnCreate.addEventListener("click", () => {
  let counterDiv = document.querySelectorAll("#boxes div").length;
  destroyBoxes(counterDiv);

  let amount = document.querySelector("input").value;
  createBoxes(amount);
});
btnDestroy.addEventListener("click", () => {
  let counterDiv = document.querySelectorAll("#boxes div").length;
  destroyBoxes(counterDiv);
});
