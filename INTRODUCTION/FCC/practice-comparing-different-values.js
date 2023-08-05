/* If the values being compared are not of the same type, the equality
operator '==' perform a type conversion, and then evaluate the values.

The strict equality operator '===' will compare both the data type 
and value as is (without converting one type to the other)

typeof - we can determine the data type with this operator

*/

function compareEquality(a, b) {
  if (a === b) {
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");