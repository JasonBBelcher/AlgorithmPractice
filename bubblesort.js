// Find the Smallest and Biggest Numbers

// Create a function that takes an array
// of numbers and return both the minimum
// and maximum numbers, in that order.

// My solution

function minMax(arr) {
  let swapped;
  let minMax = [];
  do {
    swapped = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);

  minMax.unshift(arr[arr.length - 1]);
  minMax.unshift(arr[0]);

  return minMax;
}

// solutions by others

function minMax2(arr) {
  arr.sort(function(a, b) {
    return a - b;
  });
  return [arr[0], arr[arr.length - 1]];
}

function minMax3(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  return [min, max];
}

function minMax4(arr) {
  var returnArr = [];
  var min = arr[0];
  var max = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  returnArr.push(min);
  returnArr.push(max);

  return returnArr;
}

function minMax5(arr) {
  return [Math.min.apply(null, arr), Math.max.apply(null, arr)];
}
