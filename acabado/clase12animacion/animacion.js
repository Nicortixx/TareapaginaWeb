let canvas = document.querySelector("#miCanvas");
let ctx = canvas.getContext("2d");

function loadImages(sources, callback) {
  let images = {};
  let loadedImages = 0;

  let numImages = Object.keys(sources).length;

  for (let src in sources) {
    images[src] = new Image();
    images[src].onload = function () {
      loadedImages++;
      if (loadedImages >= numImages) {
        callback(images);
      }
    };
    images[src].src = sources[src];
  }
}
var sources = {
  yoda: "https://pbs.twimg.com/profile_images/554818382877298688/sqBhLvT9.png",
  soccerBall:
    "https://upload.wikimedia.org/wikipedia/commons/d/d3/Soccerball.svg",
    fondo :
    "https://services.meteored.com/img/article/cuando-la-nieve-genera-el-silencio-231261-1_1280.jpg"
};
let x = 20;
let y = 120;
let vX = 100;
let vY = 200;
let dT = 0.03;
let x2 = 200;
let y2 = 200;
function draw(images) {
  x = x + vX * dT;
  y = y + vY * dT; 
  if (300 - y < 15)vY = -vY;
  if (600 - x < 15)vX = -vX
  if (y - 0 < 15)vY = -vY;
  if (x - 0 < 15)vX = -vX;
  ctx.clearRect(0, 0, 600, 300);
  ctx.drawImage(images.fondo, 0, 0, 600, 300);
  ctx.drawImage(images.yoda, x2, y2, 60, 60);
  ctx.drawImage(images.soccerBall, x- 15, y- 15, 15, 15);
}
function run(images) {
  window.setInterval(function () {
    draw(images);
  }, 30);
}
loadImages(sources, run);
window.onkeydown = function (evento) {
  if (evento.key == "w") {
    y2 = y2 - 20;
  }
  if (evento.key == "s") {
    y2 = y2 + 20;
  }
  if (evento.key == "a") {
    x2 = x2 - 20;
  }
  if (evento.key == "d") {
    x2 = x2 + 20;
  }
};

