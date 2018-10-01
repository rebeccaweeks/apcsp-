
//  This is a comment
//  The setup function function is called once when your program begins

var ball1;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(50, 50, 250);
    ball1 = new Ball(random(width), random(height),random(15, 35), color(random, 25, 23));
	background(50, 50, 250);


}

//  The draw function is called @ 30 fps
function draw() {
for (var x = 0; x <= 20; x ++){
	ball1 = new Ball(random(width), random(height),random(15, 35), color(random, random, random));
	ball1.run();
	
	
}

}

