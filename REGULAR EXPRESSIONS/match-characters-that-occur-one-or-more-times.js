/**
 * We can use the '+' character to match a group of characters
 * that apperars one or more times in a row (this occurs
 * at least once, and may be repeted).
 */

let difficultSpelling = "Mississippi";
let myRegex = /s+/ig;
let result = difficultSpelling.match(myRegex);
console.log(result);