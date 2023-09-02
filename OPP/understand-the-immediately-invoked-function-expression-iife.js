/**
 * Immediately Invoked Function Expression (IIFE)
 * 
 * A common pattern in JavaScript is to execute a function as 
 * soon as it is declared. 
 * 
 * Example:
 * 
 * (function () {
 * console.log("Xime, Xime!")
 * })();
 * 
 * The function has no name and is not stored in a variable. The 
 * two parentheses () at the end of the function expression 
 * cause it to be immediately executed or invoked.
 */

// function makeNest() {
//   console.log("A cozy nest is ready");
// }

(function () {
  console.log("A cozy nest is ready");
}) ();

// makeNest();