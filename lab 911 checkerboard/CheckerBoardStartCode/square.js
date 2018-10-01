

/*
**  Square Constructor Function::
**  becca weeks
**  Sept. 11, 2018
*/

//  Add perameters to your constructor function
function Sqr(location, sideLength, col){
//  Add instance variables to your constructor Function
//What does a square need to know about itself??
  this.loc = location;
  this.w = sideLength;
  this.col = col;

  this.render = function(){
    fill (this.col)
    rect(this.loc.x, this.loc.y,this.w,this.w);
  }
}//  End of Square constructor function
