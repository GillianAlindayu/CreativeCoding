//Checkerboard pattern

function setup() {
  createCanvas(400, 400);
  let cols = 9;
  let rows = 9;
  let w = width / cols;
  let h = height / rows;
  
  // Array of colors
  let colors = [
    color(225, 0, 32), 
    color(3, 255, 89), 
    color(43, 500, 700),
    color(300, 300, 89),
    color(1, 4, 5),
    color(500, 100, 2), 
    color(19, 33, 3000),
    color(1000, 19,200),
    color(100, 30, 100), 
    color(1, 0, 29)
  ];
  
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let colorIndex = (i + j) % colors.length; // Cycle through colors
      fill(colors[colorIndex]);
      rect(i * w, j * h, w, h);
    }
  }
}
