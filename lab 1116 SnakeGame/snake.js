// ball constructor function
// becca weeks


 function Snake(location, velocity){
    this.loc = location;
    this.vel = velocity;


  // This function calls other functions
  this.run = function(){
    this.update();
    this.render();
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

}
