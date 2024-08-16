var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var ctx = canvas.getContext('2d');

ctx.fillStyle = "rgb(200 0 0)";
ctx.fillRect(100, 100, 100, 100);

console.log(canvas);
