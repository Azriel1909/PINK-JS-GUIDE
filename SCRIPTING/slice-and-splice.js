function frankenSplice(arr1, arr2, n) {
  const copiedArr = arr2.slice();
  copiedArr.splice(n, 0, ...arr1)
  // Insert items at n position
  // Do not delate items
  // Then we add arr1
  return copiedArr;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);