const formName = document.querySelector(".name-form");
const email = document.querySelector(".email");
const subject = document.querySelector(".subject");
const message = document.querySelector(".message");
const submitBtn = document.querySelector(".submit-btn");


submitBtn.addEventListener("click", () => {
  [formName, email, subject, message].forEach(function (element) {
    element.value = ""

  });
  alert(`Thank you ${formName.value} for reaching out, we will respond promptly`)
});
