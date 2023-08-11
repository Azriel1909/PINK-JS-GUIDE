/**
 * The base case tells the recursive function when it no longer
 * needs to call itself. It is a simple case where the return
 * value is already known.
 */

/*
function countup(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1);
    countArray.push(n);
    return countArray;
  }
}
console.log(countup(5));
*/


function countdown(n) {
  // Base case
  if (n <= 0) {
    return [];
  } else {
    const countArray = countdown(n - 1);
    countArray.unshift(n);
    return countArray;
  }
}

console.log(countdown(5));
console.log(countdown(10));


