// > Parameters Validation

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

console.log('----------- Recursion')

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

console.log('----------- Functions as first-class members')


function showMySuperCoolMessage(message) {
  console.log(`Message: ${message}`)
}

let storedMessage = showMySuperCoolMessage

storedMessage('Hi! My name is Ximena')
console.log(`Type: ${typeof(storedMessage)}`)

// ! When we assign a function to a variable, we do not use a function call operator.

function justSayHi(){
  return 'Hello!'
}

console.log('----------- Functions as first-class members')

let a = justSayHi() // Assign the result of function call
console.log(a)
console.log(typeof(a))

let b = justSayHi // ! Assign a function, reference to the function
console.log(b)
console.log(typeof(b))

console.log('----------- Functions as first-class members')

function add(a,b){
  return a + b
}

function multiply(a, b) {
  return a * b
}

function operation(someFunction, first, second){
  return someFunction(first, second)
}


console.log(`Operation: ${operation(add, 10, 20)}`)
console.log(`Operation: ${operation(multiply, 10, 20)}`)

// ? The operation function takes as its first argument the function (parameter func) and calls it with the other two arguments passed (parameters first and second).

// > Functions expressions: To store a function in a variable or pass it as an argument to call a function, you do not necessarily have to declare it previously ans use its name.

console.log('----------- Functions Expressions')

function addition(a, b) {
  return a + b
}

let myAddition = addition
console.log(myAddition(10,20)) 
console.log(addition(10,20))

// ? We can shorten this notation and declare the function by sorting it in a variable, this form of defining a function is called Function Expression, because the function has a name.

console.log('----------- Functions Expressions')

let mySecondAddition = function secondAddition(a,b){
  return a + b
}

console.log(mySecondAddition(10,20))
// console.log(secondAddition(10,20)) // ! Not defined

// > Anonymous Function: An unnamed function

console.log('----------- Functions Expressions ans Anonymous Functions')

function mySuperCoolOperation(someFunction, first, second){
  return someFunction(first, second)
}

let myThirdAddition = function thirdAddition(a,b){
  return a + b
}

console.log(mySuperCoolOperation(myThirdAddition, 10, 20))
console.log(mySuperCoolOperation(function(a,b){
  return a*b
}, 10, 20))

