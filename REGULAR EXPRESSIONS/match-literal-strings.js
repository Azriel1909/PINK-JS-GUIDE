/**
 * We can search for a literal match of a string
 */

let testStr = "Hello, my name is Ximena.";
let testRegex = /Ximena/;
console.log(testRegex.test(testStr));


let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/;
let result = waldoRegex.test(waldoIsHiding);
console.log(result);