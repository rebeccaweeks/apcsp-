
//  This is a comment
//  The setup function function is called once when your program begins

var boid;
var boids = [];
var chaser;
var mouseLoc;


function setup() {
  var cnv = createCanvas(1200, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(50, 0, 50);
  chaser = new Ball (createVector (width/2,height/2), createVector (0,0), 65, color(255));
//  var v1 = createVector(random(width), random(height));
//  var v2 = createVector(random(-2,2), random(-2,2));
//  var rad = random(15, 35)
  //var col = color(random(255), random(255), random(255))
  //var boid = (new Boid (v1, v2,rad, col))

  //loadBoids(150);

}

//  The draw function is called @ 30 fps
function draw() {

  background(50, 0, 50);
  for (var i = 0; i < boids.length; i++){
    boids[i].run();
  }
}


function loadBoids (numboids){
  for (var i = 0; i < numboids; i++){
    var loc = createVector(random(width), random(height));
    var vel = createVector(random(-2,2), random(-2,2));
    var col = color(random(255), random(255), random(255))

	boids.push(new Boid (loc, vel, col));
  }
  cosole.log (boids);


}
//  pop or restore the coordianate system from the stack
//= `` loc of mouse = loc of ball vv
//if ( mouseLoc. equals (this.loc.x, this.loc.y){


//boids.splice(i, 1)// remove one element at index i
}
function loadChaser(){
  console.log (chaser)

}
}
