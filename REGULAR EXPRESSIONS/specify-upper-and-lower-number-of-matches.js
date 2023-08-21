/**
 * We can specify lower and upper number of pattners with Quantify Specifiers.
 * For example, to match only the letter a appearing between 3 and 5 times in
 * the string ah, your regex would be /a{3,5}h/.
 */

let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
console.log(multipleA.test(A4));
console.log(multipleA.test(A2));

let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/;
let result = ohRegex.test(ohStr);
console.log(result);