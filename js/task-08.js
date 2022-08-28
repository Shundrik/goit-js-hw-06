const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);
console.log(form.elements);

function onFormSubmit(event) {
  event.preventDefault();

// 1 var
  // const emailEl = event.currentTarget.email.value;
  // const passwordEl = event.currentTarget.password.value;

  // 2 var
  // const emailEl = document.querySelector("input[name=email]");
  // const passwordEl = document.querySelector("input[name=password]");
 
  // 3 var
  // const emailEl = form[0];
  // const emailEl = form[1];

  // 4 var
  const emailEl = form.elements.email;
  const passwordEl = form.elements.password;

  if (emailEl.value === "" || passwordEl.value === "") {
    alert("applay the form");
  } else {
    console.log({ email: emailEl.value, password: passwordEl.value });
    form.reset();
  }
  return;
}








// --- 2 var

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
