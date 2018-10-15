
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
var paddle ;

function setup() {
  var cnv = createCanvas(1200, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(50, 0, 50);
  paddle = new Paddle (createVector (width/2,height/2), createVector (-.1,.1), 95,35, color(255,0,255)); //creates paddle

   loadBalls(15);
}


function loadBalls (numBalls){ // loads all the balls in the array and create new ball objects for the array
  for (var i = 0; i < numBalls; i++){
    var loc = createVector(random(100,600), 20);
    var vel = createVector(random(-2,2), random(-2,2));
    var rad = 25;
    var col = color(random(0,255), random(0,255), random(0,255));
	var ball = new Ball (loc, vel,rad, col)
	balls.push(ball);
  }
}



//  The draw function is called @ 30 fps
function draw() {
background(20,20,20);
noStroke ();
paddle.run ();
for (var i = 0; i < balls.length; i++){
  balls[i].run();
  //balls bounce
  var ballA = balls[i];
  var y = ballA.loc.y;
  var x = ballA.loc.x;
  //distance bt pad and ball
  var distY = abs (paddle.loc.y- y);
  //distance of paddle ends
  if ((distY <2) && (x>paddle.loc.x) && (x<paddle.loc.x+250)){
    ballA.vel.y = -ballA.vel.y;
    var lowerEdge = paddle.loc.y + paddle.l ;//lower left paddle y coord value
    var upperEdge = paddle.loc.y //upper paddle value
    var  lEdge =paddle.loc.x ; // paddle left edge x value
    var rEdge = paddle.loc.x + paddle.w ; //right edge x value

    if (x > lEdge && x < rEdge &&  y <lowerEdge &&  y > upperEdge){
      //fix to find if ball a is between avalue and a value and if y is between something and something.
      balls.splice(i,1);

    } // boundaries
  }
}
}
