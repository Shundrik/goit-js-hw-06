const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const liEl = ingredients.map((item) => {
  let liElements = document.createElement("li");
  liElements.classList.add(item);
  liElements.textContent = item;
  return liElements;
});

const ulEl = document.querySelector("#ingredients");
// console.log(ulEl);
ulEl.append(...liEl);
