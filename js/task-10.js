// Create - створює нову коллекцію div, при цьому видаляє існуючу
// Destroy - видаляє існуючу коллекцію
// Перший div нової коллекції завжди 30px*30px, а всі інші завжди на 10px більше попередьго по height і width

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");

const boxes = document.querySelector("div#boxes");
const inputAll = document.querySelector("input");
// Змінна для розміру div
let size = 0;

const createBoxes = (amount) => {
  for (let i = 1; i <= amount; i += 1) {
    // Шаг розміру div
    size += 10;
    const createDiv = document.createElement("div");
    boxes.append(createDiv);
    const styles = createDiv.style;
    styles.height = `${size}px`;
    styles.width = `${size}px`;
    styles.backgroundColor = getRandomHexColor();
    styles.margin = "50px 10px";
    styles.border = "1px solid black";
    styles.display = "inline-block";
  }
};

const destroyBoxes = () => {
  // Ресет розміру div при кожному створенни нової коллекції.
  size = 20;
  boxes.innerHTML = "";
};
btnCreate.addEventListener("click", () => {
  // Ресет всіх існуючих div перед створенням нової коллекції
  destroyBoxes();

  let amount = inputAll.value;

  createBoxes(amount);
});
btnDestroy.addEventListener("click", () => {
  destroyBoxes();
});
