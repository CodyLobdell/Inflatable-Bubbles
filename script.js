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
    this.effect = effect;
    this.radius = Math.floor(Math.random() * 8 + 8);
    this.x = this.radius + Math.random() * (this.effect.width - this.radius * 2);
    this.vx = Math.random() * 0.2 - 0.1;
    this.vy = Math.random() * 0.2 - 0.1;
  }
  draw(context){
    context.fillStyle = gradient;
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    context.fill();
    context.stroke();

    context.fillStyle = 'white';
    context.beginPath();
    context.arc(this.x - this.radius * 0.2, this.y - this.radius * 0.3, this.radius * 0.6, 0, Math.PI * 2);
    context.fill();
  }
  update(){
    if (this.effect.mouse.pressed){
      const dx = this.x - this.effect.mouse.x;
    }
  }
}