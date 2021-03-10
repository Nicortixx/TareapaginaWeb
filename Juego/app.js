'use strict'
import {GAME} from './initialize.js'
class Balon {
    constructor(x, y, vX, vY, r, angle)
    {
        this.x = x;
        this.y = y;
        this.r = r;
        this.vX = vX;
        this.vY = vY;
        this.angle = angle;
        this.imagen = GAME.images.soccerBall;
    }

    dibujarse(){
        // console.log(this.imagen)
        
        GAME.drawRotatedImage(this.imagen, this.x, this.y,this.angle, 2*this.r, 2*this.r);
    }
    moverse(){
        this.x = this.x + this.vX * GAME.dT/1000;
        this.y = this.y + this.vY * GAME.dT/1000;
        this.angle = this.angle + this.w * GAME.dT/1000;
    }
}

class Yoda{
    constructor(x, y,speed, width, height, angle, direccion)
    {
        this.x = x;
        this.y = y;
        this.vX;
        this.vY;
        this.speed = speed
        this.angle = angle;
        this.width = width;
        this.height = height;
        this.imagen = GAME.images.yoda;
        this.enMovimiento = false;
        this.direccion = "arriba";
    }

    dibujarse(){
        GAME.drawRotatedImage(this.imagen, this.x, this.y,this.angle, this.width, this.height);
    }
    moverse(){
        if (this.enMovimiento)
        {
            if(this.direccion == "izquierda"){
                this.x -= 100 * GAME.dT/1000;
                this.y -= 0 * GAME.dT/1000;
            }
            if(this.direccion == "derecha"){
                this.x += 100 * GAME.dT/1000;
                this.y -= 0 * GAME.dT/1000;
            }
            if(this.direccion == "abajo"){
                this.x -= 0 * GAME.dT/1000;
                this.y += 100 * GAME.dT/1000;
            }
            if(this.direccion == "arriba"){
                this.x -= 0 * GAME.dT/1000;
                this.y -= 100 * GAME.dT/1000;
            }
        }
    }
}

GAME.setup = function(){
    GAME.objects ={balones:[], player:new Yoda(200, 200, 50, 60,100,0)}
    GAME.vidas = 3;
    GAME.score = 0;
    GAME.totalTime = 40000;// 20 seconds
    GAME.initialTime = window.performance.now();
}
function mostrarPuntaje(){
    GAME.ctx.font = "30px Arial";
    GAME.ctx.fillStyle = "black"
    GAME.ctx.fillText(`Puntaje: ${GAME.score}`, 10, 35);
}
function mostrarVidas(){
    GAME.ctx.font = "30px Arial";
    GAME.ctx.fillStyle = "black"
    GAME.ctx.fillText(`Vidas: ${GAME.vidas}`, 10, 65);
}
function mostrarTiempo() {
    let elapsedT = window.performance.now() - GAME.initialTime;
    let remainingT = GAME.totalTime - elapsedT;
    GAME.remainingT = remainingT
    GAME.ctx.font = "20px Arial";
    GAME.ctx.fillStyle = "black"
    GAME.ctx.fillText(`Tiempo: ${(remainingT/1000).toFixed(1)}`, 10, 100);
}
function colisionConYoda(balon)
{
    let distancia = Math.sqrt(Math.pow(balon.x - GAME.objects.player.x, 2) + Math.pow(balon.y - GAME.objects.player.y, 2));
    if (distancia < balon.r + GAME.objects.player.width/2) return true;
    else return  false;
}
function buscarColisiones()
{
    let colisiones = []
    for (let i=0; i < GAME.objects.balones.length; i++){
        if(colisionConYoda(GAME.objects.balones[i])) colisiones.push(i);
    }
    return colisiones;
}

function quitarBalones(colisiones) {
    for(let pos of colisiones){
        GAME.objects.balones.splice(pos, 1);
    }
}
GAME.draw =  function(){
    GAME.ctx.clearRect(0,0,400,400);
    if (GAME.vidas  <= 0 || GAME.remainingT<0){
        GAME.pause();
        GAME.ctx.font = "16px Arial";
        GAME.ctx.fillStyle = "white";
        GAME.ctx.fillText(`JUEGO TERMINADO TU PUNTAJE ES: ${GAME.score + GAME.vidas*100  }`, 50, 320);
    }
    mostrarVidas();
    mostrarPuntaje();
    mostrarTiempo();
    for (let balon of GAME.objects.balones){
        balon.dibujarse();
        balon.moverse();
    }
    GAME.objects.player.dibujarse();
    GAME.objects.player.moverse();
    let colisiones = buscarColisiones();
    quitarBalones(colisiones);
    GAME.vidas -= colisiones.length;
}

GAME.start();

function crearParticula(){

    let ang = 2 * Math.PI * Math.random();
    let newX = 50 + 300 *Math.random()
    let newY = 50 + 300 *Math.random()
    let nuevoBalon = new Balon(newX, newY,100 * Math.cos(ang), 100 * Math.sin(ang), 45, 60, 360);
    GAME.objects.balones.push(nuevoBalon);
    GAME.score +=100;
}
GAME.canvas.onclick = crearParticula

function teclaPresionada(e){
    console.log(e.code)
    if (e.code =='Space')
    {
        console.log(e.shiftKey)
        if(e.shiftKey) GAME.reset();
        else{
            if (GAME.running) GAME.pause();
            else GAME.play();
        }

    }
    if (e.code == 'KeyW')
    {
        GAME.objects.player.enMovimiento = true;
        GAME.objects.player.direccion = "arriba";
    }
    if (e.code == 'KeyD')
    {
        GAME.objects.player.enMovimiento = true;
        GAME.objects.player.direccion = "derecha";
    }
    if (e.code == 'KeyS')
    {
        GAME.objects.player.enMovimiento = true;
        GAME.objects.player.direccion = "abajo";
    }
    if (e.code == 'KeyA')
    {
        GAME.objects.player.enMovimiento = true;
        GAME.objects.player.direccion = "izquierda";
    }
}
function teclaLevantada(e)
{
    if (e.code == 'KeyW')
    {
        GAME.objects.player.enMovimiento = false;
    }
    if (e.code == 'KeyD')
    {
        GAME.objects.player.enMovimiento = false;
    }
    if (e.code == 'KeyS')
    {
        GAME.objects.player.enMovimiento = false;
    }
    if (e.code == 'KeyA')
    {
        GAME.objects.player.enMovimiento = false;
    }
}
document.onkeydown = teclaPresionada;
document.onkeyup = teclaLevantada;
