//adapted from perlin noise drawings https://genekogan.com/code/p5js-perlin-noise/

var t;

function setup() {
  createCanvas(400, 400);
  background(58, 86, 112);
  stroke(180,255,255,30);
  //30 opacity
  noFill();
  t = 0;
}

function draw() {
  if(mouseIsPressed === true) {
    //made interactive by adding mouseX
    var x1 = width * noise(t + 15);
    var x2 = width * noise(t + 25);
    var x3 = width * noise(t + 35);
    var x4 = width * noise(t + 45);
    var y1 = height * noise(t + 55);
    var y2 = height * noise(t + 65);
    var y3 = height * noise(t + 75);
    var y4 = height * noise(t + 85);

  bezier(x1, y1, x2, y2, x3, y3, x4, y4);
  //These curves are defined by a series of anchor and control points.

  t += 0.003;
  //lower the decimal, the more lines and slower the movement


  // clear the background every 500 frames using mod (%) operator
  //if (frameCount % 500 == 0) {
	//background(72, 89, 112);
 // }
}
}
//////////////////////////////////////EXPORT
if (keyCode === LEFT_ARROW){
    save("mySVG.svg");
  print ("saved svg");
noLoop();	}
}
