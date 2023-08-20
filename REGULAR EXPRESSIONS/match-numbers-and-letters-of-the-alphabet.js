/**
 * Using the hypen '-' to match a range of characters
 * is not limited to letters, it also works with range
 * of numbers.
 * 
 * For example, /[0-5]/ matches any number between 0 and 5
 * including the 0 and 5.
 */

// let jennyStr = "Jenny8675309";
// let myRegex0 = /[a-z0-9]/ig;
// console.log(jennyStr.match(myRegex0));

let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/ig;
let result = quoteSample.match(myRegex); 
console.log(result);