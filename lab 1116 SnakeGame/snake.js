// ball constructor function
// becca weeks


 function Snake(location, velocity){
    this.loc = location;
    this.vel = velocity;
    this.segment = [location];

  // This function calls other functions
  this.run = function(){
    this.update();
    this.render();
    this.checkSegment();
  }
  // changes the location of the ball
  //  adds speed to x and y
   this.update = function(){

      this.loc.add(this.vel);
   }



   // render() draws the ball at  new location
  this.render = function(){
     fill(color(0,255,0));
     rect(this.loc.x, this.loc.y,w,w);
  }
  this.checkSegment = function(){
    if (snake.loc.x == food.loc.x && snake.loc.y == food.loc.y){
      var endArray = this.segment[this.segment.length-1];
      this.segment.push (createVector (endArray.x,endArray.y))
    }


}
}
