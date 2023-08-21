/**
 * We can search everything exept whitespace with \S
 * \S = [^ \r\t\f\n\v]
 */

let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g;
let result = sample.match(countNonWhiteSpace);
console.log(result);