// Set your anniversary date here (YYYY, MM-1, DD)
let anniversary = new Date("2025-02-14 00:00:00").getTime();

let timer = setInterval(function() {
  let now = new Date().getTime();
  let distance = anniversary - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(timer);
    document.getElementById("countdown").innerHTML = "💖 Happy Anniversary 💖";
  }
}, 1000);
