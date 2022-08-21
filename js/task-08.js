const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const emailEl = event.currentTarget.email.value;
  const passwordEl = event.currentTarget.password.value;

  if (emailEl === "" || passwordEl === "") {
    alert("applay the form");
        return;
  }
  const formData = new FormData(event.currentTarget);

  formData.forEach((value, name) => {
    // console.log(formData);
    // console.log("name:", name);
    // console.log("value:", value);

    const dataForm = `${name}: ${value}`;
    console.log(dataForm);

    form.reset()

    return dataForm;
  });
  
}
  