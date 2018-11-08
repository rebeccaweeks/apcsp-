
var data = [];
var barHeight;
//  preload a large file
//function preload(){
//  data = loadJSON("population.json");
//}
function setup(){
  console.log("setting up");
  loadJSON("population.json",getData);
  bubbleSort (data);
}
function getData(jData){
  console.log("got data");
  data = jData;

}


function draw (){
if (data){
  data.population[3].females
    console.log (data);
}
}


    function bubbleSort (){
      for (var i = 0; i<data.length; i++){
        for (var j = 0; j <data.length-i-1; j++){
          if (data[j] >data[j+1]){
              var temp = data[j];
               data[j] =data[j+1];
                 data[j+1] = temp; //swap
               }
             }
           }
         }
