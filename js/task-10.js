function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  input: document.querySelector("#controls").firstElementChild,
  create: document.querySelectorAll("button")[0],
  destroy: document.querySelectorAll("button")[1],
  boxes: document.querySelector("#boxes"),
};

// refs.input.addEventListener("input",onInput);
refs.create.addEventListener("click", createColorBoxes);
refs.destroy.addEventListener("click", destroyBoxes);

// let number = 0 ;

// function onInput(event) {
//     +event.currentTarget.value;
// if(+event.currentTarget.value >= 1 ){
//   let number = +event.currentTarget.value;
//     console.log(number);
//     return number;
//   }
// }

function createColorBoxes(amount) {
  let inputValue = +refs.input.value;
  console.log(inputValue);

  let width = 50;
  let height = 50;
  if (inputValue >= 1) {
    for (let index = 0; index < inputValue; index++) {
      console.log(index);
      //  let width = 100;
      width += 30;
      //  let height = 100;
      height += 30;
      const divColorEl = `<div style="width:${width}px;
    height:${height + 10}px;background-color: ${getRandomHexColor()};
    text-align: center; text-align: center;position: absolute;
    display: flex;
    align-items: flex-end;">${getRandomHexColor()}</div>`;
      // console.log(divColorEl);
      refs.boxes.insertAdjacentHTML("afterbegin", divColorEl);
      console.log(divColorEl);
      divColorEl;
    }
  }
}

function destroyBoxes(event) {
  // console.log(event);
  refs.boxes.innerHTML = " ";
  refs.input.value = "";
  console.clear();
}
