let count = document.getElementById("timer");
let interval = setInterval(() => {
  count.textContent -= 1;
  if (count.textContent <= 0) {
    alert('Вы победили в конкурсе!');
    return clearInterval(interval);
  }
}, 1000);