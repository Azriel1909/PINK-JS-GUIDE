/**
 * Objects inherits its prototype directly from the constructor 
 * function that created it.
 */
function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");
Dog.prototype.isPrototypeOf(beagle);
