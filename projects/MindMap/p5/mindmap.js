var fills = ['#3e181b',
             '#422018',
             '#45391b',
             '#193c29',
             '#18323e',
             '#331f35',
             '#43293d'];
var borders = ['#db1d2d',
             '#f0421c',
             '#fec02d',
             '#20d071',
             '#1a9ddb',
             '#a13fad',
             '#f26fd4'];
var currentX;
var currentY;

function setup() {
  createCanvas(window.innerWidth,window.innerHeight);
}

function draw() {

}

function mousePressed() {
  drawNode();
}

function drawNode() {
  strokeWeight(3);

  stroke(210);
  line(currentX, currentY, mouseX, mouseY);
  currentX = mouseX;
  currentY = mouseY;

  num = int(random(0,6));
  drawRect(num);
}

function drawRect(num) {
  stroke(borders[num]);
  fill(fills[num]);
  rect(mouseX-60, mouseY-40, 120, 80);
}
