/**
 * indexOf()
 * Allows us to quickly and easily check for the presence of 
 * an element of an array. It takes an element as a parameter,
 * and when called, it returns the position, or index of an
 * element, or '-1' if the element does not exist on the array.
 */

let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];
console.log(fruits.indexOf('dates'));
console.log(fruits.indexOf('oranges'));
console.log(fruits.indexOf('pears'));

function quickCheck(arr, elem) {
  if(arr.indexOf(elem) in arr) {
    return true;
  } else {
    return false;
  }
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));