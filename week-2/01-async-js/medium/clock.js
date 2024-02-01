const e = require("express");

const currentDate = new Date();

let hour = currentDate.getHours();
let minute = currentDate.getMinutes();
let seconds = currentDate.getSeconds();

setInterval(() => {
  console.log(`${hour} : ${minute} : ${++seconds}`);
  if (seconds == 59) {
    minute += 1;
    seconds = -1;
  }
  if (minute == 60) {
    hour += 1;
    minute = 0;
  }
  if (hour == 23) {
    hour = -1;
  }
}, 1000);
