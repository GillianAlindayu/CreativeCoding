
let audio;
let fft;
let baseSize = 100; // base size for the visualizer
let maxSize = 300; // maximum size for the visualizer
let numBands = 256; //bands frequency
let radius = 260; 
let volumeLevel = 0.25; //volume setting 
let img;

function preload() {
  // Load the audio file
  audio = loadSound("swordland metal cover.mp3");
  // Load the image
  img = loadImage("kirito.jpg");
}

function setup() {
  createCanvas(800, 800);
  // play the audio file
  audio.play();
  // set the volume of the audio
  audio.setVolume(volumeLevel);
  // initialize FFT with the number of frequency bands and set smoothing
  fft = new p5.FFT(0.6, numBands); // Decrease smoothing for sharper response
  // connect the FFT to the audio file
  fft.setInput(audio);
}

function draw() {
  background(0);

  // get the frequency spectrum
  let spectrum = fft.analyze();

  // draw the visualizer
  noFill();
  translate(width / 2, height / 2);
  for (let i = 0; i < spectrum.length; i++) {
    let angle = map(i, 0, spectrum.length, 0, TWO_PI);
    let ampp = spectrum[i];
    let scaledampp = map(ampp, 0, 256, 0, radius); // scale amplitude for more sensitivity
    let x1 = radius * cos(angle);
    let y1 = radius * sin(angle);
    let x2 = (radius + scaledampp) * cos(angle);
    let y2 = (radius + scaledampp) * sin(angle);

    // Choose color based on amplitude
    let r = map(ampp, 200, 256, 0, 255);
    let g = map(angle, 0, TWO_PI, 0, 255);
    let b = map(scaledampp, 100, radius, 255, 0);
    stroke(299, 40, 300);

    line(x1, y1, x2, y2);
  }

  // Draw the image inside the ellipse
  imageMode(CENTER);
  let imgDiameter = maxSize * 0.6;
  let imgScale = imgDiameter / max(img.width, img.height);
  tint(200, 200); // Adjust image transparency
  image(img, 0, 0, img.width * imgScale, img.height * imgScale);
}



