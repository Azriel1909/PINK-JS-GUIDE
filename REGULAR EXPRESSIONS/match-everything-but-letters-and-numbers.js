/**
 * You can search for the opposite of \w with \W.
 * It is the same as [^A-Za-z0-9_].
 */

let shortHand = /\W/;
let numbers = "42%";
let sentence = "Coding!";
console.log(numbers.match(shortHand));
console.log(sentence.match(shortHand));

let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/ig;
let result = quoteSample.match(nonAlphabetRegex).length;