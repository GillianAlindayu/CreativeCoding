let games = ["Wuthering Waves", "MLBB", "Genshin Impact", "COD: Mobile", "Honkai series"];
let popularity = [125, 100, 120, 86, 130]; // Fictional player counts in millions
let barWidth = 50;
let barColors = ["#4EFBDE", "#32C8FF", "#2F6FFF", "#673AB7", "#9944aa"]; // Custom bar colors

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(200);
  
  // Find the maximum value in popularity array
  let maxPopularity = max(popularity);
  
  // Draw bars
  let x = 100;
  let y = height - 50;
  let spacing = (width - 2 * x) / games.length;
  for (let i = 0; i < games.length; i++) {
    let h = map(popularity[i], 0, maxPopularity, 0, height - 100);
    fill(barColors[i]); // Set bar color from the array
    rect(x, y - h, barWidth, h);
    fill(0);
    textAlign(CENTER);
    text(games[i], x + barWidth / 2, y + 20);
    textAlign(CENTER);
    text(popularity[i] + "M", x + barWidth / 2, y - h - 10);
    x += spacing;
  }
  
  // Add labels
  color('white')
  textAlign(RIGHT);
  text("Player Count (millions)", 80, height / 2);
  textAlign(CENTER);
  text("Mobile games that mostly played", width / 2, height - 10);
}
