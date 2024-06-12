let message = "BathSpa University";
let colors = [];
let x, y;
let xSpeed, ySpeed;
let StarJedi;

function preload() {
  //StarjediOutline = "C:\Users\gilli\Downloads\star-jedi-outline-font\StarJediOutline-y0xm.ttf"
  StarJedi = loadFont("StarJediOutline-y0xm.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  textSize(64);
  fill(255);

  // The inital position of the main text.
  x = width / 2;
  y = height / 2;

  // Random speed for the text movement
  xSpeed = 3;
  ySpeed = 3;
}

function draw() {
  drawBackground(23);

  // Update position of the text
  x += xSpeed;
  y += ySpeed;

  // Check for collision with the canvas edges and reverse direction if necessary
  if (x < 360 || x > width - 360) {
    xSpeed *= -1;
  }
  if (y < 10 || y > height - 40) {
    ySpeed *= -1;
  }

  for (let i = 0; i < colors.length; i++) {
    fill(colors[i]);
    text(message, x, y + i * 2);
  }

  // Display the main message
  fill(255);
  text(message, x, y);

  //text fonts
  textFont(StarJedi);
}

function drawBackground() {
  // Draw gradient background
  for (let i = 0; i < height; i++) {
    let inter = map(i, 0, height, 0, 1);
    let c = lerpColor(color(0, 0, 100), color(0, 100, 255), inter);
    stroke(c);
    line(0, i, width, i);
  }

  // Draw some random shapes
  for (let i = 0; i < 50; i++) {
    fill(random(255), random(255), random(255), 100);
    noStroke();
    ellipse(random(width), random(height), random(20, 50));
  }
}

function mousePressed() {
  colors.push(color(random(255), random(255), random(255)));
  if (colors.length > 5) {
    colors.shift();
  }
}
