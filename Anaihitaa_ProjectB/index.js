let apiUrl = "https://api.giphy.com/v1/gifs/search?q="
let apiKey = "&api_key=e4JEPiFGfZ2R5rWjLFmCQjUSQmRhVAWJ";

function setup() {
  let canvasDiv = document.getElementById('sketchID');
  let sketchCanvas = createCanvas(windowWidth, height);
  //sketchCanvas.parent("sketchID"); 
}

function draw() {
  background(255, 255, 255, 0);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
