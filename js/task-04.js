let counterValue = 0;

const spanNum = document.querySelector("#value");
const buttonEl = document.querySelectorAll("#counter button");

// console.log(buttonEl[0]);
// console.log(buttonEl[1]);

const btnDecr = buttonEl[0].addEventListener("click", () => {
  counterValue -= 1;
  spanNum.textContent = counterValue;
  
});

const btnIncr = buttonEl[1].addEventListener("click", () => {
  counterValue += 1;
  spanNum.textContent = counterValue;
 
});
