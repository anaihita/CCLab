let bubbleColors = ["#ffff99", "#ccff99", "#ffccff", "#99ccff", "#ff99cc"];
let creatureHues = ["DarkSeaGreen", "Coral", "Salmon", "LightBlue"];
let noseColors = ["CadetBlue", "Cream", "DarkSalmon"];
let x = 0;
let y = 0;
let a = 0;
let c = 0;
let eyeColor;
let noseColor;
let bubbleColor;
let outerEye;

let characScale;

function setup() {
  let cvs = createCanvas(400, 400);
  cvs.parent("Canvas");
  background(51, 204, 255);
  noStroke();
  angleMode(DEGREES);
  eyeColor = "black";
  noseColor = "FloralWhite";
  armColor = "salmon";
  outerEyecolor = "white";
  randomIndex = floor(random(creatureHues.length));
  bodyColor = creatureHues[randomIndex];
  characterScale = random(0.5, 1.3);
}

function draw() {
  drawCreature(mouseX, mouseY, 0, characScale);
  smallBubbles(width, height);
  smallBubbles2(width, height);
}

function drawCreature(x, y, s, t, p, o) {
  push();
  rotate(frameCount * 5);
  smallBubbles();
  pop();

  push();
  translate(height, a, -c);
  rotate(frameCount * 2);
  smallBubbles2();
  pop();

  a = (a + 4) % width;
  c = (c + 3) % height;

  push();
  translate(s, t);
  rotate(p);
  scale(o);

  drawBubble(0, 0, 0, 1.0);
  pop();
}
function smallBubbles() {
  fill(random(bubbleColors));
  stroke(255);
  ellipse(x, y, 50);
}
function smallBubbles2(x, y) {
  fill(random(bubbleColors));
  stroke(255);
  ellipse(a, c, 50);
}
function drawBubble(s, t, p, o) {
  push();
  translate(s, t);
  rotate(p);
  scale(o);

  fill(bodyColor);
  ellipse(200, 200, 200, 200);

  fill(outerEyecolor);
  ellipse(165, 180, 40, 40);
  ellipse(215, 180, 40, 40);

  fill(eyeColor);
  ellipse(180, 180, 10, 10);
  ellipse(230, 180, 10, 10);

  fill(noseColor);
  ellipse(190, 220, 25, 25);

  pop();
}




