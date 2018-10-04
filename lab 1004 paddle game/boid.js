// paddleconstructor function
// becca weeks


//Create a constructor function for the paddle object.   What parameters should this take?
  function Paddle (location,velocity)
  this.loc = location;
  this.vel = velocity;
  this.col = col;

  this.isDead = false;



  // This function calls other functions
  this.run = function(){ //FUNCTIONS to run all boids
    this.checkEdges();
    this.update();
    this.render();
  }
  // changes the location of the boid //
  //  adds speed to x and y
  this.update = function(){ //attraction
  //  if (this!== boid){
      var d = this.loc.dist(this.loc)
      if (d <450){
        var steeringForce = p5.Vector.sub(this.loc,this.loc);
        steeringForce.normalize();  //  changes the magnitud to 1
        steeringForce.mult(0.5);    //  scales the magnitude to 0.9
        this.vel.add(steeringForce);
      }
      if (d < 80){ //repel
        var repForce = p5.Vector.sub(this.loc, this.loc);
        repForce.normalize();
        repForce.mult(0.08);
        this.vel.add(this.repForce)
      }


      for (var i= 0; i <boids.length; i++){
        var x= boids[i];
        var y = chaser.loc;
        var z = x.loc;

      var d = y.dist(z) //boid chaser to ball
       if (d < 50){
         boids.splice(i,1);

       }
     }

  this.loc.add(this.vel)





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
    rotate(this.vel.heading () + radians (90));
    triangle(-5, 0, 5, 0, 0, -15); //draws boids
    pop()
  }

  //  pop or restore the coordianate system from the stack
//  for (var i = 0; i <boids.length; i++){ //SPLICING DEAD BOIDS
//  var d = this.loc.dist(this.loc)
// if (d < 50){
  //   boids.splice(i, 1)
   //}


  //  boids.splice(i, 1)// remove one element at index i

}
