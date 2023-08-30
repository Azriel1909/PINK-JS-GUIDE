function findLongestWordLength(str) {
  str = str.match(/\w+/gi);
  let largestString = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i].length > largestString.length) {
      largestString = str[i];
    }
  }
  return largestString.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");