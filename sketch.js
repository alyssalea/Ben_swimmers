var x = 0;
var Swimmer;
var Swimmer2;
var Swimmer3;
var a = 0;
var y = 0;
function preload() {
  Swimmer = loadImage ("assets/Person.png");
  Swimmer2 = loadImage ("assets/Person.png");
  Swimmer3 = loadImage ("assets/Person.png");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  background (300)
}

function draw() {
  image (Swimmer2, a, 0)
  image (Swimmer, x, 200)
  image (Swimmer3, y, 400)
  
  if(keyIsDown(RIGHT_ARROW))
    x = x + 2;
  
  if(keyIsDown(DOWN_ARROW))
  y = y +2
  
 if (keyIsDown(LEFT_ARROW))
   a = a + 2;
}

function windowResized (){
  resizeCanvas(windowWidth, windowHeight);
}