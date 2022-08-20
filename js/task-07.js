const inputRef = document.querySelector("#font-size-control");
const spanRef = document.querySelector("#text");


const inputEl = document.getElementById("font-size-control");
inputRef.addEventListener("input", onRangeInput);

function onRangeInput(event) {
  console.log(event.target.value);
  spanRef.style.fontSize = event.target.value + "px";
  return (spanRef.style.fontSize = event.target.value);
}
