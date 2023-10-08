// > Parameters Validation:
let temperatures
let sum
let meanTemp

function getMeanTemp() {
  sum = 0
  for(let i = 0; i < temperatures.length; i++) {
    sum += temperatures[i]
  }
  meanTemp = (sum/temperatures.length)
}

// console.log(getMeanTemp(10)) // ! NaN
// console.log(getMeanTemp([10,30])) // ! 20

// > Recursion: Referring a function to itself (but with a different argument). It is a mechanism that allows simplify the formal notation of many mathematical functions and present them in an elegant form.

function factorial(n){
  let result = 1
  while (n > 1) {
    result *= n
    n--
  }
  return result
}

let num = 6

console.log(`Factorial of ${num}: ${factorial(num)}`)

// ? Note: In this case we use iterative approach to calculate the factorial, we use a loop in which, during each iteration we multiply the previous result by another element of the sequence.

// * The iterations are separated to the last significant element of the sequence.

function factorial2(n){
  return n > 1 ? n * factorial2(n - 1): 1
}

console.log(`Factorial of ${num}: ${factorial2(num)}`)

// > Functions at 1st-class members: Functions can be treated as any data, which can be stored in variables passed as arguments to other functions.

// Example

function showMySuperCoolMessage(message) {
  console.log(`Message: ${message}`)
}

let storedMessage = showMySuperCoolMessage

storedMessage('Hi! My name is Ximena')
console.log(`Type: ${typeof(storedMessage)}`)