// The global variable
let fixedValue = 4;
/**
 * Recall that in functional programming, changing or altering 
 * things is called mutation, and the outcome is called a side 
 * effect. A function, ideally, should be a pure function, 
 * meaning that it does not cause any side effects.
 */

function incrementer() {
  // Only change code below this line
  let incrementerValue = fixedValue;
  return incrementerValue = incrementerValue + 1;
  // Only change code above this line
}