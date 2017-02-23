
function setup() {
  createCanvas(600, 400);  
}

function draw() {
  background(0);
  strokeWeight(2);
  stroke(255);

//nested loop grid
for(var x = 0; x<= mouseX; x+= 50 ){ // Mouse X enables user to control the spand of rects.
  for(var y = 0; y <= mouseY; y+= 50 ){//Mouse Y enabbles control of squares based on height.
  fill(random(255),0,random(255));//random goes through a sequence of colors based on the gives range
  rect(x,y,35,55);//shape of objectin loop.
  }
}

//Loops repeats task during the draw cycle for section of draw cycle . It repeats same rect over and over again.
// Add more notes

 
}