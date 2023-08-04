// Strict equality does not perform a type conversion
/**
3 ===  3  // true
3 === '3' // false
 */
function testStrict(val) {
  if (val === 7) {
    return "Equal";
  }
  return "Not Equal";
}

testStrict(10);