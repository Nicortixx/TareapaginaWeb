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
  cancha:
    "https://e7.pngegg.com/pngimages/111/950/png-clipart-backyard-basketball-backboard-american-eagles-men-s-basketball-canestro-arkansas-razorback-stencil-game-angle-thumbnail.png",
  Jordan: "https://i.pinimg.com/originals/6a/34/96/6a34969fe0092c037567260b815afe90.png",
  basketBall:
    "https://assets.stickpng.com/images/580b585b2edbce24c47b2ad6.png",
};
let x = 50;
let y = 300;
let x2 = 50;
let y2 = 300;
let dX = 5;
let dY = -5;
let vX = 15;
let v0Y = -40;
let aY = 2.2;
let t = 0;
function draw(images) {
  t += 1;
  x = 0 + vX * t;
  y = 400 + v0Y * t + (aY * Math.pow(t, 2)) / 2;
  x2 = x2 + dX;
  y2 = y2 + dY;
  ctx.clearRect(0, 0, 400, 400);
  ctx.drawImage(images.basketBall, x, y, 50, 50);
  ctx.drawImage(images.cancha, 280, 60, 120, 160);
  ctx.drawImage(images.Jordan, x2, y2, 70, 090);
}
function run(images) {
  window.setInterval(function () {
    draw(images);
  }, 30);

}

loadImages(sources, run);