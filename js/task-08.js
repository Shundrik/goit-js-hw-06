const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);
const array = [];

function onFormSubmit(event) {
  event.preventDefault();

  const emailEl = event.currentTarget.email.value;
  const passwordEl = event.currentTarget.password.value;

  if (emailEl === "" || passwordEl === "") {
    
    alert("applay the form");
  }
    else {
      console.log( {email: emailEl, password:passwordEl});
      form.reset();

    }
    return;
  }

