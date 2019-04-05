/* Write a program that prints the numbers from 1 to 100.
But for multiples of three print "Fizz" instead of the number and
for the multiples of five print "Buzz".
For numbers which are multiples of both three and five print "FizzBuzz".
*/

// solution 1

function fizzBuzz(nums) {
  let result = '';
  nums.forEach(num => {
    if (num % 5 === 0 && num % 3 === 0) {
      result += 'FizzBuzz' + '\n';
    } else if (num % 3 === 0) {
      result += 'Fizz' + '\n';
    } else if (num % 5 === 0) {
      result += 'Buzz' + '\n';
    }
  });

  return result;
}

let sampleArr = [];
let i = 1;

while (i < 100) {
  i += 1;
  sampleArr.push(i);
}

console.log(fizzBuzz(sampleArr));

// solution 2

function divisibleBy(num, div) {
  return num % div === 0;
}

function fuzzBizz(num) {
  if (divisibleBy(num, 3) && divisibleBy(num, 5)) {
    return 'FizzBuzz \n';
  } else if (divisibleBy(num, 3)) {
    return 'Fizz \n';
  } else if (divisibleBy(num, 5)) {
    return 'Buzz \n';
  } else {
    return '';
  }
}

function fuzzBizzIt(sampleArr) {
  let result = '';
  sampleArr.forEach(number => {
    result += fuzzBizz(number);
  });
  return result;
}

console.log(fuzzBizzIt(sampleArr));
