/**
 * Negated Characters sets
 * You could create a set of characters that you do not want to match.
 * To create a character set, you place a caret character '^' after openig
 * bracket and before the characters you do not want to match.
 * 
 * For example, /[^aeiou]/gi matches all characters that are not a vowel.
 */

let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou0-9]/ig;
let result = quoteSample.match(myRegex);
console.log(result);