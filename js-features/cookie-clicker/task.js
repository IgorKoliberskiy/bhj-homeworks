const img = document.getElementById("cookie");

function changeSize() {
  let output = document.getElementById("clicker__counter");
  output.textContent++;
  
  if (output.textContent % 2 !== 0) {
    img.width = 150;
  } else {
    img.width = 200;
  }
}

img.onclick = changeSize;