var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");
for (let i = 0; i < 100; i++) {
   var x = Math.random() * window.innerWidth;
   var y = Math.random() * window.innerHeight;
   var r = Math.floor(Math.random() * 256);
   var g = Math.floor(Math.random() * 256);
   var b = Math.floor(Math.random() * 256);
   var a = Math.random();
   console.log(r, g, b, a);
   c.beginPath();
   c.arc(x, y, 45, 0, Math.PI * 2, false);
   c.strokeStyle = "rgba(" + r + "," + g + "," + b + "," + a + ")";
   c.fillStyle = "rgba(" + r + "," + g + "," + b + "," + a + ")";
   c.fill();
   c.stroke();
}
