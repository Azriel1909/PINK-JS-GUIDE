// > Arrow Functions: It is a shorter from of a function expression. It is composed of: parentheses containing 0 to multiple parameters, if there is only exactly one parameter, the parentheses can be omitted.

// Function Expression

console.log('--------- Function Expression')

let add = function (a,b) {
  return a + b
}

console.log(add(10,9))

// Arrow Function

console.log('--------- Arrow Function')

let add2 = (a,b) => {
  return a + b
}

console.log(add2(10,9))

console.log('--------- Arrow Function: Simplified Version')

let add3 = (a,b) => (a + b)

console.log(add3(10,9))

console.log('--------- Arrow Function: Factorial')

function factorial(n) {
  return n > 1 ? n * factorial(n-1) : 1;
}

console.log(factorial(6))