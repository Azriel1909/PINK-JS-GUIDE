/**
 * Methods are properties that are functions.
 * This adds different behaviour to an object.
 */

let duck = {
  name: "Volkgan",
  numLegs: 2,
  sayName: function() {return "The name of this duck is " + duck.name + ".";}
};

console.log(duck.sayName());

let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {return "This dog has " + dog.numLegs + " legs.";}
};

console.log(dog.sayLegs());