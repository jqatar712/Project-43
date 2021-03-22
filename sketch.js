var hr, mn, sc;
var hrAngle, mnAngle, scAngle;

function setup() {
  createCanvas(400,400);
  
  angleMode(DEGREES);
}

function draw() {
  background(0);  

  //translate
  translate(200,200);
  rotate(-90);
  
  //Calculating time from predefined functions in p5 lib
  hr = hour();
  mn = minute();
  sc = second();

  //rotation angle
  scAngle = map(sc,0,60,0,360);
  mnAngle = map(mn,0,60,0,360);
  hrAngle = map(hr % 12, 0,12,0,360);

  //draw seconds needle
  push();
  rotate(scAngle);
  stroke(255, 0, 0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();


  //draw minutes needle
  push();
  rotate(mnAngle);
  stroke(0, 255, 0);
  strokeWeight(7);
  line(0,0,75,0);
  pop();


  //draw hours needle
  push();
  rotate(hrAngle);
  stroke(0, 0, 255);
  strokeWeight(7);
  line(0,0,50,0);
  pop();

  strokeWeight(10);
  noFill();

  stroke(255,0,0);
  arc(0,0,300,300,0,scAngle);

  stroke(0,255,0);
  arc(0,0,275,275,0,mnAngle);

  stroke(0,0,255);
  arc(0,0,250,250,0,hrAngle);

}
