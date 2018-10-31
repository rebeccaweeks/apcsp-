<<<<<<< HEAD
// paddleconstructor function
// becca weeks


//Create a constructor function for the paddle object.   What parameters should this take?
function colorbar(loc, w, h, clr, clrAvg){
this.loc = loc;
this.w = w;
this.h = h;
this.clr = clr;
this.clrAvg = clrAvg;

this.run = function(){
  this.render();
}

this.render = function(){
  fill(this.clr);
  rect(this.loc.x, this.loc.y, this.w, this.h);
}

}


>>>>>>> ed8875f0241018754e52fa0aebd21139e62444e3
