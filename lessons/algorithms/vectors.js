function vectorMag(x, y, z){
  x = x**2;
  y = y**2;
  z = z**2;

  var sqrRoot = x + y + z;
  return sqrRoot = Math.sqrt(sqrRoot).toFixed(3);

}



  function vectorMag2(vector){
    var magnitude = 0;
    vector.forEach(function(coordinate){

      magnitude += coordinate**2;
    })
    return magnitude = Math.sqrt(magnitude).toFixed(3);
  }


  function randomNums(max, min){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

function genVectors (size, vectortype){
  var vtype = 0;

  if(vectortype){
      if(vectortype === '2d') vtype = 2;
      if(vectortype === '3d') vtype = 3;
  } else {
    vtype = 2;
  }

  if(!size) size = 10;

  var v = [];
  var arr = [];

  for(var i = 0; i < size; i++){
    for(var j = 0; j < vtype ; j++){
      v.push(randomNums(10, 1));
    }
    arr.push(v.splice(0));
  }

  return arr;
}


var testArr = genVectors(1000000, '2d');

function loopVectors(testArr){
  testArr.forEach(function(v){
    return vectorMag2(v);
  });
}


var t0 = performance.now();
loopVectors(testArr);
var t1 = performance.now();
console.log("Call to loopVectors took " + (t1 - t0) + " milliseconds.")
