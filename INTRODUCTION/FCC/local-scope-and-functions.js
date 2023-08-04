/** Variables which are declared within a function (as well as the functions parameters) have a LOCAL SCOPE (only visible within that function) */

// * Example

function myTest() {
  const local = "foo";
  console.log(local); // visible here
}

myTest();
// console.log(local); // No visible here

function myLocalScope() {
  let myVar = 9;
  console.log('inside myLocalScope', myVar);
}
myLocalScope();
console.log('outside myLocalScope', myVar);