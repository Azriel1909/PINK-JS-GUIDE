/**
 * Special Constructor Property
 * The advantage of the constructor property is that it's 
 * possible to check for this property to find out what kind of 
 * object it is.
 */

function Dog(name) {
  this.name = name;
}

function joinDogFraternity(candidate) {
  if (candidate.constructor === Dog) {
    return true;
  } 
}