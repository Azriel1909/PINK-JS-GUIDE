/**
 * Unrelated Objects
 * For unrelated objects, it's better to use mixins. A mixin 
 * allows other objects to use a collection of functions.
 * 
 * Analogy:
 * Inheritance does not work well for unrelated objects like 
 * Bird and Airplane. They can both fly, but a Bird is not a 
 * type of Airplane and vice versa.
 */

let glideMixin = function(obj) {
  obj.glide = function() {
    console.log("Gliding");
  }
};

let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

glideMixin(bird);
glideMixin(boat);

bird.glide();
boat.glide();