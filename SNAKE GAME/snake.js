
//  This is a comment
//  The setup function function is called once when your program begins
function Snake (loc,vel){
  this.loc = loc;
  this.vel= vel; //movement


  this.run = function (){
    this.update ();
    this.render();

  }

this.update = function (){
  this.loc.add (this.vel);
  this.loc.x = constrain (this.loc.x,0,width-w);
  this.loc.y = constrain (this.loc.y,0,height-w);

}

this.render = function (){
  fill (0,235,0);
  rect (this.loc.x, this.loc.y, w,w)

}




}
