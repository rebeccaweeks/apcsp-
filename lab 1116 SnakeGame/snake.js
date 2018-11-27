// ball constructor function
// becca weeks
var w = 20;

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




   // render() draws the snake at  new location
  this.render = function(){
    for (var i = 0; i <this.segment.length-1; i++){
      this.drawSegment(this.segment[i], this.segment[i+1], i+1);
     //fill(color(0,255,0));
     //rect(this.segment[i].x, this.segment[i].y,w,w);
   }
  }

  this.drawSegment = function(segment, nextSegment, index){
    var xChange = segment.x - nextSegment.x;
    var yChange =  segment.y - nextSegment.y;
    var ang = atan2(yChange, xChange)
    this.segment[index].x = segment.x - cos(ang)*this.segment.length;
    this.segment[index].y = segment.y - sin(ang)*this.segment.length;
    rect(this.segment[index].x, this.segment[index].y,w,w);

  }


  this.checkSegment = function(){
   if (snake.loc.x == food.loc.x && snake.loc.y == food.loc.y){
     var endArray = this.segment[this.segment.length-1];
     //var new_vector = createVector (endArray.x,endArray.y);
     //new_vector.add(this.vel);
      this.segment.push (endArray);
    }

  //this.checkSegment = function(){
    //  if (snake.loc.x == food.loc.x && snake.loc.y == food.loc.y){
    //    var endArray = this.segment[this.segment.length-1];
    //   this.segment.push (createVector (endArray.x,endArray.y))
    //   fill(color(0,255,0));
       //rect(this.endArray.x -20, this.endArray.y,w,w);
     }


}
//}
