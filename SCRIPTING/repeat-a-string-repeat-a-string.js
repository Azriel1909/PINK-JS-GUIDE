function repeatStringNumTimes(str, num) {
  let someStr = '';
  for (let i = 0; i < num ; i++) {
    someStr += str;
  }
  return someStr;
}

repeatStringNumTimes("abc", 3);