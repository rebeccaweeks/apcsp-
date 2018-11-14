
//  This is a comment
//  The setup function function is called once when your program begins
var snake;
var w = 20;
var cols,rows
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(200, 200, 200);
  snake = new Snake (createVector(width/2,height/2), createVector(1,0));

}

//  The draw function is called @ 30 fps
function draw() {
  snake.run();
}

function keyPressed(){
  text (keyCode,50,50);
  if (keyCode == UP_ARROW){
    snake.vel= createVector(0,-1);
  }
    if (keyCode == DOWN_ARROW){
      snake.vel= createVector(0,1);
  }
  if (keyCode == LEFT_ARROW){
    snake.vel= createVector(-1,0);
}
if (keyCode == RIGHT_ARROW){
  snake.vel= createVector(1,0);
}
}
