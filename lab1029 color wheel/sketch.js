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
  var loc = createVector (o +(width*i),150);
  var red = random (0,255);
  var blue = random (0,255);
  var green = random (0,255);
  var clrAvg = (red+blue+green) / 3;
  var bar = new colorBar (loc, width, height, color, clrAvg); //creates new bar obj
  bars.push(bar)
  bars [i] = new createBar ()

}
function bubbleSort(Bars){
  var length = Bars.length;
  for (var i = 0; i<bars.length; i++){
    for (var j = 0, j<bars.length-i-1);j++){
      var clrA = bars[j].clrAvg;
      var clrB = bars[j+1].clrAvg;
      if (clrA > clrB){
        var temp = bars[j];
        bars [j] = bars[j+1];
        bars [j+1] = temp;
      }
