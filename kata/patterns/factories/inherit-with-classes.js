class Dinosaur {
  constructor(name) {
    this.poo = this.poo.bind(this);
    this.name = name;
  }

  poo() {
    console.log(`${this.name} poo poos. wooo it stinks!`);
  }

  bite() {
    console.log(`${this.name} bites and chomps!`);
  }
}

mrDino = new Dinosaur("myDino");

mrDino.poo();
mrDino.bite();

class Dragon extends Dinosaur {
  constructor(name) {
    super(name);
  }
  breathFire() {
    console.log(`${this.name} breathes fire and roasts you! `);
  }
  // override by just declaring it with same name as parent class
  poo() {
    console.log(`${this.name} poos rainbows and confetti`);
  }
}

// Dragon poo is magical and full of
// rainbows and confetti but we can inherit
// explicitly and turn it stinky again

class StinkyDragon extends Dinosaur {
  constructor(name) {
    super(name);
  }
  breathFire() {
    console.log(`${this.name} breathes fire and roasts you! `);
  }
  // override by just declaring it with same name as parent class
  // removing the method from the subclass will do the same thing auto magically!
  poo() {
    super.poo();
  }
}

class FlyingDinosaur extends Dinosaur {
  constructor(name) {
    super(name);
  }

  fly() {
    console.log(`${this.name} flaps it's wings and takes off into the air!`);
  }
}

class FlyingDragon extends FlyingDinosaur {
  constructor(name) {
    super(name);
  }
  poo() {
    console.log(`${this.name} poos rainbows and confetti`);
  }

  static haveBaby(name) {
    return new FlyingDragon(name);
  }
}

const mrDragon = new Dragon("mrDragon");

mrDragon.breathFire();
mrDragon.bite();
mrDragon.poo();

const mrStinkyPants = new StinkyDragon("mr Stinky pants");

mrStinkyPants.poo();

const puffyD = new FlyingDragon("Puffy the Magic Dragon");

puffyD.fly();
puffyD.poo();

// call the static method to instantiate a new baby dragon
// awwwww

const babyPuffy = FlyingDragon.haveBaby("little Puffy");

// babies poo a lot.  Good thing it poos rainbows.

babyPuffy.poo();
babyPuffy.poo();
babyPuffy.poo();
babyPuffy.poo();
babyPuffy.poo();
