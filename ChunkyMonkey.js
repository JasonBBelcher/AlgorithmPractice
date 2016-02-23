function chunk(arr, size) {
 var tempArray = [];
    
 for(var i=0; i<arr.length; i+=size){
     tempArray.push(arr.slice(i, i+size));
 }
    
    
  return tempArray;
}

chunk(['a', 'b', 'c', 'd'], 2);


