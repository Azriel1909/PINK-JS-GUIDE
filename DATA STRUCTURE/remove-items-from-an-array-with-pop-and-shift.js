/**
 * Pop() method removes an element from the end of the array.
 * shift() method removes an element from the beginnig.
 */

function popShift(arr) {
  let popped = arr.pop(); 
  let shifted = arr.shift(); 
  return [shifted, popped];
}

console.log(popShift(['challenge', 'is', 'not', 'complete']));