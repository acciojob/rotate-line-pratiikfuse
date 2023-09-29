//your JS code here. If required.
let line = document.getElementById("line");

let deg = 0;
setInterval(rotateBy20Deg, 20);

function rotateBy20Deg() {
  console.log("rotate");
  line.style.transform = `rotate(${(deg += 20)}deg)`;
}