
// 14_while shapes modified by Zahra Abd'Allah 

function setup() {
  createCanvas(600, 480);
}

function draw() {
  background(0);
  strokeWeight(2);
  stroke(255);
  
  //local variables 
  var x = 0;
  var  y = 200;
  var  w = 65;
  var  h = 65;
  
  while (x <= width) { // if x greater than or equal to width ellipse increses to right by 100.
    fill(125, 35, 255);
    ellipse(x,y,w, h );
    //ellipse(x, 200, 65, 65);
    x = x + 153; //incrementation operation
  }
  
  // local variables 
  var i = 300;
  var j = 40.5;
  var k = 40.5;
  
  //for loop 
  for (x = 0; x <= width; x += 50) { // var x = 0  if x is gretaer than or equal to width lines will increase.
    fill(255, 0, 200);
    line(x, i, j, k);
    //line(x, 300, 40.5, 40.5);
  }
}
