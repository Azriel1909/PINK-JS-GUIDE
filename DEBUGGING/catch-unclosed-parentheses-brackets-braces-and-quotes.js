/**
 * Another syntax error to be aware of is that all opening (),
 * [], {} and quotes have a closing pair.
 */

let myArray = [1, 2, 3];
let arraySum = myArray.reduce((previous, current) =>  previous + current);
console.log(`Sum of array values is: ${arraySum}`);