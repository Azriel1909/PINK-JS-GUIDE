/**
 * Generate a random whole numbers within a Range
 * We can use a minimum number min and your maximum number max
 */

function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}