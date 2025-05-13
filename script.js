const shopping = document.querySelector(".shoppingBtn");
const phone = document.querySelector(".Phones");
const laptop = document.querySelector(".Laptops");
const app = document.querySelector(".Appliances");
const parts = document.querySelector(".Computer-Parts");
const filming = document.querySelector(".Filming");


[laptop, phone, app, parts, filming].forEach(function (element) {
  element.addEventListener("click", () => {
    console.log("ASd")
    window.location.href = `${element.firstElementChild.textContent}.html`;
  });
});