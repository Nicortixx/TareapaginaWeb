import {IMAGES as images} from './initialize.js'
import {ctx, drawObj, run, start, dT} from './initialize.js'

// CREACIón del objeto balón
// PROPIEDADES> x, y, vX, vY, r, imagen
// METODOS> dibujarse

// console.log(images)
let lapiz = {
    //PROPIEDADES
    x:200,
    y:200,
    r:15,
    vX: 0,// px por segundo
    vY: 0,
    // imagen: undefined,
    //METODOS
    dibujarse:function(){
        // ctx.drawImage(this.imagen, this.x-this.r, this.y-this.r, 2*this.r, 2*this.r);
        ctx.fillStyle = "rgba(255,165,0)";
        ctx.beginPath();
        ctx.fillRect(this.x-37.5, this.y-15, 75, 30);
        ctx.stroke();
        ctx.fill();

        ctx.fillStyle = "rgba(0,0,0)";
        ctx.beginPath();
        ctx.moveTo(this.x+37.5, this.y-15);
        ctx.lineTo(this.x +62.5, this.y);
        ctx.lineTo(this.x +37.5, this.y +15);
        ctx.stroke();
        ctx.fill();

        ctx.fillStyle = "rgba(0,0,0)";
        ctx.beginPath();
        ctx.arc(this.x-37.5, this.y, this.r, (3 * Math.PI)/2, (Math.PI)/2, true);
        ctx.stroke();
        ctx.fill();

    },
    moverse:function(){
        this.x = this.x + this.vX * dT/1000;
        this.y = this.y + this.vY * dT/1000;
    }

}

// Puedo crear un objeto apartir del objeto balon
let lapiz2 = Object.create(lapiz)
lapiz2.x = 0;
lapiz2.y = 0;
lapiz2.vX = 10;
lapiz2.vY = 5;
let lapiz3 = Object.create(lapiz)
lapiz3.x = 0;
lapiz3.y = 400;
lapiz3.vX = 10;
lapiz3.vY = -10;
drawObj.draw =  function(){
    ctx.clearRect(0, 0, 400, 400);
    lapiz.dibujarse();
    lapiz.moverse();
    lapiz2.dibujarse();
    lapiz2.moverse();
    lapiz3.dibujarse();
    lapiz3.moverse();
}
run()