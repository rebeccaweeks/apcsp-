
//  This is a comment
//  The setup function function is called once when your program begins

//var ball1;
var scl = 20;
var snake;
var food;


function setup() {
  createCanvas(800, 800);
  snake = new Snake();
  food  = new Food();
  frameRate(50);
snake = new Snake(createVector(width/2, height/2), createVector(1,0));
}

function draw() {
  background(random(0,255), random(0, 255), random(0, 255));

  snake.eat(food);
  snake.move();
  snake.draw();
  food.draw();
}


function keyPressed() {
  if (keyCode === 38) {
    snake.dir(0, -1);
  } else if (keyCode === 40) {
    snake.dir(0, 1);
  } else if (keyCode === 39) {
    snake.dir(1, 0);
  } else if (keyCode === 37) {
    snake.dir(-1, 0);
  }
}

function cols() {
  return floor(width / scl);
}

function rows() {
  return floor(height / scl);
}

function randomVector() {
  return createVector(floor(random(cols())), floor(random(rows())));
}
