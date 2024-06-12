function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(100);
  
  //Making a simple alien. 
    fill("#B9EBFF");
    circle(200, 100, 160, 100, 60, 50, 60, 60, 300); 
    
  //body
  fill("#009688");
  circle(200, 130, 80, 20, 30, 40, 20);
  //head
  fill("#00BCD4");
  circle(200, 100, 60, 20, 30, 40, 20); 
  fill("#0F0F0F"); 
  circle(185, 100, 15, 20, 30, 20); 
  circle(213, 100, 15, 20, 30, 20); 
  //UFO
  fill("#393939");
  ellipse(200, 200, 150, 50, 20, 20, 20); 
  fill("#1B1B36"); 
  rect(100, 139, 200, 60, 500); 
  //top
  fill("#232739");
  circle(198, 20, 24); 
}

