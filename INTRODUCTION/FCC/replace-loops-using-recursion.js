/**
 * Recursion is the concept that a function can be expressed in terms
 * of itself. Recursive Functions must have a base case when they return
 * witout calling the fcuntion again.
 */

function sum(arr, n) {
  /*
  let product = 1;
    for (let i = 0; i < n; i++) {
      product *= arr[i];
    }
    return product;
  */
  if (n <= 0) {
    return 0;
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }
}


