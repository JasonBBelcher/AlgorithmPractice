
//https://www.gorkahernandez.com/blog/fcc-bonfire-series-131-sum-all-prime/


// function isPrime(num){
// 	if(num <= 1)	
// 		return false; 
// 	for(var i = 2; i <= num / 2; i++){
// 		if(num % i == 0)
// 		return false; 
// 	}
// 	return true; 
// }	
		


		

// function sumPrimes(num){
// 		var total = 0; 
// 		for(var i = 0; i <= num; i++){
// 			if(isPrime(i)){
// 			total += i; 
				
// 			}
// 		}
		

// 	return total; 	
// }


// console.log(sumPrimes(10));

function sumPrimes(number) {
  if (number < 2) return 0;
  var result = [2];
 
  for (var i = 3; i <= number; i += 2) {
    if (isPrime(i)) result.push(i);
  }
 
  return result.reduce(function(a, b) {
    return a + b;
  });
 
  function isPrime(number) {
    if (number < 2) return false;
    for (var i = 2; i <= number / 2; i++) {
      if (number % i === 0) return false;
    }
    return true;
  }
}






















// //aldraco solution

function sumPrimes(num) {
  //create an array of prime numbers up to num
  var primesArray = [];
  
  
  function isPrime(number) {
    //tests for prime
    //var index = 2;
    var sqrt = Math.sqrt(number);
    
    for (var index=2; index <= sqrt; index++) {
      if (number % index === 0) {
        return false;
      }
      
    }
    return true;
  }
  
  
  for (var i=2; i <= num; i++) {
    //test isPrime
    if (isPrime(i)) {
      primesArray.push(i);
    }
    //insert into an array
  }
  
  
  
  //sum the array
  var sum = primesArray.reduce(function(a,b) {
    return a+b;
  });
  
  
  return sum;
}

sumPrimes(10);



function genIntegers(num){
	var arr = [];
	for(var i = 2; i <= num; i++){
		arr.push(i); 
	}
	
	return arr;  

	}

	

console.log(genIntegers(10));



function isPrime(arr)

















