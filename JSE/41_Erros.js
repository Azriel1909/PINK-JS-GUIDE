// Errors and Exceptions

// * Edsger W. Dijkstra: "If debugging is the process of removing software bugs, then programming must be the process of putting them in"

// - Grammar = Syntax of programming languages: Set of rules defining the structure of the instructions

// > Natural Languages and Communication Errors: Syntax,Errors, Semantic Errors and Logical Errors.

// > Errors and exceptions in JavaScript

// ! let multiply = (a b) => a + b SyntaxError 
// ! let multipl = (a b) => a + b Uncaught Error: multipl is not defined
// ! let multiply = (a b) => a + b Logical Error

let multiply = (a, b) => a * b
let result = multiply(10,9)
console.log(result)

// * When JavaScript detects syntactic or semantic errors, it generates and throws specific objects containing information about the encountered error.

// > Run Time Errors: They appear while the program is running. We can also call them exceptions.

// > Exception Handling: the correct line is executed, if the next one is incorrect, the program stops in that point.

// - To handle exceptions generated in JavaScript (as in many other languages) we use the try...catch statement.

try {
  console.log('Ximena')
  conole.log('Ximena')
} catch (error) {
  console.log(error.message)
}

// - To handle exceptions generated in JavaScript (as in many other languages) we use the try...catch statement