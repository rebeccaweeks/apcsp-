// ball constructor function
// becca weeks


 function Ball(location, velocity, radius, col){
    this.loc = location;
    this.vel = velocity;
    this.acc = createVector(0,.1);
    this.rad = radius;
    this.col = col;

  // This function calls other functions
  this.run = function(){
    this.checkEdges();
    this.update();
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
      if(this.loc.x < 0) this.vel.x = -this.vel.x;
      if(this.loc.x > width) this.vel.x = -this.vel.x;
      if(this.loc.y < 0) this.vel.y = -this.vel.y;
      if(this.loc.y > height) this.vel.y = -this.vel.y;
   }

   // render() draws the ball at  new location
  this.render = function(){
     fill(this.col);
     ellipse(this.loc.x, this.loc.y,this.rad,this.rad);
  }

}
