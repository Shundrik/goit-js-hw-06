function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const spanRef = document.querySelector(".color");
const buttonRef = document.querySelector(".change-color");

buttonRef.addEventListener("click",onBodyChange)

console.log(spanRef.textContent);
console.log(buttonRef);


function onBodyChange(event){
  console.log(event);
  const spanTextRef = spanRef.textContent = getRandomHexColor();
  console.log(spanRef.textContent);
  document.body.style.backgroundColor = spanTextRef ;
}

