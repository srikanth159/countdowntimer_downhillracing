 const timerElement = document.getElementById('timer');
const daysElement = document.getElementById('days-number');
const hoursElement = document.getElementById('hours-number');
const minutesElement = document.getElementById('minutes-number');
const secondsElement = document.getElementById('seconds-number');

var countDownDate = new Date("sep 20, 2025 16:30:00").getTime();

const x = setInterval(function () {
  const now = new Date().getTime();
  const distance = countDownDate - now;

  if (distance < 0) {
    clearInterval(x);
    timerElement.textContent = "Now the Game is Live"; // Show EXPIRED in place of countdown
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  daysElement.textContent = days;
  hoursElement.textContent = hours;
  minutesElement.textContent = minutes;
  secondsElement.textContent = seconds;
}, 1000);


