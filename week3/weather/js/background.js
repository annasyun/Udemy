const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.querySelector("img");

bgImage.src = `img/${chosenImage}`;
bgImage.style.width = "100%";

document.body.appendChild(bgImage);
