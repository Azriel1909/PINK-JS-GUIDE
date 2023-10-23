// > Basic types of errors

// ! syntaxError: It appears when there are typos in the keywords, unmatching parentheses or brackets.

// iff (true) {
//   console.log('true')
// }

// ! ReferenceError: Similar to a semantic error.

// let a = b

// fun()

// ! typeError: Certain value is not of the expected type.

// const someConstValue = 9
// someConstValue = 10

// ! RangeError: When you pass a value to a function that is outside acceptable range.

// let testArray1 = Array(10)
// console.log(testArray1.length)

// let testArray2 = Array(-1)
// console.log(testArray2.length)

// > Try Catch Statement: If we have a piece of code that can possibly be wrong, we can enclose it in the try clause. If there is an error ans an exception is thrown, the code inside the catch block of code will be executed

try {
  let a = b
} catch (e) {
  console.log(`Caught ${e}`)
}
console.log('We handled the exception!')