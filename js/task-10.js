function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  input: document.querySelector("#controls").firstElementChild,
  create: document.querySelectorAll("button")[0],
  destroy: document.querySelectorAll("button")[1],
  boxes: document.querySelector("#boxes"),
};

refs.create.addEventListener("click", createColorBoxes);
refs.destroy.addEventListener("click", destroyBoxes);

function createColorBoxes(amount) {
  let inputValue = +refs.input.value;
  console.log(inputValue);

  let width = 50;
  let height = 50;
  if (inputValue >= 1) {
    for (let index = 0; index < inputValue; index++) {
      console.log(index);

      width += 30;

      height += 30;
      const divColorEl = `<div style="width:${width}px;
    height:${height + 10}px;background-color: ${getRandomHexColor()};
    text-align: center; text-align: center;position: absolute;
    display: flex;
    align-items: flex-end;">${getRandomHexColor()}</div>`;
      refs.boxes.insertAdjacentHTML("afterbegin", divColorEl);
      console.log(divColorEl);
      divColorEl;
    }
  }
}

function destroyBoxes(event) {
  refs.boxes.innerHTML = " ";
  refs.input.value = "";
  console.clear();
}
