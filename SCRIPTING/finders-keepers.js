function findElement(arr, func) {
  let num = 0;
  // 1st We look through the array
  for (let i = 0; i < arr.length; i++) {
    // 2nd We pass the num variable into the function and
    // set it to each index
    num = arr[i];
    if(func(num)) {
      // Prefined function passed
      // Finally we return the num.
      return num;
    }
  }
  return undefined;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);