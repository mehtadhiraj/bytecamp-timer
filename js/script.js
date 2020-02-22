// Set the date we're counting down to
var countDownDate = new Date("Feb 22, 2020 12:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  // var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  console.log(hours);
  
  let hour = document.getElementById("t-h"); 
  let minute = document.getElementById("t-m");
  let second = document.getElementById("t-s");
  // Display the result in the element with id="t-d t-h t-m t-s"
  // let day = document.getElementById("t-d").innerHTML = days;
  hour.innerHTML = hours > 0 ? hours : "0";
  minute.innerHTML = minutes > 0 ? minutes : "0";
  second.innerHTML = seconds > 0 ? seconds : "0";

  
  // If the count down is finished, write some text 
  if (seconds < 0) {
    clearInterval(x);
    let counter = document.getElementById("counter");
    // counter.removeChild(day);
    counter.removeChild(hour);
    counter.removeChild(minute);
    counter.removeChild(second);
    counter.innerHTML = "Let's Hack !!";
  }
}, 1000);