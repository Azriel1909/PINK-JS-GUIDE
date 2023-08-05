// Chaining If Else Statements

function testSize(num) {
  if (num < 5) {
    return 'Tiny';
  } else if (num < 10) {
    return 'Small';
  } else if (num < 15) {
    return 'Medium';
  } else if (num < 20) {
    return 'Large';
  } else {
    return 'Huge';
  }
}

console.log(testSize(4));
console.log(testSize(7));
console.log(testSize(9));
console.log(testSize(14));
console.log(testSize(19));
console.log(testSize(22));
