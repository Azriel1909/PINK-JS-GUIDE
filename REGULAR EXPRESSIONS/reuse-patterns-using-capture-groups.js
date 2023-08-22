/**
 * We can match a word that occurs multiples time using Capture
 * Groups.
 * 
 * Capture Groups are constructed by enclosign the regex
 * pattern to be captured in (). The substring matched by the
 * group is saved to a temporary "variable", which can be
 * accessed within the same regex using a backslash and the
 * number of the capture group (e.g. \1).
 * 
 */

let repeatStr = "row row row your boat";
let repeatRegex = /(\w+) \1 \1/;
console.log(repeatRegex.test(repeatStr));
console.log(repeatStr.match(repeatRegex));

let repeatNum = "42 42 42";
let reRegex = /^(\d+) \1 \1$/; // Change this line
let result = reRegex.test(repeatNum);