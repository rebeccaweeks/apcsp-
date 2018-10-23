
//  This is a comment
//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(200, 200, 200);
  fill(200, 30, 150);

}




for (var i = words.length-1; i<= 0; i--){
  for (var j = 0; j <words.length-1; j++){
    if (words [j] <words [i]){
      var temp = words [j]
      var j = words[i]
      words [i] = temp //swap
    }
  }
}
