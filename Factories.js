// Composition over inheritance

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
