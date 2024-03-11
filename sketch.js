
//basic element/inspiration: https://editor.p5js.org/codingtrain/sketches/Sl8ml_Lz8

let circR;
let lineWidth;
var r = 1;
var b = 1;
var g = 1;
let circR2 = 80;
let circR3 = 10;

function setup() {
  createCanvas(500, 500);
  background(0, 10);
  frameRate(8);
  //  create_ui();
}


function draw() {
  //background
  r = map(mouseX, 1, 500, 200, 1);
  b = map(mouseY, 1, 500, 0, 180);
  g = map(mouseX, 1, 500, 0, 250);
  background(r, g, b, 4);

  circR = random(140, 190);
  lineWidth = random(1, 5);
  secLine = random(2, 6);

  //4 triangles
  stroke(0, 0);
  fill(r, 44, 45, 50);
  triangle(250, 250, 60, 60, 440, 60);
  fill(200, g, 26, 50);
  triangle(250, 250, 60, 60, 60, 440);
  fill(117, 149, b, 50);
  triangle(250, 250, 440, 60, 440, 440);
  fill(55, 101, b, 50);
  triangle(250, 250, 60, 440, 440, 440);

  //circle
  strokeWeight(lineWidth);
  stroke(255, 10);
  fill(0, 20);
  circle(250, 250, circR * 2);

  //center square
  rectMode(CENTER);
  strokeWeight(secLine);
  stroke(100, 5, 5, 50);
  fill(250, 200, 200, 150);
  rect(250, 250, 200);

  //center circle
  //coding train growing circle
  fill(r, 0, 0, 10);
  circle(250, 250, circR2);
  circR2 = (circR2 + 20) % width;

  fill(r, 0, 0, 10);
  circle(250, 250, 100);

  //inside triangle
  push();
  stroke(100, 5, 5, 50);
  fill(255, 200, 200, 200);
  triangle(250, 214.2, 220, 265.98, 280, 265.98); //coordinares calculated by chatGPT
  triangle(250, 285.98, 280, 234.02, 220, 234.02); //coordinares calculated by chatGPT
  pop();

  //core
  push();
  fill(255, 100);
  noStroke();
  circle(250, 250, circR3);
  circR3 = circR3 = (circR3 + 4) % 34;

  fill(255, 160);
  noStroke();
  circle(250, 250, 18);

  fill(255, 200);
  noStroke();
  circle(250, 250, 10);

  fill(255);
  noStroke();
  triangle(250, 246.53, 246, 253.47, 254, 253.47);

  pop();
  
  
  // inside
  rectMode(CENTER);
  square(height / 2, width / 2, 100);
  translate(width / 2, height / 2);
  rotate(PI / 4.0);
  rect(0, 0, 100, 100);

  // nothing after these shows up anymore, why?
}
