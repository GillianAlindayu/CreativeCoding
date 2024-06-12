let player;
let enemies = [];
let bullets = [];
let enemyBullets = [];
let score = 0;
let lives = 3;
let gameState = "title";
let enemySpeed = 1;
let enemyDirection = 1;
const WIN_SCORE = 10000; // Total score required to win
let highScores = [];
let stars = [];

// Using star jedi font
function preload(){
  // Replace with your font path
  titleFont = loadFont("StarJediOutline-y0xm.ttf");
}

// Screen and game background.
function setup() {
  createCanvas(1200, 600);
  player = new Player();
  resetGame();
  createStars();
}

function draw() {
  background(0);
  drawStars();

  if (gameState === "title") {
    displayTitleScreen();
  } else if (gameState === "playing") {
    playGame();
  } else if (gameState === "gameOver") {
    displayGameOverScreen();
  } else if (gameState === "win") {
    displayWinScreen();
  }
}

// The screen and the movements of the game.
function keyPressed() {
  if (gameState === "title") {
    if (key === ' ') {
      gameState = "playing";
    }
  } else if (gameState === "playing") {
    if (key === ' ') {
      bullets.push(new Bullet(player.x + 10, height - 20));
    }
    if (keyCode === RIGHT_ARROW) {
      player.setDir(2);
    } else if (keyCode === LEFT_ARROW) {
      player.setDir(-2);
    }
  } else if (gameState === "gameOver" || gameState === "win") {
    resetGame();
    gameState = "playing"; 
  }
}

function keyReleased() {
  if (gameState === "playing") {
    if (keyCode === RIGHT_ARROW || keyCode === LEFT_ARROW) {
      player.setDir(0);
    }
  }
}

function displayTitleScreen() {
  textFont(titleFont);
  textSize(50);
  
  // Font colors of the game
  fill(300,230, 29);
  textAlign(CENTER, CENTER);
  text("SPACE invaders", width / 2, height / 2 - 40);
  textSize(20);
  text("Press SPACE to Start", width / 2, height / 2);
}

// Movements of the game
function playGame() {
  player.show();
  player.move();

  for (let bullet of bullets) {
    bullet.show();
    bullet.move();
  }
  
  for (let bullet of enemyBullets) {
    bullet.show();
    bullet.move();
    if (bullet.hits(player)) {
      lives -= 1;
      enemyBullets.splice(enemyBullets.indexOf(bullet), 1);
      if (lives <= 0) {
        updateHighScores();
        gameState = "gameOver";
      }
    }
  }

  let edge = false;
  for (let enemy of enemies) {
    enemy.show();
    enemy.move();
    if (enemy.x > width - enemy.r || enemy.x < enemy.r) {
      edge = true;
    }
  }

  if (edge) {
    for (let enemy of enemies) {
      enemy.shiftDown();
    }
  }

  handleCollisions();

  displayScore();
  displayLives();

  if (score >= WIN_SCORE) {
    updateHighScores();
    gameState = "win";
  }

  if (enemies.length === 0) {
    resetEnemies();
  }
}

// Loses the game but shows high score on the screen.
function displayGameOverScreen() {
  textFont(titleFont);
  textSize(50);
  fill(300, 20, 40); 
  textAlign(CENTER, CENTER);
  text("Game over", width / 2, height / 2 - 40);
  textSize(30);
  text("Press any key to Restart", width / 2, height / 2);

  displayHighScores();
}

// Reaching 100000 to win the game.
function displayWinScreen() {
  textFont(titleFont);
  textSize(30);
  fill(50, 150, 200);
  textAlign(CENTER, CENTER);
  text("You Win!", width / 2, height / 2 - 40);
  textSize(16);
  text("Press any key to Restart", width / 2, height / 2);

  displayHighScores();
}

// The game resets by pressing any key.
function resetGame() {
  score = 0;
  lives = 3;
  player = new Player();
  enemies = [];
  bullets = [];
  enemyBullets = [];
  resetEnemies();
}

