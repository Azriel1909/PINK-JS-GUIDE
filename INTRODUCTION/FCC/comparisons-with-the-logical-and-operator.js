// Logical AND opertor &&
// * It returns true if and only if the operands to the left and right of it are true.

function testLogicalAnd(val) {

  /* if (val) {
    if (val) {
      return "Yes";
    }
  }
  */
  if ( val <= 50 && val >= 25) {
    return "Yes";
  }
  return "No";
}

console.log(testLogicalAnd(10));