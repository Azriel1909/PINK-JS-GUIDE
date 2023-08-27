/**
 * Arrays are mutable.
 * The push() method adds elements to the end of the array.
 * The unshift() method add elements to the beginnig.
 */

function mixedNumbers(arr) {
  arr.unshift('I',2,'three');
  arr.push(7,'VIII',9);
  return arr;
}

console.log(mixedNumbers(['IV', 5, 'six']));