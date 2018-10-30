var bars = [];  //array of colors

function setup(){
  var cnv = createCanvas(800,800) ;
  vcnv.position ((windowWidth-width)/2,30);
  background (20,20,20);
  numBars = 40;
  loadBars (numBars)
  bubbleSort (bars);
}

function draw (){
  background (20,20,20,4000);
  noStroke();
  for (var i = 0; i<bars.length; i++){
    bars[i].run();
  }
}
function loadBars(numBars){
for (var i = 0; i<bars.length; i++){
  var width = 800/numBars;
  var height = 250;
  var loc =
  bars [i] = new createBar ()

}
