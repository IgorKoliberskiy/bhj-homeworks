let molesKilled = document.getElementById('dead');
let missed = document.getElementById('lost');
getHole = (index) => {
  return document.getElementById(`hole${index}`);
}

for (let index = 1; index <= 9; index++) {
  getHole(index).onclick = function () {
    if (getHole(index).className.includes('hole_has-mole')) {
      molesKilled.textContent++;
    } else {
      missed.textContent++;
    }

    if (molesKilled.textContent == 10) {
      alert('Победа!');
      molesKilled.textContent = 0;
      missed.textContent = 0;
    } else if (missed.textContent == 5) {
      alert('Вы приграли!');
      molesKilled.textContent = 0;
      missed.textContent = 0;
    }
  }
}

   