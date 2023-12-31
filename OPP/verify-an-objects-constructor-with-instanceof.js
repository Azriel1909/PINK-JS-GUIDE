/**
 * Anytime a constructor function creates a new object, that
 * object is said to be an instance of its constructor.
 * 
 * instanceof allows you to compare an object to a constructor,
 * returning true or false based on whether or not that object
 * was created with the constructor.
 */

function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

let myHouse = new House(5);
myHouse instanceof House;