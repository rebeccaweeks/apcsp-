<<<<<<< HEAD
// ball constructor function
// becca weeks


 function Ball(loc, vel, rad, col){
   this.loc = loc;
  this.vel = vel;
    this.rad = rad;
    this.col = col;
  this.acc = createVector(0,.1);




  // This function calls other functions
  this.run = function(){
    this.checkEdges();
    this.update();
    this.render();
  }
  // changes the location of the ball
  //  adds speed to x and y
   this.update = function(){
     this.loc.add(this.vel);
     this.vel.add(this.acc);
     this.loc.mag();
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
     ellipse(this.loc.x, this.loc.y,rad,rad);
  }
}
=======
// ball constructor function
// becca weeks


 function Ball(loc, vel, rad, col){
   this.loc = loc;
  this.vel = vel;
    this.rad = rad;
    this.col = col;
  this.acc = createVector(0,.1);




  // This function calls other functions
  this.run = function(){
    this.checkEdges();
    this.update();
    this.render();
  }
  // changes the location of the ball
  //  adds speed to x and y
   this.update = function(){
     this.loc.add(this.vel);
     this.vel.add(this.acc);
     this.loc.mag();
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
     ellipse(this.loc.x, this.loc.y,rad,rad);
  }
}
>>>>>>> ed8875f0241018754e52fa0aebd21139e62444e3
