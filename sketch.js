

var score = 0;
var totalSprite = 20;
var spr;

function setup() {
  createCanvas(400, 400);
  for (var i = 0; i < totalSprite; i++) {
      spr = createSprite(
      random(width), random(height),
      random(10, 50), random(10, 50));
      spr.shapeColor = random(255);
      spr.onMouseOver= removeAndScore;
  }
}
function draw() {
  background("lightblue");
  drawSprites();
  fill(255);
  noStroke();
  textSize(72);
  textAlign(CENTER, CENTER);
  
  if (score < totalSprite) {
    text(score, width/2, height/2);
  }
  else {
    text("you win: " + score, width/2, height/2);
  }
}
function removeAndScore() {
  score += 1;
  this.remove();
}
