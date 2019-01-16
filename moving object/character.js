// JavaScript Document
////// Canvas setup //////
var ctx = document.getElementById("ctx").getContext("2d");
////// Variables //////
var canvas = {width:900, height:700 };
var score = 0;

//starting point
var startingPoint = {
  x:canvas.width/2,
  y:canvas.height-100,
  speed: 20
};




////// Arrow keys //////

function move(e) {

  if(e.keyCode == 37) {
    startingPoint.x -= startingPoint.speed;
  }
  if(e.keyCode == 38) {
    startingPoint.y -= startingPoint.speed;
  }
  if(e.keyCode == 39) {
    startingPoint.x += startingPoint.speed;
  }
  if(e.keyCode == 40) {
    startingPoint.y += startingPoint.speed;
  }

  update();

}

document.onkeydown = move;



////// other functions //////


//function to clear canvas
function clearCanvas() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
}

// Draw startingPoint
function player(x,y) {
  var x = startingPoint.x;
  var y = startingPoint.y;
  ctx.fillStyle = "white";

  ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(x+15,y+50);
    ctx.lineTo(x-15,y+50);
    ctx.fill();
}

// update

setInterval (update, 50);

function update() {
  clearCanvas();
  player();
}