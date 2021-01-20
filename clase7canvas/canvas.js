let canvas = document.querySelector("#inicial");
let ctx = canvas.getContext("2d");

ctx.fillStyle = "rgba(255,165,0)";
ctx.fillRect(125, 100, 275, 50);
ctx.fillStyle = "rgb(192,192,192)";
ctx.fillRect(100,100,25,50)
// paths: conjuntos de líneas
// Triangulo
ctx.fillStyle = "rgba(0,0,0)";
ctx.beginPath();
ctx.moveTo(400, 100);
ctx.lineTo(475, 125);
ctx.lineTo(400, 150);
ctx.stroke();
ctx.fill();

// Arco de circunferencia
ctx.fillStyle = "rgba(0,0,0)";
ctx.beginPath();
ctx.arc(100, 125, 25, (3 * Math.PI)/2, (Math.PI)/2, true);
ctx.lineTo(100, 150);
ctx.stroke();
ctx.fill();