// const inputEl = document.querySelector("#name-input");
// console.log(inputEl.textContent);

// const spanEl = document.querySelector("#name-output");
// console.log(spanEl.textContent);

const refs = {
  input: document.querySelector("#name-input"),
  span: document.querySelector("#name-output"),
};
// console.log(refs.input);
// console.log(refs.span);

const inputValueEl = refs.input.addEventListener("input", onInput);

function onInput(event) {
  console.log(event.currentTarget.value);
  event.currentTarget.value;
  refs.span.textContent = event.currentTarget.value || "Anonymous";
}
