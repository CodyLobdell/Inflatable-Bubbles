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
    this.minRadius = this.radius;
    this.maxRadius = this.radius * 5; 
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
      const dy = this.y - this.effect.mouse.y;
      const distance = Math.hypot(dx, dy);
        if (distance < this.effect.mouse.radius && this.radius < this.maxRadius){
          this.radius += 2;
        }
    }
    if (this.radius > this.minRadius) this.radius -= 0.1;

    this.x += this.vx;
    this.y += this.vy;

    if (this.x < this.radius){
        this.x = this.radius;
        this.vx *= -1;
    } else if (this.x > this.effect.width - this.radius){
      this.y = this.effect.height - this.radius;
      this.vy *=1;
    }
  }
  reset(){
    this.x = this.radius + Math.random() * (this.effect.width - this.radius * 2);
    this.y = this.radius + Math.random() * (this.effect.height - this.radius * 2);
  }
}