/** CONST, A READ-ONLY VARIABLE
 *  They are a constant value, which means that once a variable is assigned with CONST, it cannot be reassigned. It is common for devs to use uppercase variable identifiers for immutable values and camelCase for mutable values (objects and arrays).
 */

// const FAV_PET = "Cats";
// FAV_PET = "Dogs";
// console.log(FAV_PET);
// ! TypeError: "FAV_PET" is read-only

const FCC = "freeCodeCamp"; // Change this line
let fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(FCC, fact); // Change this line