// Else estatement
function testElse(val) {
  let result = "";
  // Only change code below this line

  if (val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or Smaller";
  }

  /*
  if (val <= 5) {
    result = "5 or Smaller";
  }
  */

  return result;
}

console.log(testElse(8));
console.log(testElse(4));