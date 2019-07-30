let arr = [1, 2, 3, 4, 5, 5, 6, 6, 6, 6, 7, 7, 9, 9];
let someMap = {};
// why I couldn't think to do this while in the interview I'll never know.
arr.forEach(val => {
  someMap[val] = val;
});

let newArr = Object.keys(someMap);

console.log(newArr);

// second solution

let newArr2 = [];
let someMap2 = Object.create(null); // why create this way? so I don't have to check that object.hasOwnProperty(prop)

arr.map(val => {
  someMap2[val] = val;
});

for (prop in someMap2) {
  newArr2.push(prop);
}

console.log(newArr2);
