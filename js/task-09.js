function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const spanRef = document.querySelector(".color");
const buttonRef = document.querySelector(".change-color");

buttonRef.addEventListener("click", onBodyChange);

function onBodyChange(event) {
  const spanTextRef = (spanRef.textContent = getRandomHexColor());
  document.body.style.backgroundColor = spanTextRef;
}
