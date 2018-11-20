
//  This is a comment
//  The setup function function is called once when your program begins

//var ball1;
var w = 20;
var snake;
var row, col;


function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  frameRate(8)
  background(50, 0, 50);
  snake = new Snake(createVector(width/2, height/2), createVector(0, 0));

}

//  The draw function is called @ 30 fps
function draw() {
  background(50, 0, 50);
  snake.run();
}

function keyPressed(){
  console.log("key pressed");
   if(keyCode === UP_ARROW){
     snake.vel = createVector(0, -w);
   }else if(keyCode === DOWN_ARROW){
     snake.vel = createVector(0, w);
   }else if(keyCode === RIGHT_ARROW){
     snake.vel = createVector(w, 0);
   }else if(keyCode === LEFT_ARROW){
     snake.vel = createVector(-w, 0);
   }



}