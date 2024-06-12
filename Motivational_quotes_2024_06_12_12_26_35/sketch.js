var word1 = "Yesterday";
var word2 = "IS HISTORY.";
var word3 = "Tomorrow is";
var word4 = "a mystery";
var word5 = "Today is a gift.";
var word6 = "THAT'S WHY";
var word7 = "it's called";
var word8 = "THE PRESENT.";
var font1, font2;

function preload() {
  font1 = loadFont("Amperzand.ttf");
  font2 = loadFont("ostrich-sans.sans-medium.ttf");
}

function setup() {
  createCanvas(500, 600);
  background(0);
  fill(220);
  textAlign(CENTER);
  textFont(font1, 70);
  text(word1, width / 2, height / 2 - 220);
  textFont(font2, 85);
  text(word2, width / 2, height / 2 - 140);
  textFont(font1, 55);
  text(word3, width / 2, height / 2 - 85);
  textFont(font1, 70);
  text(word4, width / 2, height / 2 - 30);
  textFont(font1, 35);
  text(word5, width / 2, height / 2 + 25);
  textFont(font2, 75);
  text(word6, width / 2, height / 2 + 110);
  textFont(font1, 75);
  text(word7, width / 2, height / 2 + 170);
  textFont(font2, 70);
  text(word8, width / 2, height / 2 + 240);

}