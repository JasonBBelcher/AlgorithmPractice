// Composition over inheritance with Factory functions
// No classes were hurt in the making of this file.

// single factory functions utilizing higher order functions
// to pass arguments without returning the object at same time

function synthFactory(manufacturer, type, model) {
  return function() {
    return {
      instrument: "synth",
      type,
      manufacturer,
      model,
      displayProperties
    };
  };
}
function guitarFactory(manufacturer, type, model) {
  return function() {
    return {
      instrument: "guitar",
      type,
      manufacturer,
      model,
      displayProperties
    };
  };
}
function pianoFactory(manufacturer, type, model) {
  return function() {
    return {
      instrument: "piano",
      type,
      manufacturer,
      model,
      displayProperties
    };
  };
}

function drumsetFactory(manufacturer, type, model) {
  return function() {
    return {
      instrument: "drumset",
      type,
      manufacturer,
      model,
      displayProperties
    };
  };
}

// this will always point to the right object because this is determined
// by it's call site not it's location.

function displayProperties() {
  return `I am a ${this.type} ${this.instrument} made by ${
    this.manufacturer
  } and my model is: ${this.model}`;
}

/*
  bandFactory takes in a list of factories as args and loops over
  them and calls each one, assigns each one a name based on
  the manufacturer name.  Lastly it returns the
  composed parent object with each instrument object attached
 */

function bandFactory(...factories) {
  let band = {};
  factories.forEach(factory => {
    band[factory().instrument] = factory();
  });

  return band;
}

// lets use the factory of factories.
const theBandInstruments = bandFactory(
  synthFactory("Moog", "semi-modular", "mother-32"),
  guitarFactory("Fender", "electric", "telecaster"),
  pianoFactory("Steinway", "grand", "model S"),
  drumsetFactory("Gretsch", "small", "GS1")
);

console.log(theBandInstruments.piano.model);

// when called prints the passed in composed factory of factories

function printTheBand(band) {
  if (band) {
    Object.keys(band).forEach(key => {
      console.log(band[key].displayProperties());
    });
  } else {
    console.error("***please pass in a band factory***");
  }
}

printTheBand(theBandInstruments);

// create individual instrument factories
const d50 = synthFactory("Roland", "Linear Arithmetic", "D-50")();
const d70 = synthFactory("Roland", "Linear Arithmetic", "D-70")();

// call individual methods
console.log(d50.displayProperties());
console.log(d70.displayProperties());

// dynamically creates any kind of instrument object not just a specific type

function instrumentFactory(name, brand) {
  name = name.replace(/ /g, "").toLowerCase();
  brand = brand.replace(/ /g, "").toLowerCase();
  return function() {
    return {
      [name]: { brand, name }
    };
  };
}

function findAllInstrumentsByProperty(prop) {
  prop = prop.replace(/ /g, "").toLowerCase();

  instrumentsByProp = [];
  const regex = new RegExp(prop + ".*");
  // loop over each key and see if the prop being searched for
  // is the name or brand.
  Object.keys(this).forEach(instrument => {
    if (this[instrument].brand === prop) {
      instrumentsByProp.push(instrument);
    }

    // if it's the name we match the key word and anything after it
    // guitar, guitar1, guitar2 etc would match passing in "guitar"
    if (this[instrument].name.match(regex)) {
      instrumentsByProp.push(instrument);
    }
  });
  // return the basic stats for the prop searched for.
  return { [prop]: instrumentsByProp, count: instrumentsByProp.length };
}

// factory of factories takes in instrument factories and creates an inventory of all the instruments
// in an imaginary music store. This time merge all the objects returned into the inventory object

function instrumentInventory(...factories) {
  let inventory = {};
  factories.forEach(factory => {
    Object.assign(inventory, factory());
  });

  inventory.findAllInstrumentsByProperty = findAllInstrumentsByProperty;

  return inventory;
}

const inventory = instrumentInventory(
  instrumentFactory("Tenor Sax", "Yamaha"),
  instrumentFactory("guitar", "Gibson"),
  instrumentFactory("Guitar2", "Gibson"),
  instrumentFactory("Guitar3", "Gibson"),
  instrumentFactory("Guitar4", "Fender"),
  instrumentFactory("Guitar5", "Martin"),
  instrumentFactory("drumkit", "Yamaha"),
  instrumentFactory("keyboard1", "moog"),
  instrumentFactory("keyboard2", "roland"),
  instrumentFactory("keyboard3", "korg"),
  instrumentFactory("keyboard4", "Dave Smith"),
  instrumentFactory("drumkit2", "Gretsch"),
  instrumentFactory("Bass Guitar", "Fender")
);

console.log(inventory.findAllInstrumentsByProperty("Yamaha"));
console.log(inventory.findAllInstrumentsByProperty("Yamaha"));
console.log(inventory.findAllInstrumentsByProperty("gibson"));
console.log(inventory.findAllInstrumentsByProperty("guitar"));
console.log(inventory.findAllInstrumentsByProperty("bass"));

// inherit stuff without classes

function Dinosaur(name) {
  function poo() {
    console.log(`${name} poo poos.`);
  }
  function bite() {
    console.log(`${name} bites and chomps!`);
  }
  return { poo, bite };
}

// Dragons are magical so the poop rainbows
function Dragon(name) {
  const { bite } = Dinosaur(name);
  function poo() {
    console.log(`${name} poos rainbows and confetti`);
  }
  function breathFire() {
    console.log(`${name} breathes fire and roasts you! `);
  }
  return { breathFire, bite, poo };
}

const XerxesTheDragon = Dragon("Xerxes");

XerxesTheDragon.bite();
XerxesTheDragon.breathFire();
XerxesTheDragon.poo();

function FlyingDinosaur(name) {
  const proto = Dinosaur(name);
  function fly() {
    console.log(`${name} flaps it's wings and takes off into the air!`);
  }
  return Object.assign({}, proto, { fly });
}

function FlyingDragon(name) {
  const { fly } = FlyingDinosaur(name);
  const proto = Dragon(name);

  return Object.assign({}, proto, { fly });
}

const PuffyD = FlyingDragon("Puff the Magic Dragon");
PuffyD.bite();
PuffyD.fly();
PuffyD.poo();

const SamTheDino = Dinosaur("Sam");

SamTheDino.bite();
SamTheDino.poo();
