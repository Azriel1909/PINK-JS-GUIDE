/**
 * We can define a range of characters to match using
 * hypen character.
 */

let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex = /[a-e]at/; // To match letters 'a' through 'e'
console.log(catStr.match(bgRegex));
console.log(batStr.match(bgRegex));
console.log(matStr.match(bgRegex));

let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/ig; 
let result = quoteSample.match(alphabetRegex);
console.log(result);