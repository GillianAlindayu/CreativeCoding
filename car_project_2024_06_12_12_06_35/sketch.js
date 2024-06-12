function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(120);
  //drawing a simple car 
  
  //body
  fill("#9A2424");
  rect( 150, 160, 213, 53, 30,9); 
  fill("#606060");
  rect(170, 125, 89, 45, 34 ,3);
  fill("#171717");
  rect(247, 125, 95, 45,3);
  
  //windows and doors
  fill("#B8CDE5");
  rect(260,130,70,35);
  fill("#4E1117");
  rect(180, 170, 154, 36, 4);
  fill("#B8CDE5")
  rect(178, 128, 64, 39, 30, 9)
  
  //wheels
  fill("#2C2A2A");
  ellipse(330, 210, 40, 40, 70);
  ellipse(185 ,210,40, 40, 70);
  
  //inner wheels
  fill("#9A9A9A")
  ellipse(185, 210, 30);
  ellipse(330, 210, 30);
  
  //back wheels 
  fill("#2C2A2A")
  rect(340, 139,32, 53,30, 39, 30);
}
