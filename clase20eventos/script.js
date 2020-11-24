
let terza = document.querySelector("#terza");
let info = document.querySelector("#info");
function cambiarColor() {
  terza.style.color = "#" + Math.floor(Math.random() * 16777215).toString(16);
  info.style.color = "#" + Math.floor(Math.random() * 16777215).toString(16);
}
// setInterval> ejecuta una función cada cierto tiempo. El tiempo se debe escribir en milisegundos
let x = 0;
let y = 0;
let dX = 12;
let dY = 5;
let angle = 0;
let dAngle = 5;
let t = 0;
let x2 = 10;
let y2 = 500;
let vX = 12;
let vY = -12;
let a = 10;

function mover() {
    
    x = x + dX;
    y = y + dY;
    angle = angle + dAngle;
    terza.style.transform = `translate(${x}px,${y}px) rotate(${angle}deg) `;
}
function mover2(){  
  t+= 0.1;  
    x2 = x2 + vX*t;
    y2 = y2 + vY*t + (a*Math.pow(t,2))/2;
    angle = angle + dAngle;
    info.style.transform = `translate(${x2}px,${y2}px) rotate(${angle}deg)`;
  }
let idMovimiento;
let idMovimiento2;
let idColor;
let corriendo = false;
function start() {
  corriendo = true;
  idMovimiento = window.setInterval(mover, 100);
  idMovimiento2 = window.setInterval(mover2, 100);
  idColor = window.setInterval(cambiarColor, 30);
}
function stop() {
  corriendo = false;
  window.clearInterval(idMovimiento);
  window.clearInterval(idMovimiento2);
  window.clearInterval(idColor);
}
window.onkeydown = function (evento) {
  if (evento.key == "w") {
    if (corriendo) stop();
    else start();
  }
};