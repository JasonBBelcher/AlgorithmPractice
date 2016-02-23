
// my solution 

function diff(arr1, arr2) {
  var newArr = [];
  
  for(var i =0; i < arr1.length; i++){
    if(arr2.indexOf(arr1[i])=== -1)
      if(newArr.indexOf(arr1[i]) === -1)
      newArr.push(arr1[i]);
  }
  
  for(var j = 0; j < arr2.length; j++){
    if(arr1.indexOf(arr2[j])=== -1)
      if(newArr.indexOf(arr2[j]) === -1)
      newArr.push(arr2[j]);
  }  
      
  return newArr;    
}     

//Wulkan solution 

function diff(arr1, arr2) {  
  var newArr = [];

  for(var elem in arr2){
    if(arr1.indexOf(arr2[elem]) === -1){
      newArr.push(arr2[elem]);
    }
  }

  for(var item in arr1){
    console.log("loop: " + arr1[item]);
    if(arr2.indexOf(arr1[item]) === -1){
      newArr.push(arr1[item]);
    }
  }

  console.log("returned: " + newArr);
  return newArr;
}

// Pascal solution 

function diff(arr1, arr2) {  
  return arr1.concat(arr2).filter(function(item) { 
    return !(arr1.indexOf(item) >= 0 && arr2.indexOf(item) >= 0);
  });
}
