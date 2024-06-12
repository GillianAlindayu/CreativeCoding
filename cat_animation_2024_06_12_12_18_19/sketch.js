//black cat spritesheet animation
//multiple cat images 
//my other version


function preload() {
  spriteSheet = loadImage("images/cat-sprite.png");
}

//cat frames
//spritesheet frame movement
function Sprite(sheet, x, y, n) {
  this.sheet = sheet;
  this.x = 150;
  this.y = 10;
  this.h = sheet.height;
  this.frame = 2;
  this.frames = 6;
  this.w = sheet.width / this.frames;
  
  
  //draw spritesheet
  
  this.draw = function() {
    image(this.sheet, this.x, this.y, this.w, this.h, this.w*floor(this.frame), 0, this.w, this.h);
    
    //Frame rates 
    //speed fps 
    //running cat 
    this.frame += 0.4;
    if(this.frame > this.frames) {
      this.frame = 0; 
    }
  }
}

//canvas size
function setup() {
  createCanvas(400, 400);
  catRun = new Sprite(spriteSheet, width/56, 2, 6);
}

function draw() {
  //clear background but with images
  clear();
  catRun.draw(200, 200);
}