/**
 * Changing the Prototype to a New Object
 */

function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  numLegs: 4, 
  eat: function() {
    console.log("jumi jumi");
  },
  describe: function() {
    console.log("My name is " + this.name + ' WOOF!');
  }
};