
var landscape;

let pemain1, pemain2

function setup() {
  createCanvas(600, 400);
  background(100);
  
  pemain1 = new pemain(120, 150, "red")
  pemain2 = new pemain(120, height-150, "blue")
  
}

function draw() {
  background(landscape);
  pemain1.tampilkan()
  pemain2.tampilkan()
  pemain1.finish()
  pemain2.finish()
}
function preload(){
  landscape = loadImage("Desain.jpg");
}

function keyPressed() {
  if(keyCode === LEFT_ARROW) {
    pemain1.maju()
  }
  
  else if(keyCode === RIGHT_ARROW) {
    pemain2.maju()
  }
}