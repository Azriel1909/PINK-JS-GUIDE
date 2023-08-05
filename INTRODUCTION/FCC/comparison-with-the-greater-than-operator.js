/**Comparison with the Greater Than Operator >
 *  5   >  3  // true
 *  7   > '3' // true
 *  2   >  3  // false
 *  '1' >  9  // false
 * */ 

function testGreaterThan(val) {
  if (val > 100) {  // Change this line
    return "Over 100";
  }

  if (val > 10) {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

console.log(testGreaterThan(10));