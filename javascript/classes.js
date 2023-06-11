const popup = document.getElementById("popup");
const closeButton = document.getElementById("closeButton");
const danceButton = document.getElementById("dance-book");
const thaiButton = document.getElementById("thai-book");


danceButton.addEventListener("click", function () {
    popup.style.display = "block";
});

thaiButton.addEventListener("click", function () {
    popup.style.display = "block";
});

closeButton.addEventListener("click", function () {
    popup.style.display = "none";
});