// The global variable
let fixedValue = 4;

/**
 * Another principle of functional programming is to always 
 * declare your dependencies explicitly. This means if a 
 * function depends on a variable or object being present, then 
 * pass that variable or object directly into the function as an 
 * argument.
 */


function incrementer(value) {
  value = fixedValue;
  return value = value + 1;
}