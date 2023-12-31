// -- Sort Method: This method takes as an argument a function that will compare two elements of the array.

// Example

console.log('----------------- Example')

let numbers = [50, 10, 40, 30, 20]
function compareNumbers(a, b) {
     let retVal = 0
     if (a < b) {
      retVal = -1
     } else if(a > b) {
      retVal = 1
     }
     return retVal
}
let sorted = numbers.sort(compareNumbers)
console.log(sorted)

// My Version

console.log('----------------- My Version')

let myCompareNumbersFunction = (a,b) => {
  let myValue = 0
  return a < b ? myValue = -1:
         a > b ? myValue = 1:
         myValue
}

let mySortedNumbers = numbers.sort(myCompareNumbersFunction)
console.log(mySortedNumbers)

console.log('----------------- Descending Order')

let descendingOrder = (a,b) => {
  let myValue = 0
  return a < b ? myValue = 1:
         a > b ? myValue = -1:
         myValue
}

let descendingOrderNumbers = numbers.sort(descendingOrder)
console.log(descendingOrderNumbers)

console.log('----------------- Operations and Functions Statements')

function myAdd(a,b){
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
      return NaN
  } else {
    return a + b
  }
}

function mySub(a,b){
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
      return NaN
  } else {
    return a - b
  }
}

function myMul(a,b){
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
      return NaN
  } else {
    return a * b
  }
}

console.log(myAdd(10,9))
console.log(myAdd(10,9.9))

console.log(mySub(10,9))
console.log(mySub(10,9.1))

console.log(myMul(10,9))
console.log(myMul(10,9.1))

console.log('----------------- Operations and Arrow Functions')

let myAdd2 = (a,b) => {
  return !Number.isInteger(a) || !Number.isInteger(b) ? NaN : a + b
}

let mySub2 = (a,b) => {
  return !Number.isInteger(a) || !Number.isInteger(b) ? NaN : a - b
}

let myMul2 = (a,b) => {
  return !Number.isInteger(a) || !Number.isInteger(b) ? NaN : a * b
}

console.log(myAdd2(10,9))
console.log(myAdd2(10,9.9))

console.log(mySub2(10,9))
console.log(mySub2(10,9.9))

console.log(myMul2(10,9))
console.log(myMul2(10,9.9))

console.log('----------------- Callback Function')

let action = function(callback, num1, num2) {
  return callback(num1, num2)
}

// let action2 = (callback, num1, num2) => callback(num1, num2)

console.log(action(myAdd2, 10, 9))
console.log(action(mySub2, 10, 9))
console.log(action(myMul2, 10, 9))


console.log('----------------- setInterval, clearInterval and setTimeout')

// let counter = 1

// let intervalID = setInterval(function() {
//   console.log(counter++)
// }, 2000);

console.log('----------------- Fibonacci Function')

function myFibonacci(n) {
  let mySuperCoolValue = 0
  if (n != 0) {
    if (n === 1) {
      mySuperCoolValue = 1
    } else {
      mySuperCoolValue = myFibonacci(n-1) + myFibonacci(n-2)
    }
  }
  return mySuperCoolValue
}

console.log(myFibonacci(4))
console.log(myFibonacci(7))

let myFib = (n) => n == 0 ? 0 : n == 1 ? 1 : myFib(n-1)+ myFib(n-2)

console.log(myFib(4))
console.log(myFib(7))

console.log('----------------- For Loop Version')

// function iterateNumbers() {
//   for(let i = 0; i < 1; i++) {
//     setInterval(function() {
//     console.log(i++)
//     }, 2000);
//   }
// }

console.log('----------------- For Loop Version: Fibonacci')

function Fibonacci(n){
  let term1 = 0
  let term2 = 1
  for(let i = 2; i <= n; i++) {
    let term = term1
    term1 = term2
    term2 += term
  }
  return term2
}

console.log(Fibonacci(4))
console.log(Fibonacci(7))
