/**
 * an object can inherit its behavior (methods) from another
 * object by referencing its prototype object.
 * 
 * Example:
 * ChildObject.prototype = Object.create(ParentObject.prototype);
 * 
 * Then the ChildObject received its own methods by chaining 
 * them onto its prototype
 * 
 * Example:
 * ChildObject.prototype.methodName = function() {...};
 */

function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

Penguin.prototype.fly = function() {
  return "Alas, this is a flightless bird.";
};

let penguin = new Penguin();
console.log(penguin.fly());