/**
 * To search or extrat a pattern more than once
 * you can use the global search flag 'g'.
 * 
 Example

let testStr = "Repeat, Repeat, Repeat";
let ourRegex = /Repeat/;
testStr.match(ourRegex);

let repeatRegex = /Repeat/g;
testStr.match(repeatRegex);

 */

let testStr = "Repeat, Repeat, Repeat";
let ourRegex = /Repeat/;
testStr.match(ourRegex);

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi; 
let result = twinkleStar.match(starRegex);
console.log(result);