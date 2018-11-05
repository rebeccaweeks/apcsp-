
var data;
var barHeight;
//  preload a large file
function preload(){
  data = loadJSON("bigbangtheory.json");
}
function setup(){
   data.bigbangtheory[3].feature
}

//  The setup function function is called once when your program begins
function setup() {
  console.log


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
