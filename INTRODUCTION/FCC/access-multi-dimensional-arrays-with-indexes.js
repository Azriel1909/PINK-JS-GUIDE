/**A multi-dimensional array is an array of arrays*/

const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14]
];

console.log(arr);
const subarray = arr[3];
console.log(subarray);
const nestedSubarray = arr[3][0];
console.log(nestedSubarray);
const element = arr[3][0][1];
console.log(element);

const myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

const myData = myArray[2][1];
console.log(myData);


