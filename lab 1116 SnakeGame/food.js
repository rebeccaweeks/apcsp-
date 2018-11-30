// ball constructor function
// becca weeks


 Food.js

function Food() {
  this.vec = randomVector().mult(scl);

  this.x = function() {
    return this.vec.x;
  }

  this.y = function() {
    return this.vec.y;
  }

  this.draw = function() {
    fill(255, 255, 255);
    rect(this.x(), this.y(), scl, scl);
  }

  this.eaten = function() {
    this.vec = randomVector().mult(scl);
  }
}



        //Look at the position of the snake's body.
      //  for (var i=0; i>segment.length; i++) {
         //   var snakeX = Snake.segment[i].x;
          //  var snakeY = Snake.segment[i].y;
//
         //    if (food.x===snakeX || food.y === snakeY || food.y === snakeY && food.x===snakeX) {
              //  food.x = Math.floor((Math.random() * 20) + 1);
               // food.y = Math.floor((Math.random() * 20) + 1); //move the food one cell up
     
