/**
 * Notice that the 'new' operator is used when calling a constructor.
 * We create a new instance of and Object.
 */

function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}

let hound = new Dog();
console.log(hound);