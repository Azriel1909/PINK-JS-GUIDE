/**
 * Spread Operator
 * Allows us to expand arrays and other expressions in
 * places where multiple parameters or elements are expected.
*/

var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr);
console.log(maximus); // Return the maximus value in the array

const arrA = [6, 89, 3, 45];
const maximusA = Math.max(...arr); // ...arr returns an unpacked array
console.log(maximusA);


const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1]; 

console.log(arr2);