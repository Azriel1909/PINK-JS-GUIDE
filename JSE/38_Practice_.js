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

let intervalID

function printNumbers() {
  if (!intervalID) {
    intervalID = setInterval(myNumbers, 2000)
  }
}

function myNumbers() {
  i = 1
  console.log(i++)
}

printNumbers()
