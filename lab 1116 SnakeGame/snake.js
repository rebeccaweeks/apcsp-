// ball constructor function
// becca weeks
var w = 20;
function Snake() {
  this.x = cols()/2 * scl;
  this.y = rows()/2 * scl;
  this.xspeed = -1;
  this.yspeed = 0;
  this.segment = [];
  this.score = 0;

  this.dir = function(x, y) {
    if (x != 0 && this.xspeed != x * (-1)
        || y != 0 && this.yspeed != y * (-1)) {
      this.xspeed = x;
      this.yspeed = y;
    }
  }

  this.eat = function(food) { // function call = eat food, score increases by one point, create segment vector
    if (this.x === food.x() && this.y === food.y()) {
      food.eaten();
      this.score++;
      this.segment.push(createVector(this.x, this.y));
    }
  }

  this.move = function() {
    // put last square of tail in front of the line
    if (this.segment.length > 0) {
      var endOfSegment = this.segment.pop();
      endOfSegment.x = this.x;
      endofSegment.y = this.y;
      this.segment.unshift(endOfsegment);
    }

    // move head
    this.x += this.xspeed * scl;
    this.y += this.yspeed * scl;

    // wrap around right and bottom edges

    this.x = constrain(this.x, 0, width-scl);
    this.y = constrain(this.y, 0, height-scl);

    // wrap around left and top edges
    if (this.x < 0) {
      this.x = constrain(this.x, 0, width-scl);
    }
    if (this.y < 0) {
      this.y = constrain(this.y, 0, width-scl);
    }
  }


  this.draw = function() {
    fill(random(0,255), random(0, 255), random(0, 255));
    rect(this.x, this.y, scl, scl);
    for(var i = 0; i < this.tail.length; i++) {
      rect(this.segment[i].x,
          this.segment[i].y,
          scl, scl);

  }
  }
}

   // render() draws the snake at  new location
 // this.render = function(){
     //  fill(color(0,255,0));
      // rect(this.loc.x, this.loc.y,w,w);
  //for (var i = 0; i <this.segment.length-1; i++){
    // this.drawSegment(this.segment[i], this.segment[i+1], i+1);
    // fill(color(0,255,0));
    // rect(this.segment[i].x, this.segment[i].y,w,w);
    //  rect(this.loc.x, this.loc.y,w,w);
  //}
  //}


  


  //this.checkSegment = function(){
   //if (snake.loc.x == food.loc.x && snake.loc.y == food.loc.y){
     //var endArray = this.segment[this.segment.length-1];
     //var new_vector = createVector (endArray.x,endArray.y);
     //new_vector.add(this.vel);
      //this.segment.push (endArray);
    //}
  //}

 // this.checkSegment = function(){
     // if (snake.loc.x == food.loc.x && snake.loc.y == food.loc.y){

       //   var tail = {x: snake.loc.x, y: snake.loc.y}; //Create a new head instead of moving the tail
        //  score ++;

        //  createFood(); //Create new food
     //   } else {
      //    var tail = snake.pop(); //pops out the last cell
      //    tail.x = snake.loc.x;
       //   tail.y = snake.loc.y;
      
        //The snake can now eat the food.
       // snake.unshift(tail); //puts back the tail as the first cell

       // for(var i = 0; i < segment.length; i++) {
          //Snake(segment[i].x, segment[i].y);
     //   }
    // }
//this.eat = function (food){

//  if this.x == food.x()&& this.y= food.y()){
    //this.tail.push (createVector)this.x, this.y));
 // }
//}
//}

//}
