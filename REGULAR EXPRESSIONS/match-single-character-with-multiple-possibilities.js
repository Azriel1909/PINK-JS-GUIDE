/**
 * You can search for a literal pattern with some flexibility
 * with character classes. Character classes allow you to define
 * a group of characters you wish to match by placing them inside
 * square [] brackets.
 * 
 * Example:
 * you want to match bag, big, and bug but not bog. You can
 * create the regex /b[aiu]g/ to do this. The [aiu] is the
 * character class that will only match the characters
 * a, i, or u.
 */

// let bigStr = "big";
// let bagStr = "bag";
// let bugStr = "bug";
// let bogStr = "bog";
// let bgRegex = /b[aiu]g/;
// console.log(bigStr.match(bgRegex));
// console.log(bagStr.match(bgRegex));
// console.log(bugStr.match(bgRegex));
// console.log(bogStr.match(bgRegex));

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi;
let result = quoteSample.match(vowelRegex); 
console.log(result);