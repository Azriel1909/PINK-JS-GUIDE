/**
 * Case (letter case) is the difference between uppercase
 * letters and lowercase letters. You can match both cases using
 * a flag, the ignote case flag 'i'.
 * 
 * Example
 * /ignorecase/i
 */

let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i;
let result = fccRegex.test(myString);
console.log(result);