const inputRef = document.querySelector("#validation-input");
// console.log(inputRef);

// const colors = document.querySelector("style");
// console.log(colors.textContent);

// const colorWhite = colors.querySelector("#validation-input");
// console.log(colorWhite);

// const colorGreen = document.querySelector(".valid");
// console.log(colorGreen);

// const colorRed = document.querySelector("#validation-input.invalid");
// console.log(colorRed);

const inputValueEl = inputRef.addEventListener("blur", onCheckInput);

function onCheckInput(event) {
  console.log(event);
  event.currentTarget.value;

  if (event.currentTarget.value.length !== +inputRef.dataset.length) {
    inputRef.classList.add("invalid");
    inputRef.classList.remove("valid");
    return;
  } else if (inputRef.classList.value.includes("invalid")) {
    inputRef.classList.replace("invalid", "valid");
  }
}
