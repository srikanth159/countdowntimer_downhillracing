const launchButton = document.getElementById('launchButton');
const timerElement = document.getElementById('timer');
const daysElement = document.getElementById('days-number');
const hoursElement = document.getElementById('hours-number');
const minutesElement = document.getElementById('minutes-number');
const secondsElement = document.getElementById('seconds-number');

var countDownDate = new Date("Apr 28, 2025 15:37:28").getTime();

// Update the count down every 1 second
const x = setInterval(function() {

  // Get today's date and time
  const now = new Date().getTime();
    
  // Find the distance between now and the count down date
  const distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
 daysElement.textContent = days;
         hoursElement.textContent = hours;
        minutesElement.textContent = minutes;
         secondsElement.textContent = seconds;
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);