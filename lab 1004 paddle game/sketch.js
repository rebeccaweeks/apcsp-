
//  This is a comment
//  The setup function function is called once when your program begins
//When the game is played, balls appear randomly and fall from the top downward. The player moves the paddle to try and eliminate a ball.
//If the Ball hits the top of the paddle, the ball is eliminated and removed from the screen.  When a ball is eliminated, the score increases.
// However, if a ball hits the bottom of the paddle, the round is over and a greater number of balls appear.  You need to decide how the player wins.
//Create a constructor function for the paddle object.   What parameters should this take?
//Create a constructor function for ball objects.  Load an array with Ball objects
//Use acceleration to create gravity for the balls
//n the Ball constructor function, add logic to marks a ball dead if when hits the top of the paddle.
//In the draw function, remove (splice) all balls that are marked dead from the array
//In the Ball constructor function, add logic to start a new round when the ball hits the bottom of the paddle
//Each new round begins with a greater number of balls


//var boid;
var balls = [];
//var chaser;
var mouseLoc;


function setup() {
  var cnv = createCanvas(1200, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(50, 0, 50);
  paddle = new Paddle (createVector (width/2,height/2), createVector (0,0), 65, color(255));
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
  balls[i].run();

  }
//chaser.run();

}
// Load an array with Ball objects
function loadBalls (numBalls){
  for (var i = 0; i < numBalls; i++){
    var v1 = createVector(random(width), random(height));
    var v2 = createVector(random(-2,2), random(-2,2));
    var rad = random(15, 35)
    var col = color(random(255), random(255), random(255))
	var ball = (new Ball (v1, v2,rad, col))
	balls.push(new Ball (v1, v2,rad, col));
  }


}
//  pop or restore the coordianate system from the stack
//= `` loc of mouse = loc of ball vv
//if ( mouseLoc. equals (this.loc.x, this.loc.y){


//boids.splice(i, 1)// remove one element at index i

//function loadChaser(){
//console.log (chaser);

//}
