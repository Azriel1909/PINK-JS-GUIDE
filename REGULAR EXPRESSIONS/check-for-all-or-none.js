/**
 * We can specify the possible existence of an element with
 * question mark '?'. This cheks fot zero or one of the
 * preceding element.
 * 
 * For example, there are slight differences in American and
 * British English and you can use the question mark to match
 * both spellings.
 */

let american = "color";
let british = "colour";
let rainbowRegex= /colou?r/;
console.log(rainbowRegex.test(american));
console.log(rainbowRegex.test(british));

let favWord = "favorite";
let favRegex = /favou?rite/;
let result = favRegex.test(favWord);
console.log(result);