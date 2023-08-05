/**
 * Strict Inequality Operator - is the locigal opposite of the strict equality operator. It means 'Strictly Not Equal'
 * 
3 !==  3  // false
3 !== '3' // true
4 !==  3  // true
 * 
 */

function testStrictNotEqual(val) {
  if (val !== 17) { 
    return "Not Equal";
  }
  return "Equal";
}

console.log(testStrictNotEqual(10));