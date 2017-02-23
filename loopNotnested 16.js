//Original code dan Stillman 
//modified by Zahra Abd'Allah

var offset = 0; //variable to stand in x place
function setup() {
  createCanvas(600, 400);  
}

function draw() {
  background(0);
  strokeWeight(2);
  stroke(255);

//loopNotNesseted 
for(var x = 0; x<= width; x+= 50 ){
  fill(random(163),0,random(125));
  //rect
  rect(x + offset,100,25,25);
}
 
 offset = offset - 1;
 
}