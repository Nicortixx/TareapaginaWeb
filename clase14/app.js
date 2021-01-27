import {canvas, IMAGES as images} from './initialize.js'
import {ctx, drawObj, run, start, dT} from './initialize.js'

// CREACIón del objeto balón
// PROPIEDADES> x, y, vX, vY, r, imagen
// METODOS> dibujarse
let balones = []
// console.log(images)
let Balon = {
    //PROPIEDADES
    x:200,
    y:200,
    r:15,
    vX: 50,// px por segundo
    vY: -50,
    // imagen: undefined,
    //METODOS
    dibujarse:function(){
        // ctx.drawImage(this.imagen, this.x-this.r, this.y-this.r, 2*this.r, 2*this.r);
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 2*Math.PI ,0);
        ctx.stroke();
        ctx.fill();

    },
    moverse:function(){
        this.x = this.x + this.vX * dT/1000;
        this.y = this.y + this.vY * dT/1000;
        if (400 - this.y < this.r)this.vY = -this.vY;
        if (400 - this.x < this.r)this.vX = -this.vX
        if (this.y - 0 < this.r)this.vY = -this.vY;
        if (this.x - 0 < this.r)this.vX = -this.vX;
    }

}

drawObj.draw =  function(){
    ctx.clearRect(0, 0, 400, 400);
    for (let balon of balones){
        balon.dibujarse()
        balon.moverse()
    }
}
run()
// Puedo crear un objeto apartir del objeto balon
canvas.onclick = function crearParticula(pelota){
    let nuevoBalon = Object.create(Balon)
    nuevoBalon.x = (pelota.offsetX)
    nuevoBalon.y = (pelota.offsetY)
    let ang = 2*Math.PI*Math.random()
    let velocidad = 60*Math.random()
    nuevoBalon.vX = velocidad*Math.cos(ang)
    nuevoBalon.vY = velocidad*Math.sin(ang)
    balones.push(nuevoBalon)
    console.log(balones)
}
