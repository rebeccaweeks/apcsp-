// ball constructor function
// becca weeks

var randInt = Math.random (0,400);
 function Food(location,){
   this.loc = location;
    this.loc = createVector(randInt,randInt);


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

}
