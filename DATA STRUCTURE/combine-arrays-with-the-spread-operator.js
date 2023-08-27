/**
 * Another huge advantage of the spread operator is the ability
 * to combine arrays, or to insert all the elements of one array
 * into another, at any index.
 */

let thisArray = ['sage', 'rosemary', 'parsley', 'thyme'];
console.log(thisArray)
let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander'];
console.log(thatArray)

function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence = ['learning', ...fragment,'is','fun'];
  return sentence;
}

console.log(spreadOut());