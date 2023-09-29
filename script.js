// setup
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

console.log(ctx);
let gradient = ctx.createLinearGradient(0,0,canvas.width,canvas.height);
gradient.addColorStop(0,'pink');
gradient.addColorStop(1,'magenta');
ctx.fillStyle = gradient;

class Particle {
  constructor(effect){
    
  }
}