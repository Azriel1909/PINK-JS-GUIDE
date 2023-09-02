/**Inheritance Technique
 * Reuse Methods.
 */
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};


let duck = Object.create(Animal.prototype); 
/**
 * Object.create(obj) creates a new object, and sets obj as the 
 * new object's prototype.
 */
let beagle = Object.create(Animal.prototype); 