let g; // graphics
let char;
let balls = [];
let sound;
let beat;

function preload(){
  sound = loadSound("mixkit-retro-arcade-casino-notification-211.wav");
  beat = loadSound("beat.mp3");
}

function setup() {
  let canvas = createCanvas(700, windowHeight);
  canvas.parent("containerGame");
  g = createGraphics(width, height);
  background(50);

  char = new Character(width / 2, height / 2, 5);
  
  //
  sound.setVolume(0.2);
}

function draw() {
  background(50);

  balls.push(
    new Ball(random(width), random(height), random(1, 3), random(0.1, 1.0))
  );

  // update and display the objects
  for (let i = 0; i < balls.length; i++) {
    let b = balls[i];
    b.move();
    b.adjustSpeed(0.01);
    b.checkOutOfCanvas();
    b.display();
  }

  while (balls.length > 250) {
    balls.splice(1, 1);
  }

  for (let i = balls.length - 1; i >= 0; i--) {
    let b = balls[i];
    if (b.isDone == true) {
      balls.splice(i, 1); // (index, quantity)
    }
  }

  char.control();
  char.move();
  char.reappear();
  char.display();
  char.checkCollision(balls); // ***
  
  image(g, 0, 0);
}

function keyPressed() {
  if (key == " ") {
    saveCanvas(g, "yourSnakeArt", 'png');
    g = createGraphics(width, height); // empty
  }
}


class Ball {
  constructor(x, y, rad, spd) {
    this.x = x;
    this.y = y;
    this.rad = rad;
    this.xSpd = random(-1, 1) * spd;
    this.ySpd = random(-1, 1) * spd;
    this.isDone = false; // ***
    this.r = random(220);
    this.g = random(220);
    this.b = random(210);
  }
  move() {
    this.x += this.xSpd;
    this.y += this.ySpd;
  }
  adjustSpeed(amount) {
    this.xSpd *= 1.0 + amount;
    this.ySpd *= 1.0 + amount;
  }
  checkOutOfCanvas() {
    // horizontally
    if (this.x < 0 || this.x > width) {
      this.isDone = true;
    }
    // vertically
    if (this.y < 0 || this.y > height) {
      this.isDone = true;
    }
  }
  display() {
    push();
    translate(this.x, this.y);
    noStroke();
    fill(this.r, this.g, this.b);
    //ellipse(0, 0, this.rad * 2, this.rad * 2);
    rectMode(CENTER);
    rect(0, 0, this.rad * 2, this.rad * 2);
    pop();
  }
}

class Character {
  constructor(x, y, rad,distance) {
    this.x = x;
    this.y = y;
    this.rad = rad; // ***
    this.xSpd = 0;
    this.ySpd = 0;
    this.maxSpd = 2;
    this.r = 255; // ***
    this.g = 255;
    this.b = 255;
    this.xpos = 500;
    this.ypos = 500;
    this.xdirection = 1;
    this.ydirection = 1;
  }
  move() {
    this.x += this.xSpd;
    this.y += this.ySpd;
  }
  checkCollision(others) {
    for (let i = 0; i < others.length; i++) {
      // ***
      let other = others[i];
      let distance = dist(this.x, this.y, other.x, other.y);
      if (distance < this.rad + other.rad) {
        this.r = other.r;
        this.g = other.g;
        this.b = other.b;
        beat.play(); // ***
      } else {
        //
      }
    }
  }
  changeColour(r, g, b) {
    this.r = random(220);
    this.g = random(220);
    this.b = random(220);
  }
  control() {
    if (keyIsPressed) {
      if (keyCode == LEFT_ARROW) {
        this.xSpd = -this.maxSpd;
        this.ySpd = 0;
        sound.play();
      } else if (keyCode == RIGHT_ARROW) {       
        sound.play();
        this.xSpd = this.maxSpd;
        this.ySpd = 0;
      } else if (keyCode == UP_ARROW) {
        sound.play();
        this.xSpd = 0;
        this.ySpd = -this.maxSpd;
      } else if (keyCode == DOWN_ARROW) {
        sound.play();
        this.xSpd = 0;
        this.ySpd = this.maxSpd;
      }
    }
    if (this.xpos > width - this.rad || this.xpos < this.rad) {
    this.xdirection *= -1;
  }
  if (this.ypos > height - this.rad || this.ypos < this.rad) {
    this.ydirection *= -1;
  }
  }
  reappear() {
    // horizontally
    if (this.x < 0) {
      this.x = width;
    }
    if (this.x > width) {
      this.x = 0;
    }
    // vertically
    if (this.y < 0) {
      this.y = height;
    }
    if (this.y > height) {
      this.y = 0;
    }
  }
  display() {
    g.push();
    g.translate(this.x, this.y);
    g.noStroke();
    g.fill(this.r, this.g, this.b); // ***
    g.rectMode(CENTER);
    g.rect(0, 0, this.rad * 2); // ***
    g.pop();
  }
}
