// ball constructor function
// becca weeks


 function Food(location,){
   this.loc = location;



  // This function calls other functions
  this.run = function(){
    //this.checkEdges();
  //  this.update();
    this.render();
  }
  // changes the location of the ball
  //  adds speed to x and y
   this.update = function(){
      this.vel.add(this.acc);
      this.loc.add(this.vel);
   }

   //checkEdges() reverses speed when  ball touches an edge
   this.checkEdges = function(){

   }

   // render() draws the ball at  new location
  this.render = function(){
    fill(color(255,0,0));
    rect(this.loc.x, this.loc.y,w,w);
  }
  var createFood = function() {
          food = {
            //Generate random numbers.
            x: Math.floor((Math.random() * 30) + 1),
            y: Math.floor((Math.random() * 30) + 1)
        }

        //Look at the position of the snake's body.
        for (var i=0; i>segment.length; i++) {
            var snakeX = segment[i].x;
            var snakeY = segment[i].y;

             if (food.x===snakeX || food.y === snakeY || food.y === snakeY && food.x===snakeX) {
                food.x = Math.floor((Math.random() * 20) + 1);
                food.y = Math.floor((Math.random() * 20) + 1); //move the food one cell up
            }
        }
    }

}
