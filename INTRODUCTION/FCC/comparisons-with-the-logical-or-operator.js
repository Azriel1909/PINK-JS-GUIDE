/**Logical Or Operator || (pipe symbol)
 * it returns true if either of the operands is true.
 */

function testLogicalOr(val) {
  /*
  if (val) {
    return "Outside";
  }

  if (val) {
    return "Outside";
  }
  */
  if (val < 10 || val > 20 ) {
    return "Outside";
  }
  return "Inside";
}

console.log(testLogicalOr(15));
console.log(testLogicalOr(21));