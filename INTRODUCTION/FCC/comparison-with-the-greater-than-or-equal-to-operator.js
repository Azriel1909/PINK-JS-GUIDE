/** Comparison with the Greather Than or Equal to Operator >=
  6   >=  6  // true
  7   >= '3' // true
  2   >=  3  // false
  '7' >=  9  // false 
 * */ 

function testGreaterOrEqual(val) {
  if (val >= 20) {  
    return "20 or Over";
  }

  if (val >= 10) {  
    return "10 or Over";
  }

  return "Less than 10";
}

console.log(testGreaterOrEqual(10));