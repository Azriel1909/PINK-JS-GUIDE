/**
 * We can search fot multiple patterns using
 * alternation or OR operator '|'.
 * 
 * Example
 * if you wanted to match the strings yes or no, the regex you
 * want is /yes|no/.
 */

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
let result = petRegex.test(petString);
console.log(result);