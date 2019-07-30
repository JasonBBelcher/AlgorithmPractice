function largestOfFour(arr) {
  var largest = 0;
  var largestArr = [];
  for(i = 0; i < arr.length; i++){     //  iterate through outter array
      largest = -Infinity;  // reset largest num count for each outter array
      for (j = 0; j < arr[i].length; j++){   // nested forloop to select array index inside of outer array
           if(arr[i][j] >= largest){     // check current index to see if it is largest
             largest = arr[i][j];  // if yes then make new highest num
             
           }
      }
      largestArr.push(largest); // add largest nums from each sub arr 
      
  }
      
        
  return largestArr;  // return the new array 
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]); 
