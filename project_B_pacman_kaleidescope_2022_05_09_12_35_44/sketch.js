//reference: https://youtu.be/R3C2giDfmO8

let s = 16;
let angle = 360 / s;
pacman1 = ["#ff255f","#ffb8ff","#00ffff","#ffb852"];

function preload(){
  song = loadSound("Pac-Man-Theme-Song.mp3");
}

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  background(255,255,255,75);
  translate(width / 2, height / 2);
  strokeWeight(1);
  stroke(random(pacman1));
  let angle = 360 / s;
  for (let i = 0; i < s; i++) {
    rotate(angle);
  }
}

function draw() {
  drawLines();
}
function drawLines(){
  translate(width / 2, height / 2);
  let mp = mouseX - width / 3;
  let md = mouseY - height /3;
  let pmp = pmouseX - width /2;
  let pmd = pmouseY - height/2;
  if (mouseIsPressed) {
    song.play();
    stroke(random(pacman1));
    let angle = 360/s;
    for (let i = 0; i < 12; i++) {
      rotate(i*angle);
      if(i%3 == 2){
        scale(-1, 1);
      }
      let di = dist(mp, md, pmp, pmd);
      let snw = map(di, 15, 18, 12, 7);
      strokeWeight(snw);
      push();
      line(mp, md, pmp, pmd);
      pop();
      push();
      scale(-1,1);
      line(mp, md, pmp, pmd);
      pop();
    }
  }
  if(frameCount>370){
    noLoop();
  }
}


