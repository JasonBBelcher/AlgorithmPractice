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
