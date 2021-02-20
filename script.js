const emailInput = document.getElementById("email");
const warningText = document.getElementsByClassName("warning")[0];
const emailVal = /[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/;
document.getElementById("btnNotify").addEventListener("click", () => {
  if (emailInput.value == "" || !emailVal.test(emailInput.value)) {
    emailInput.classList.add("err__active");
    emailInput.placeholder = "example@email/com";
    warningText.classList.add("err__active");
    setTimeout(hideErrMsg, 5000);
  } else {
    warningText.innerHTML = "Successfully submitted!";
    warningText.classList.add("success");
    setTimeout(hideSuccessMsg, 5000);
  }
});

hideErrMsg = () => {
  emailInput.classList.remove("err__active");
  emailInput.placeholder = "Your email address..";
  warningText.classList.remove("err__active");
  emailInput.value = "";
};

hideSuccessMsg = () => {
  warningText.classList.remove("success");
  warningText.innerHTML = "Please provide a valid email address";
  emailInput.value = "";
};
