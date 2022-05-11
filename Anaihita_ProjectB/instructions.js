let data = "INSTRUCTIONS"

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("canvasContainer");
  textSize(50)
  textFont('Press Start 2P');
  typeWriter(data, 0, 50, 50, 180);
}

function draw() {
}

function typeWriter(sentence, p, x, y, speed) {
  if (p < (sentence.length)) {
    text(sentence.substring(0, p + 1), x, y);
    p++;
    setTimeout(function () {
      typeWriter(sentence, p, x, y, speed)
    }, speed * 3);
  }
}