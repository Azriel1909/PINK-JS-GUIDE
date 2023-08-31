function getIndexToIns(arr, num) {
  return arr.filter(n => num > n).length;
}

getIndexToIns([40, 60], 50);