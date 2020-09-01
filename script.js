const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

// Get current date and time
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

function runTheClock() {

    // Add degrees up so that the hands will continue moving clockwise when passing the 12 o'clock position
    
    // Hour position plus one hour (360/12 = 30) divided by seconds in an hour (60 * 60 = 3600)
    hrPosition = hrPosition + (3 / 360);

    // Minute postion plus 1/60th of degrees of second hand: (1/60) * 6 degrees = 6/60
    minPosition = minPosition + (6/60);

    // Second positon plus number of degrees in one second (360 degrees / 60 seconds = 6 degrees) 
    secPosition = secPosition + 6;

    // Transform rotates clock arms to desired degree
    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}

var interval = setInterval(runTheClock, 1000);