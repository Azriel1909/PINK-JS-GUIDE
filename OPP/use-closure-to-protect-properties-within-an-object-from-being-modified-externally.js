/**
 * Closure
 * The simplest way to make this public property private is by 
 * creating a variable within the constructor function. This 
 * changes the scope of that variable to be within the 
 * constructor function versus available globally. This way, the 
 * variable can only be accessed and changed by methods also 
 * within the constructor function.
 */

function Bird() {
  let weight = 15;
  this.getWeight = function() {
    return weight;
  }
}