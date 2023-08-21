/**
 * The shortcut of [A-Za-z0-9] is \w.
 * This character matches upper and lowercase letters plus numbers.
 * It also includes the underscore character '_'.
 */

let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
console.log(longHand.test(numbers));
console.log(shortHand.test(numbers));
console.log(longHand.test(varNames));
console.log(shortHand.test(varNames));

let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/ig;
let result = quoteSample.match(alphabetRegexV2).length;
console.log(result);