var hr;
var min;
var sec;


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  
}

function draw() {
  background("pink"); 
  sec=second();
  min=minute();
  hr=hour();

  secAngle=map(sec,0,60,0,360);
  minAngle=map(min,0,60,0,360);
  hrAngle=map(hr,0,12,0,360);
  

  push();
  translate(400,200);
  rotate(secAngle);
  strokeWeight(7);
  stroke("green")
  line(0,0,100,0);
  pop();

  push();
  translate(400,200);
  rotate(hrAngle);
  strokeWeight(7);
  stroke("red")
  line(0,0,100,0);
  pop();

  push();
  translate(400,200);
  rotate(minAngle);
  strokeWeight(7);
  stroke("blue")
  line(0,0,100,0);
  pop();
  console.log(hr,min,sec); 

}