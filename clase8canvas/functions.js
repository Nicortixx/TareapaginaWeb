let canvas = document.querySelector("#funciones");
let ctx = canvas.getContext("2d");

function rectangulo(x, y, w, h) {
  ctx.beginPath();
  ctx.rect(x, y, w, h);
  ctx.fill();
  ctx.stroke();
}

for ( let xC = 50; xC <= 350; xC += 100) {
  rectangulo(xC, 0, 50, 50);
  for(let xY = 0; xY<= 400; xY += 100){
  rectangulo(xC, xY, 50,50)
}  
}
for( let xC2 = 0; xC2 <= 400; xC2 += 100) {
  rectangulo(xC2, 50, 50, 50);
for(let xY2 = 50; xY2<= 350; xY2 += 100){
rectangulo(xC2, xY2, 50,50)
}  
}  