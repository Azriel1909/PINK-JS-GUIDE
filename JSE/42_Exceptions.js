// > Basic types of errors

// ! syntaxError: It appears when there are typos in the keywords, unmatching parentheses or brackets.

// iff (true) {
//   console.log('true')
// }

// ! Reference Error: Similar to a semantic error.

// let a = b

// fun()

// ! typeError: Certain value is not of the expected type.

const someConstValue = 9
someConstValue = 10
