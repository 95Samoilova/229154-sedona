var link = document.querySelector(".choose-hotel-title");
var popup = document.querySelector(".choose-hotel-popup");
var form = popup.querySelector("form");
var date = popup.querySelector("[name=date-hotel-in]");
var dateout = popup.querySelector("[name=date-hotel-out]");

link.addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.toggle("js-choose-hotel-popup");
    date.focus();
});

form.addEventListener("submit", function (event) {
    if (!date.value || !dateout.value) {
        event.preventDefault();
        console.log("Нужно ввести даты заезда и выезда");
    }
});

var mapOpen = document.querySelector(".js-open-map");

popup.classList.add('js-choose-hotel-popup');