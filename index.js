let startButton = document.getElementById("Start");
let stopButton = document.getElementById("Stop");
let resetButton = document.getElementById("Reset");
let hour = 0;
let minute = 0;
let second = 0;
let timer = null;

startButton.addEventListener("click", function () {
  if (timer !== null) {
    return;
  }
  timer = setInterval(stopWatch, 1000);
});

stopButton.addEventListener("click", function () {
  clearInterval(timer);
  timer = null;
});

resetButton.addEventListener("click", function () {
  clearInterval(timer);
  timer = null;
  hour = 0;
  minute = 0;
  second = 0;
  document.getElementById("hr").innerHTML = "00";
  document.getElementById("min").innerHTML = "00";
  document.getElementById("sec").innerHTML = "00";
});

function stopWatch() {
  second++;
  if (second == 60) {
    minute++;
    second = 0;
  }
  if (minute == 60) {
    hour++;
    minute = 0;
    second = 0;
  }
  let hrString = hour;
  let minString = minute;
  let secString = second;
  if (hour < 10) {
    hrString = "0" + hrString;
  }
  if (minute < 10) {
    minString = "0" + minString;
  }
  if (second < 10) {
    secString = "0" + secString;
  }
  document.getElementById("hr").innerHTML = hrString;
  document.getElementById("min").innerHTML = minString;
  document.getElementById("sec").innerHTML = secString;
}
