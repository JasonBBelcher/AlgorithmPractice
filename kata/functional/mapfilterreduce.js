// implement map

function map(array, cb) {
  let i;
  let total = [];
  for (i = 0; i < array.length; i += 1) {
    total.push(cb(array[i]));
  }
  return total;
}

// test out the map function

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const doubled = map(arr, item => {
  return item * 2;
});
console.log(doubled);

// implement filter function

function filter(array, cb) {
  let i;
  let filtered = [];

  for (i = 0; i < array.length; i += 1) {
    if (cb(array[i])) {
      filtered.push(array[i]);
    }
  }
  return filtered;
}

// test out the filter function

const arr2 = [
  { name: "Bently", age: 2 },
  { name: "Zaphy", age: 12 },
  { name: "Domino", age: 11 }
];

const ageGreaterThanFive = filter(arr2, r => {
  return r.age > 5;
});

console.log(ageGreaterThanFive);

/* output

2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ]
[ { name: 'Zaphy', age: 12 }, { name: 'Domino', age: 11 } ]

*/

// implement reduce function

function reduce(array, cb, accumulator) {
  let i;
  for (i = 0; i < array.length; i += 1) {
    if (!accumulator) {
      accumulator = array[i];
    }
    accumulator = cb(accumulator, array[i]);
  }
  return accumulator;
}

const arr3 = [1, 2, 3, 4];
const arr4 = [
  { key1: "test1", key2: "test2" },
  { key1: "test3", key2: "test4" },
  { key1: "test5", key2: "test6" },
  { key1: "test7", key2: "test8" },
  { key1: "test9", key2: "test10" },
  { key1: "test11", key2: "test12" },
  { key1: "test13", key2: "test14" },
  { key1: "test15", key2: "test16" }
];

// test out the method  on simple numbers and objects.

const summed = reduce(arr3, num => {
  return 2 * num;
});

console.log(summed);

combinedObjects = reduce(
  arr4,
  (acc, obj) => {
    acc.push(obj.key1);
    return acc;
  },
  []
);

console.log(combinedObjects);

/* output

[ 'test1',
  'test3',
  'test5',
  'test7',
  'test9',
  'test11',
  'test13',
  'test15' ]

*/
