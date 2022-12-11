const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("ul#ingredients");

const markup = ingredients.map((ingredient) => {
  let item = document.createElement("li");
  item.classList.add("item");
  item.textContent = ingredient;
  return item;
});

list.append(...markup);
console.log(list);
