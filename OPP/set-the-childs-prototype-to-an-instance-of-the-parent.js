/**
 * Set the prototype of the subtype (or child)
 * Prototype = Recipe for creating an object
 */

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }

Dog.prototype = Object.create(Animal.prototype);

let beagle = new Dog();
