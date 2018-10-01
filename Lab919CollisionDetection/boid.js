// boidconstructor function
// becca weeks


function Boid(location, velocity, radius, col){
  this.loc = location;
  this.vel = velocity;
  this.acc = createVector(0,.1);
  this.rad = radius;
  this.col = col;

  //function Ball(location, velocity, radius, col){
  //  this.loc = location;
  //this.vel = velocity;
  //this.acc = createVector(0,.1);
  //this.rad = radius;
  //this.col = col;


  // This function calls other functions
  this.run = function(){
    this.checkEdges();
    this.update();
    this.render();
  }
  // changes the location of the ball
  //  adds speed to x and y
  this.update = function(){
    if (this!== boid){
      var d = this.loc.dist(boid.loc)
      if (d <450){
        var steeringForce = p5.Vector.sub(this.loc,boid.loc);
        steeringForce.normalize();  //  changes the magnitud to 1
        steeringForce.mult(0.5);    //  scales the magnitude to 0.9
        this.vel.add(steeringForce);
      }
      if (d < 80){
        var repForce = p5.Vector.sub(boid.loc, this.loc);
        repForce.normalize();
        repForce.mult(0.05);
        this.vel.add(this.repForce)
      }
      //this.vel.limit (3);
      this.loc.add(this.vel)
    }




  }

  //checkEdges() reverses speed when  boidtouches an edge
  this.checkEdges = function(){
    if(this.loc.x < 0) this.vel.x = -this.vel.x;
    if(this.loc.x > width) this.vel.x = -this.vel.x;
    if(this.loc.y < 0) this.vel.y = -this.vel.y;
    if(this.loc.y > height) this.vel.y = -this.vel.y;
  }

  // render() draws the boidat  new location
  this.render = function(){
    push() // push or save the current coord system into the stack
    translate(this.loc.x, this.loc.y);
    rotate(PI/4);
    triangle(-5, 0, 5, 0, 0, -15);
    pop()
  }

  //  pop or restore the coordianate system from the stack
  //= `` loc of mouse = loc of ball vv
 //if (this.loc.x == this.mouseX && this.loc.y == this.mouseY){


  //  boids.splice(i, 1)// remove one element at index i
//}
}
