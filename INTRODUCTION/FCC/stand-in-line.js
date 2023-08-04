// A Queue is an abstract Data Structure whre items are kept in order.
// New items can be added at the back of the queue
// Old items are taken off from the front of the queue

function nextInLine(arr, item) {
  arr.push(item);
  item = arr.shift(item);
  return item;
}

let testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));