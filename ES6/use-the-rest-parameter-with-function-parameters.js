/**
 * Reset Parameter
 * We can create functions that take a variable number of arguments.
 * It eliminates the neet to use arguments object and
 * allows us to use array methods on the array of parameters.
 */

const sum = (...args) => {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
}
