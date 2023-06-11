document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".list-group-item");

    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            buttons.forEach(function (btn) {
                btn.classList.remove("active");
            });
            this.classList.add("active");
            console.log(this);
            activeButton = this;
        });
    });
});

var dateSelect = document.querySelector(".book-info .time-input select:nth-child(1)");
var timeSelect = document.querySelector(".book-info .time-input select:nth-child(2)");
var trainerSelect = document.querySelector(".book-info .trainer-input select");
var nameInput = document.querySelector(".book-info .name-input input");
var emailInput = document.querySelector(".book-info .email-input input");
var phoneInput = document.querySelector(".book-info .phone-input input");

var activeButton = document.querySelector("body > div > div.list-group > button.list-group-item.list-group-item-action.active");

document.getElementById("booking-confirm").addEventListener("click", function () {
    document.querySelector(".book-info").style.display = "none";
    document.querySelector(".confirm-info").style.display = "block";
    document.querySelector(".booking-type").textContent = "Booking Number: " + Math.floor(Math.random() * 900000000);
    document.querySelector(".service-type").textContent = "Service: " + activeButton.textContent;
    document.querySelector(".trainer-type").textContent = "Trainer: " + trainerSelect.value;
    document.querySelector(".name-type").textContent = "Name: " + nameInput.value;
    document.querySelector(".date-type").textContent = "Date: " + dateSelect.value;
    document.querySelector(".time-type").textContent = "Time: " + timeSelect.value;
});