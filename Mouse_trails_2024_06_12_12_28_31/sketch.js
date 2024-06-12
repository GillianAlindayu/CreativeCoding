var d = 50;
function setup() {
  createCanvas(600, 400);
   background(0);
    noStroke();
  
  //to remove the half circle on the topmost left side. 
  mouseX = -d; 
  mouseY = -d; 
}

function draw() {
  fill(225, 50);
  ellipse(mouseX, mouseY, d, d);
}