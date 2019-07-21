// Composition over inheritance with Factory functions

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

function bandFactory(...factories) {
  let band = {};
  factories.forEach(factory => {
    band[factory().manufacturer] = factory();
  });

  return band;
}

function displayProperties() {
  return `I am a ${this.type} ${this.instrument} made by ${
    this.manufacturer
  } and my model is: ${this.model}`;
}

const theBandInstruments = bandFactory(
  synthFactory("Moog", "semi-modular", "mother-32"),
  guitarFactory("Fender", "electric", "telecaster"),
  pianoFactory("Steinway", "grand", "model S"),
  drumsetFactory("Gretsch", "small", "GS1")
);

Object.keys(theBandInstruments).forEach(key => {
  console.log(theBandInstruments[key].displayProperties());
});

const d50 = synthFactory("Roland", "Linear Arithmetic", "D-50")();
const d70 = synthFactory("Roland", "Linear Arithmetic", "D-70")();

console.log(d50.displayProperties());
console.log(d70.displayProperties());

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
  Object.keys(this).forEach(instrument => {
    if (this[instrument].brand === prop) {
      instrumentsByProp.push(instrument);
    }

    if (this[instrument].name.match(regex)) {
      instrumentsByProp.push(instrument);
    }
  });
  return { [prop]: instrumentsByProp, count: instrumentsByProp.length };
}

function instrumentInventory(...factories) {
  let band = {};
  factories.forEach(factory => {
    Object.assign(band, factory());
  });

  band.findAllInstrumentsByProperty = findAllInstrumentsByProperty;

  return band;
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
