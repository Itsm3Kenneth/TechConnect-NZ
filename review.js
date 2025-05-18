const review = document.querySelectorAll(".review");

review.forEach(function review(element) {
  element.addEventListener("click", (e) => {
    const name = element.parentNode.children[0].textContent;
    const description = element.parentNode.children[3].textContent;
    const image = element.parentNode.children[4].getAttribute("src");
    const price = element.parentNode.children[5].textContent;
    const html = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="normalize.css" />
    <link rel="stylesheet" href="phones.css" />
    <title>Review</title>
</head>
<body>
<nav class="navbar">
      <h2 class="name">TECH CONNECT</h2>
      <ul class="navbar-list">
        <li class="shoppingBtn"><a href="index.html">SHOPPING</a></li>
        <li><a href="about.html">ABOUT</a></li>
        <li><a href="contact.html">CONTACT</a></li>
      </ul>
    </nav>
    <h1>hi</h1>
</body>
</html>`;

    window.open("html.html");
  });
});
