/**
 * every()
 * forEach()
 * map()
 */

function greaterThanTen(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(greaterThanTen([2, 12, 8, 14, 80, 0, 1]));


function filteredArray(arr, elem) {
  let newArr = [];
  for(let i = 0; i < arr.length; i++) {
     if (arr[i].indexOf(elem) == -1) {
        newArr.push(arr[i]);
     }
  }
  return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));