// Simple recursion example that walks down a bunch of nested objects till it finds a function.

const testObj = {
  value: {
    node: {
      value: {
        node: {
          value: {
            node: {
              value: {
                node: {
                  value: {
                    node: {
                      value: {
                        node: {
                          value: {
                            node: {
                              value: {
                                node: {
                                  value: function() {
                                    return "You found me!";
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};

function walkitDown(node) {
  let value = node.value;
  if (typeof value === "function") {
    return value();
  }
  if (typeof value === "object" && value !== null) {
    return walkitDown(value.node);
  }
}

function countDown(num) {
  if (num == 0) {
    return console.log("Boom!");
  } else {
    console.log(num);
    setTimeout(() => {
      return countDown(num - 1);
    }, 1000);
  }
}

function sumRecursive(n) {
  if (n == 1) {
    return 1;
  } else {
    return n + sumRecursive(n - 1);
  }
}

function fizzBuzzRecursive(nums, n) {
  let num = nums[nums.length - 1];
  let results = [];
  if (!num) {
    return results;
  }
  if (num % 5 === 0 && num % 3 === 0) {
    results.push("FizzBuzz");
  } else if (num % 3 === 0) {
    results.push("Fizz");
  } else if (num % 5 === 0) {
    results.push("Buzz");
  }
  if (results.length) {
    console.log(results);
  }
  nums.pop();
  return fizzBuzzRecursive(nums).concat(results);
}

function factorial(n) {
  if (n == 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

function fib(num) {
  if (num <= 1) return 1;

  return fib(num - 1) + fib(num - 2);
}

function fibMemo(num, memo) {
  memo = memo || {};

  if (memo[num]) return memo[num];
  if (num <= 1) return 1;

  return (memo[num] = fibMemo(num - 1, memo) + fibMemo(num - 2, memo));
}

// console.log(walkitDown(testObj));
console.log(sumRecursive(3));
// console.log(factorial(5));

// console.log(fib(4));

// console.log(
//   fizzBuzzRecursive([
//     1,
//     2,
//     3,
//     4,
//     5,
//     6,
//     7,
//     8,
//     9,
//     10,
//     11,
//     12,
//     13,
//     14,
//     15,
//     16,
//     17,
//     18,
//     19
//   ])
// );
// countDown(10);
