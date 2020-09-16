let lista = document.querySelector("#parrafo1");
console.log(parrafo1);
parrafo1.style.backgroundColor = "white";
let btn = document.querySelector("#btnCambiar");
function random(number) {
    return Math.floor(Math.random() * (number+1));
  }
  
  btn.onclick = function() {
    const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    parrafo1.style.backgroundColor = rndCol;
  }

  let btn2 = document.querySelector("#btnOcultar");
  function ocultarParrafo1() {
    parrafo1.style.display = "none";
  } 
  btn2.onclick = ocultarParrafo1;

  let btn3 = document.querySelector("#btnMostrar");
  function mostrarParrafo1() {
    parrafo1.style.display = "";
  } 
  btn3.onclick = mostrarParrafo1;