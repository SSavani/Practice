var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");

//*rectangles
// c.fillStyle = "rgba(255,0,0,0.5)"
// c.fillRect(100,100,200,100);
// c.fillStyle = "rgba(255,0,100,0.5)"
// c.fillRect(500,200,400,200);
// c.fillStyle = "rgba(255,100,0,0.5)"
// c.fillRect(300,400,200,400);

//*lines
// c.beginPath();
// c.moveTo(50, 300);
// c.lineTo(300,10);
// c.lineTo(700, 500);
// c.strokeStyle = "rgba(255,0,0,1)";
// c.stroke();

//*Arc (circle)
// c.beginPath();
// c.arc(200, 200, 100, 0, Math.PI * 2, false);
// c.strokeStyle = "rgba(255,0,0,1)";
// c.stroke();

//*Many Arcs (circles) with random colors
// for (var i = 0; i < 100; i++) {
//    To keep the circle inside the browser window
//    var x = Math.random() * window.innerWidth;
//    var y = Math.random() * window.innerHeight;
//Select random color for each circle
//    var r = Math.floor(Math.random() * 256);
//    var g = Math.floor(Math.random() * 256);
//    var b = Math.floor(Math.random() * 256);
//    var a = Math.random();
//    console.log(r, g, b, a);
//Begin drawing
//    c.beginPath();
//    c.arc(x, y, 45, 0, Math.PI * 2, false);
//for border color
//    c.strokeStyle = "rgba(" + r + "," + g + "," + b + "," + a + ")";
//for color inside the border
//    c.fillStyle = "rgba(" + r + "," + g + "," + b + "," + a + ")";
//    c.fill();
//    c.stroke();
// }

//* Animation (Circles) {code starts here}
class circle {
   //circle class to create each circle
   constructor(x, y, radius, dx, dy, r, g, b, a) {
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.dx = dx;
      this.dy = dy;
      this.r = r;
      this.g = g;
      this.b = b;
      this.a = a;
   }

   draw() {
      c.beginPath();
      c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      c.strokeStyle = "rgba(" + this.r + "," + this.g + "," + this.b + "," + this.a + ")";
      c.fillStyle = "rgba(" + this.r + "," + this.g + "," + this.b + "," + this.a + ")";
      c.stroke();
      c.fill();
   }

   update() {
      if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
         this.dx = -this.dx;
      }
      if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
         this.dy = -this.dy;
      }
      this.x += this.dx;
      this.y += this.dy;

      this.draw();
   }
}
//store multiple circles in array
var circlesArray = [];
for (let i = 0; i < 99; i++) {
   var radius = 72;
   //To keep the circle inside the browser window
   var max_x = window.innerWidth - radius;
   var max_y = window.innerHeight - radius;
   var min_x = radius;
   var min_y = radius;
   //generate random x,y inclusive of max, min values
   var x = Math.random() * (max_x - min_x + 1) + min_x;
   var y = Math.random() * (max_y - min_y + 1) + min_y;
   //generate random dx,dy change in position
   var dx = (Math.random() - 0.5) * 10;
   var dy = (Math.random() - 0.5) * 10;
   //Select random color for each circle
   var r = Math.floor(Math.random() * 256);
   var g = Math.floor(Math.random() * 256);
   var b = Math.floor(Math.random() * 256);
   var a = Math.random();
   //create circle and push it into array of circles
   circlesArray.push(new circle(x, y, radius, dx, dy, r, g, b, a));
}

function animate() {
   requestAnimationFrame(animate);
   c.clearRect(0, 0, innerWidth, innerHeight);
   for (let i = 0; i < circlesArray.length; i++) {
      circlesArray[i].update();
   }
}

animate();
