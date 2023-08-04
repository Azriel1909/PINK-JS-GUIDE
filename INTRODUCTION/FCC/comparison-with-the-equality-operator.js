// Equality Operator '=='
/** All these operators return a boolean true or false value
 * the Equality operator compares two values and returns True if they're
 * equivalent or False if they are not.
 */

// Type Coercion
/** In order for JavaScript to compare two different data types (numbers and strings)
1   ==  1  // true
1   ==  2  // false
1   == '1' // true
"3" ==  3  // true
 */


function testEqual(val) {
  if (val == 12) {
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);