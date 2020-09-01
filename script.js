const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

var date = new Date();
console.log(date);
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
console.log("Hour: " + hr + " Minute: " + min + " Second: " + sec);

// Multiply current hour by 360 degrees in a circle; divide by 12 hours on clock face
// Then, add current minute position divided by 12 for accuracy
let hrPosition = (hr * 360 / 12) + (min * (360 / 60) / 12);

// Multiply current minute by 360 degrees in a circle; divide by 60 minutes in an hour
// Then, add current second position divided by 60 for accuracy
let minPosition = (min * 360 / 60) + (sec * (360 / 60) / 60);

// Multiply current second by 360 degrees in a circle; divide by 60 seconds in one minute
let secPosition = sec * 360 / 60;

// Transform rotates clock arms to desired degree
HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";