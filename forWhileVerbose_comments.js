//Original by Daniel S.
//Modified by Zahra A.

function setup() {
  createCanvas(600,400)
  
}

function draw() {
  background(155, 0, 0, 125);
  strokeWeight(6);
  noStroke();
  
  //local variables 
  var x = 200; 
  var y = 300;
  var w = 25;
  var h = 225;
  
  // ellipse(200, 300, 25, 225);
  fill(0)
  ellipse(x, y, w, h);//changed them since all of my values are the same number.
  x = x + 50;//incrementation
  // ellipse(250, 300, 25, 225);
  ellipse(x, y, w, h);
  x = x + 50;
  // ellipse(300, 300, 25, 225);
  ellipse(x, y, w, h);
  x = x + 50;
  // ellipse(350, 300, 25, 225);
  ellipse(x, y, w, h);
  x = x + 50;
  // ellipse(400, 300, 85, 225);
  ellipse(x, y, w, h);
  x = x + 50;
  // ellipse(450, 300, 25, 225);
  ellipse(x, y, w, h);
  x = x + 50;
  

}