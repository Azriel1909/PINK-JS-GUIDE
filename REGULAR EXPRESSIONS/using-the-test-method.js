/**
 * Test Method
 * Regular expressions are used in programming to match parts of
 * strings. Js has multiple ways to use regexes, one way is using
 * the .test() method. The .test() method takes the regex,
 * applies it to a string, and returns true or false if your
 * pattern finds something or not.
 */

let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);
console.log(result);