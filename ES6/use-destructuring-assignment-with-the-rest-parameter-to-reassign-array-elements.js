// const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
// console.log(a, b);
// console.log(arr);

/**
 * We can collect the rest of the array elements into a separate array.
 */

function removeFirstTwo(list) {
  const [a, b, ...shorterList] = list;
  return shorterList;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);