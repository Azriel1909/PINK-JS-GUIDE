/**
 * Splice() methos
 * Parameter 1 = Position
 * Parameter 2 = # of elements
 * Parameter 3 = Add elements 
 */

const numbers = [10, 11, 12, 12, 15];
console.log(numbers);
const startIndex = 3;
const amountToDelete = 1;
numbers.splice(startIndex, amountToDelete, 13, 14);
console.log(numbers);

function htmlColorNames(arr) {
  arr.splice(0,2,'DarkSalmon','BlanchedAlmond')
  return arr;
}

console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));