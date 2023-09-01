/**
 * Constructors are functions that create new objects.
 * They define properties and behaviours that will belong the object.
 * 
 * Convections:
 * 1. Constructors are defined with a capitalized name to distinguish them 
 * from other functions that are not constructors.
 * 2. Constructors use the keyword this to set properties of the object 
 * they will create. Inside the constructor, this refers to the new object 
 * it will create.
 * 3. Constructors define properties and behaviors instead of returning a 
 * value as other functions might.
 */

function Dog() {
  this.name = 'Teddy';
  this.color = 'Honey';
  this.numLegs = 4;
}