let daysId = document.getElementById("days");
let hoursId = document.getElementById("hours");
let minutesId = document.getElementById("minutes");
let secondsId = document.getElementById("seconds");


let newDate = new Date("2024-08-18T00:00:00");
let currentDate = new Date();
let diff = newDate - currentDate;
let days = Math.floor(diff / (1000 * 60 * 60 * 24));
let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((diff % (1000 * 60)) / 1000);

console.log(days, hours, minutes, seconds);
if (days < 10) {
    days = "0" + days;
}

let interval = false;
setInterval(() => {
    seconds--;
    if (seconds < 0) {
        seconds = 59;
        minutes--;
    }
    if (minutes < 0) {
        minutes = 59;
        hours--;
    }
    if (hours < 0) {
        hours = 23;
        days--;
    }
    if (days < 0) {
        days = 0;
        hours = 0;
        minutes = 0;
        seconds = 0;
    }

    if (seconds < 10) {
        seconds = "0" + (seconds.toString()).replace("0", "");
    }
    if (minutes < 10) {
        minutes = "0" + (minutes.toString()).replace("0", "");
    }
    if (hours < 10) {
        hours = "0" + (hours.toString()).replace("0", "");
    }
    if (days < 10) {
        days = "0" + (days.toString()).replace("0", "");
    }

    daysId.textContent = days;
    hoursId.textContent = hours;
    minutesId.textContent = minutes;
    secondsId.textContent = seconds;
}, 1000);