function resetEnemies() {
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 4; j++) {
      enemies.push(new Enemy(i * 60 + 50, j * 40 + 30));
    }
  }
  enemySpeed += 0.2; // Gradually increase enemy speed
}

function displayScore() {
  textSize(16);
  fill(255);
  text("Score: " + score, 10, 20);
}

function displayLives() {
  textSize(16);
  fill(255);
  text("Lives: " + lives, 10, 40);
}

function handleCollisions() {
  for (let i = bullets.length - 1; i >= 0; i--) {
    let bullet = bullets[i];
    for (let j = enemies.length - 1; j >= 0; j--) {
      let enemy = enemies[j];
      if (bullet.hits(enemy)) {
        enemies.splice(j, 1);
        bullets.splice(i, 1);
        score += 10; // Increase the score value per enemy
        break;
      }
    }
  }
}

// Scores of the games.
function updateHighScores() {
  highScores.push(score);
  highScores.sort((a, b) => b - a);
  if (highScores.length > 5) {
    highScores.pop();
  }
}

// Displaying high scores
function displayHighScores() {
  textSize(16);
  fill(255);
  textAlign(LEFT);
  text("High Scores:", 10, 60);
  for (let i = 0; i < highScores.length; i++) {
    text((i + 1) + ". " + highScores[i], 10, 80 + i * 20);
  }
}

// Player elements and movements
class Player {
  constructor() {
    this.x = width / 2;
    this.xdir = 0;
  }

  show() {
    fill(255);
    rect (this.x, height - 20, 20, 20);
  }

  setDir(dir) {
    this.xdir = dir;
  }

  move() {
    this.x += this.xdir * 5;
    this.x = constrain(this.x, 0, width - 20);
  }
}

// Enemy (the invader) game elements
class Enemy {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.r = 15;
    this.xdir = enemyDirection * enemySpeed;
  }
  
  // Enemy invaders pixelated.
  show() {
    fill(100);
    rect(this.x, this.y, this.r * 2, this.r * 2);
  }

  move() {
    this.x += this.xdir;
  }

  shiftDown() {
    this.xdir *= -1;
    this.y += this.r;
    if (this.y > height - 60) {
      gameState = "gameOver";
    }
  }
}

// Player bullet elements
class Bullet {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.r = 5;
  }
  
  show() {
    fill(50, 150, 200);
    rect(this.x, this.y, this.r * 2, this.r * 2);
  }

  move() {
    this.y -= 5;
  }

  // When a player hits the enemy
  hits(enemy) {
    let d = dist(this.x, this.y, enemy.x, enemy.y);
    return d < this.r + enemy.r;
  }
}

// Enemy bullet elements
class EnemyBullet {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.r = 10;
  }

  show() { 
    fill(300, 20, 40);
    rect  (this.x, this.y, this.r * 2, this.r * 2);
  }

  move() {
    this.y += 6;
  }

  hits(player) {
    let d = dist(this.x, this.y, player.x + 10, height - 10);
    return d < this.r + 10;
  }
}

// When enemy shoots the game.
function enemyShoot() {
  if (gameState === "playing" && enemies.length > 0) {
    let randomEnemy = enemies[Math.floor(Math.random() * enemies.length)];
    enemyBullets.push(new EnemyBullet(randomEnemy.x, randomEnemy.y));
  }
}

// Stars in the background.
function createStars() {
  for (let i = 0; i < 100; i++) {
    stars.push({
      x: random(width),
      y: random(height),
      size: random(1, 3),
      speed: random(0.5, 2)
    });
  }
}

// Stars in the background.
function drawStars() {
  fill(255);
  noStroke();
  for (let star of stars) {
    ellipse(star.x, star.y, star.size, star.size);
    star.y += star.speed;   
    if (star.y > height) {
      star.y = 0;
      star.x = random(width);
    }
  }
}

setInterval(enemyShoot, 1500);
