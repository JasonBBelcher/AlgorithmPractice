// implement map

function map(array, cb) {
  let i;
  let mapped = [];
  for (i = 0; i < array.length; i += 1) {
    mapped.push(cb(array[i]));
  }
  return mapped;
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
    } else {
      accumulator = cb(accumulator, array[i]);
    }
  }
  return accumulator;
}

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

const arr3 = [1, 2, 3, 4];

const summed = reduce(arr3, (acc, curr) => {
  return acc + curr;
});

// output is 10

console.log("summed: ", summed);

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

function multiplyBy2(arr, num) {
  const newArr = [];

  for (let i = 0; i < arr.length; i += 1) {
    newArr.push(arr[i] * num);
  }

  return newArr;
}

console.log(multiplyBy2([1, 2, 3, 4, 5, 6], 2));

const heroes = [
  {
    superhero: "Batman",
    publisher: "DC Comics",
    alter_ego: "Bruce Wayne",
    first_appearance: "Detective Comics #27",
    characters: "Bruce Wayne"
  },
  {
    superhero: "Superman",
    publisher: "DC Comics",
    alter_ego: "Kal-El",
    first_appearance: "Action Comics #1",
    characters: "Kal-El"
  },
  {
    superhero: "Flash",
    publisher: "DC Comics",
    alter_ego: "Jay Garrick",
    first_appearance: "Flash Comics #1",
    characters: "Jay Garrick, Barry Allen, Wally West, Bart Allen"
  },
  {
    superhero: "Green Lantern",
    publisher: "DC Comics",
    alter_ego: "Alan Scott",
    first_appearance: "All-American Comics #16",
    characters:
      "Alan Scott, Hal Jordan, Guy Gardner, John Stewart, Kyle Raynor, Jade, Sinestro, Simon Baz"
  },
  {
    superhero: "Green Arrow",
    publisher: "DC Comics",
    alter_ego: "Oliver Queen",
    first_appearance: "More Fun Comics #73",
    characters: "Oliver Queen"
  },
  {
    superhero: "Wonder Woman",
    publisher: "DC Comics",
    alter_ego: "Princess Diana",
    first_appearance: "All Star Comics #8",
    characters: "Princess Diana"
  },
  {
    superhero: "Martian Manhunter",
    publisher: "DC Comics",
    alter_ego: "J'onn J'onzz",
    first_appearance: "Detective Comics #225",
    characters: "Martian Manhunter"
  },
  {
    superhero: "Robin/Nightwing",
    publisher: "DC Comics",
    alter_ego: "Dick Grayson",
    first_appearance: "Detective Comics #38",
    characters: "Dick Grayson"
  },
  {
    superhero: "Blue Beetle",
    publisher: "DC Comics",
    alter_ego: "Dan Garret",
    first_appearance: "Mystery Men Comics #1",
    characters: "Dan Garret, Ted Kord, Jaime Reyes"
  },
  {
    superhero: "Black Canary",
    publisher: "DC Comics",
    alter_ego: "Dinah Drake",
    first_appearance: "Flash Comics #86",
    characters: "Dinah Drake, Dinah Lance"
  },
  {
    superhero: "Spider Man",
    publisher: "Marvel Comics",
    alter_ego: "Peter Parker",
    first_appearance: "Amazing Fantasy #15",
    characters: "Peter Parker"
  },
  {
    superhero: "Captain America",
    publisher: "Marvel Comics",
    alter_ego: "Steve Rogers",
    first_appearance: "Captain America Comics #1",
    characters: "Steve Rogers"
  },
  {
    superhero: "Iron Man",
    publisher: "Marvel Comics",
    alter_ego: "Tony Stark",
    first_appearance: "Tales of Suspense #39",
    characters: "Tony Stark"
  },
  {
    superhero: "Thor",
    publisher: "Marvel Comics",
    alter_ego: "Thor Odinson",
    first_appearance: "Journey into Myster #83",
    characters: "Thor Odinson"
  },
  {
    superhero: "Hulk",
    publisher: "Marvel Comics",
    alter_ego: "Bruce Banner",
    first_appearance: "The Incredible Hulk #1",
    characters: "Bruce Banner"
  },
  {
    superhero: "Wolverine",
    publisher: "Marvel Comics",
    alter_ego: "James Howlett",
    first_appearance: "The Incredible Hulk #180",
    characters: "James Howlett"
  },
  {
    superhero: "Daredevil",
    publisher: "Marvel Comics",
    alter_ego: "Matthew Michael Murdock",
    first_appearance: "Daredevil #1",
    characters: "Matthew Michael Murdock"
  },
  {
    superhero: "Hawkeye",
    publisher: "Marvel Comics",
    alter_ego: "Clinton Francis Barton",
    first_appearance: "Tales of Suspense #57",
    characters: "Clinton Francis Barton"
  },
  {
    superhero: "Cyclops",
    publisher: "Marvel Comics",
    alter_ego: "Scott Summers",
    first_appearance: "X-Men #1",
    characters: "Scott Summers"
  },
  {
    superhero: "Silver Surfer",
    publisher: "Marvel Comics",
    alter_ego: "Norrin Radd",
    first_appearance: "The Fantastic Four #48",
    characters: "Norrin Radd"
  }
];

// using the methods on the Array.prototype

// when using the built in array methods we can chain them all together.
// The result of the previous method becomes the input array of the next in the chain. Chaining methods
// is a subject for another day.

superheroNamesOfMarvel = heroes
  .map(hero => {
    return { name: hero.superhero, publisher: hero.publisher };
  })
  .filter(hero => {
    return hero.publisher == "Marvel Comics";
  })
  .reduce((acc, curr) => {
    acc.push(curr.name);
    return acc;
  }, []);

// using the function implementations

// Using map to include a reduced set of properties on each object.
let superheroNamesOfDC = map(heroes, hero => {
  return { name: hero.superhero, publisher: hero.publisher };
});

// Using filter to only include heroes from DC
superheroNamesOfDC = filter(superheroNamesOfDC, hero => {
  return hero.publisher == "DC Comics";
});

// using reduce to reduce the data set to a simple list of strings consisting of the names

superheroNamesOfDC = reduce(
  superheroNamesOfDC,
  (acc, curr) => {
    acc.push(curr.name);
    return acc;
  },
  []
);

console.log(superheroNamesOfDC);
console.log(superheroNamesOfMarvel);
