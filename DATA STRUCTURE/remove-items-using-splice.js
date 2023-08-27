/**
 * If we want to remove an element from somewhere in the middle
 * we use the splice() method, it removes any number of
 * consecutive elements from anywhere in an array.
 * 1st parameter = the position.
 * 2nd parameter = number of elements to delete.
 */

let array = ['today', 'was', 'not', 'so', 'great'];
console.log(array);
console.log(array.splice(2, 2));
console.log(array);

const arr = [2, 4, 5, 1, 7, 5, 2, 1];
arr.splice(1,4);
console.log(arr);