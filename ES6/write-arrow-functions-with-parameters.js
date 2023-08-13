/**
 * If an arrow function has a single parameter
 * the parentheses enclosing the parameter may be omitted
 */

const myConcat = (arr1, arr2) => {
  return arr1.concat(arr2);
};

console.log(myConcat([1, 2], [3, 4, 5]));