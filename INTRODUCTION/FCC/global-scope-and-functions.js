// In Js Scope refers to the Visibility of variables.

/** Variables which are defined outside of a function block
 * have Global Scope. They can be seen everywhere in your js code.
 */

let myGlobal = 10;
let oopsGlobal = 5;

function fun1() {
  
}

// Only change code above this line

function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}