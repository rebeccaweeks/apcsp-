
//  This is a comment

var txt;

function preload(){
  // p5 has a function named "loadStrings"
  txt = loadStrings("words.txt");
}
//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(200, 200, 200);
  fill(200, 30, 150);
  console.log(txt);
bubbleSort()
console.log(txt);
}


function bubbleSort (){

for (var i = txt.length-1; i<= 0; i--){
  for (var j = 0; j <txt.length-1; j++){
    if (txt[j] >txt[j+1]){
      var temp = txt[j]
       txt[j] = txt[i]
      txt[i] = temp //swap
    }
  }

}

}
