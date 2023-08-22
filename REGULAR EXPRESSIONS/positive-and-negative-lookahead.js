/**
 * Lookaheads are patterns that tell js to look-ahead in your
 * string to check for patterns further along.
 * 
 * There are two kinds of lookaheads
 * 
 * 1. Possitive lookahead: it will look to make sure the element
 * in the search pattern is there, but will not actually match it.
 * A positive lookahead is used as (?=...) where the ... is the
 * required part that is not matched.
 * 
 * 2. Negative lookahead: it will look to make sure the element in the
 * search pattern is not there. A negative lookahead is used as (?!...)
 * where the ... is the pattern that you do not want to be there.
 * 
 */

let quit = "qu";
let noquit = "qt";
let quRegex= /q(?=u)/;
let qRegex = /q(?!u)/;
console.log(quit.match(quRegex));
console.log(noquit.match(qRegex));

/**
 * Here is a (naively) simple password checker that looks for between
 * 3 and 6 characters and at least one number:
 */
let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
console.log(checkPass.test(password));


let sampleWord = "astronaut";
let pwRegex = /(?=\w{6})(?=\D*\d{2})/;
let result = pwRegex.test(sampleWord);
console.log(result);