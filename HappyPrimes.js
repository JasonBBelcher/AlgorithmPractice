// This code kata takes the typical kata to produce a list of primes or check if a number is a prime
// and puts a bit of a Doctor Who spin on it by producing a list of primes then checking to see if they are happy.
// A prime number is one that can only be factored by itself on one. A happy number is one that when the sum of the
// square of it's digits are added then this method repeated will ultimately produce one.

// For example 19 is a happy number

// 1**2 + 9**2 = 82


function isPrime(num) {
  if (num === 3 || num === 2) {
    return true;
  } else if (num === 1 || num === 0) {
    return false;
  };
  for (var i = 3;
    (i * i) <= num; i += 2) {

    if (num % i === 0) {
      return false;
    } else {
      return true;
    }
  }
}


function isHappyPrime(num) {
  var factored;
  var temp = [];
  var digits = ('' + num).split('');
  digits.forEach(function(digit) {
    factored = digit * digit;

    if (isPrime(factored)) {
      temp.push(factored)

    }
  });
  console.log(temp);
  var sum = 0;
  temp.forEach(function(num) {
    sum += num;
  })

  if (isPrime(num)) {
    return num + " is a happy prime!";
  } else {
    return num + " is not happy at all! :("
  }

}

var arr = [7, 13, 19, 23, 31, 79, 97, 103, 109, 139, 167, 193, 239, 263, 293,
  313, 331, 367, 379,
  383, 397, 409, 487, 4, 9, 11
];

for (var i = 0; i < arr.length; i++) {
  console.log(isHappyPrime(arr[i]));

}
