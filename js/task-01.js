const categories = document.querySelector(`ul#categories`).children;
console.log(`Number of categories: ${categories.length}`);

// Переробка. Розпилив новий массив. forEach запрацював!))
const newCategories = [...categories];

newCategories.forEach((category) => {
  const titleCategory = category.querySelector(`h2`).textContent;
  const elements = category.querySelector(`ul`).children.length;
  console.log(`Category:${titleCategory}`);
  console.log(`Elements: ${elements}`);
});
