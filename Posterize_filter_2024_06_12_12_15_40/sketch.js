let img;

function preload(){
   // load our image
   img = loadImage("hunt.jpg");
}

function setup() {
  createCanvas(400, 400);
}


function draw() {
  
  // Drawing full size image
  image(img, 0, 0, width, height);
  
  // Reduce the number of colors to 4 per channel
  filter(POSTERIZE, 4);

}