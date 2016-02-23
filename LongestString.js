// freeCodeCamp Bonfire #6  Find the longest string. 

function findLongestWord(str) {
  var arr = str.split(' '); // split into an array of words
  var lgth = 0; // set length 
  var longest;   // init var for longest word so far 
    
    // search for longest word in arr of words
    for(var i = 0; i < arr.length; i++){
        
        if(arr[i].length > lgth){   // if string arr length is greater than lgth
           lgth = arr[i].length;    // make lgth equal to string arr length  
            longest = arr[i];       // set current word in current arr index to longest
        }
    }
  return longest.length;
    
    
}

findLongestWord('The quick brown fox jumped over the lazy dog');
