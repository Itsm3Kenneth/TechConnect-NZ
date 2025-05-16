const buyBtn = document.querySelectorAll("button");
const shoppingCart = document.querySelector(".cart-display");
const empty = document.querySelector(".empty");
const remove = document.querySelector(".remove");
let isEmpty = true;
let html = "";

console.log(remove);

function cas() {
  if (isEmpty) {
    empty.textContent = "Looks Empty...";
    remove.textContent = "";
  } else {
    shoppingCart.innerHTML = ""
    empty.textContent = "";
    remove.textContent = "Delete All";
  }
}

remove.addEventListener("click", () => {
  isEmpty = true;
  console.log("asd");
  shoppingCart.innerHTML = `<p class="empty">Looks Empty...</p>`;
  cas();
});

cas();
buyBtn.forEach(function (element) {
  element.addEventListener("click", (e) => {
    isEmpty = false;
    console.log(isEmpty);
    const name = element.parentNode.children[0].textContent;
    const description = element.parentNode.children[3].textContent;
    const image = element.parentNode.children[4].getAttribute("src");
    const price = element.parentNode.children[5].textContent;
    console.log(`Phone: ${name}, ${price}, ${description}, ${image}`);
    cas();
    html += `<aside class="cart-display">
              <div class="item">
                <h3 class="item-name">${name}</h3>
                <p class="item-price">${price}</p>
              </div>
              <p class="description">${description}</p>
              <div class="image-holder">
                <img
                  class="image"
                  src="${image}"
                  alt=""
                />
              </div>
            </aside>
            
          </aside>`;
    shoppingCart.innerHTML += html;
    shoppingCart.scrollIntoView();
  });
});
