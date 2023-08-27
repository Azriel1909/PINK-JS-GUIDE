/**
 * ES6's new spread operator allows us to easily copy all of an
 * array's elements, in order, with a simple and highly readable
 * syntax.
 * Spread Syntax = ...
 */

let thisArray = [true, true, undefined, false, null];
console.log(thisArray);

let thatArray = [...thisArray];
console.log(thatArray);

function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    newArr.push([...arr])
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2));