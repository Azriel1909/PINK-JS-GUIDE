/**
 * Reduce Duplicate Code
 * We can use the prototype (a recipe for creating objects).
 */

function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");
Dog.prototype.numLegs = 4;
console.log(beagle.numLegs);
