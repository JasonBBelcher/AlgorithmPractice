function sumFibs(num) {
 
  var prevNum = 0; 
  var currNum = 1; 
  var oddAcc = 0;
  
  while(currNum <= num){    // while current number remains lower than input
    if(currNum % 2){        // check to see if current iteration is odd
      oddAcc += currNum;    // if it is then add to accumulator 
      
    }
    var addFibs = prevNum + currNum; // do the fibonacci add sequence ex:                                                    
    prevNum = currNum;               //    0,1,1,2,3,5,8,13,21 etc....
    currNum = addFibs; 
    
  }
  return oddAcc; 
}
sumFibs(4);

function sumFibs(num){
    var a = 0; 
    var addfibs;
    var oddnum = 0;
    for(var b=1,i = 2; b <=num; i++){
            if(b % 2 !== 0){
                oddnum += b;
            }

        addfibs = a + b; 
        a = b; 
        b = addfibs; 
    }
    return oddnum; 
}
   

function fib(n){
    var a = 0; 
    var b = 1; 
    var c = 1; 
    
    for(var i = 2; i <= n; i++){
        
        c = a + b; 
        a = b; 
        b = c; 
        
    }
    return c;
}

