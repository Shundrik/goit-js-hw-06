const liEl = document.querySelectorAll(".item").length;
console.log(`Number of categories: ${liEl}`);

const itemEl = document.querySelectorAll(".item");

for (const item of itemEl) {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
}
