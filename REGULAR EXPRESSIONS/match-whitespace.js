/**
 * We can match whitespaces or spaces between letters usign
 * \s = [ \r\t\f\n\v]
 */

let whiteSpace = "Whitespace. Whitespace everywhere!"
let spaceRegex = /\s/g;
console.log(whiteSpace.match(spaceRegex));

let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/ig;
let result = sample.match(countWhiteSpace);