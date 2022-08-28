const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  // const emailEl = event.currentTarget.email.value;
  // const passwordEl = event.currentTarget.password.value;

  const emailEl = document.querySelector("input[name=email]");
  const passwordEl = document.querySelector("input[name=password]");

  if (emailEl.value === "" || passwordEl.value === "") {
    alert("applay the form");
  } else {
    console.log({ email: emailEl.value, password: passwordEl.value });
    form.reset();
  }
  return;
}

// const form = document.querySelector('.login-form');

// form.addEventListener('submit', function (event) {
//     event.preventDefault();
//     const {
//         elements: { email, password }
//     } = event.currentTarget;
//       if(email.value.length === 0 || password.value.length === 0) {
//         alert('все поля должны быть заполнены!');
//       } else {
//           console.log({ email: email.value, password: password.value });
//     form.reset();
//     }

// });
