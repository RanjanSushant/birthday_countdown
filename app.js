const date = new Date();
const countDownDate = new Date("Feb 3 2022, 00:00:00");

console.log(date.toLocaleString("en-IN"));
console.log(countDownDate);

function setText() {
  const diff = countDownDate - new Date();

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  if (seconds === 0) {
    document.querySelector(".birthday-title").innerHTML = `
    <h1>🥳IT'S YOUR BIRTHDAY 🥳</h1>`;
  } else {
    document.querySelector(".birthday-title").innerHTML = `
    <h1> ${days} days : ${hours} hours : ${minutes}minutes : ${seconds} seconds</h1>`;
  }
}

setInterval(setText, 1000);

console.log(seconds);
