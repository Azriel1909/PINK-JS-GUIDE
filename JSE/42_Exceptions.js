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