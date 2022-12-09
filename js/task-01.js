const categories = document.querySelector(`ul#categories`).children;
console.log(`Number of categories: ${categories.length}`);

for (const category of categories) {
  const titleCategory = category.querySelector(`h2`).textContent;
  const elements = category.querySelector(`ul`).children.length;
  console.log(`Category:${titleCategory}`);
  console.log(`Elements: ${elements}`);
}

/**
  |============================
  | Не зрозуміло, чому видає помилку, якщо використовую forEach
  |============================
*/

// categories.forEach((category) => {
//   const titleCategory = category.querySelector(`h2`).textContent;
//   const elements = category.querySelector(`ul`).children.length;
//   console.log(`Category:${titleCategory}`);
//   console.log(`Elements: ${elements}`);
// });
