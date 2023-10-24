// The instanceof returns a boolean, the expression will return true if the error variable does indeed hold type Reference error, and false it it does not.

// let result = error instanceof ReferenceError

let a = -9

try {
  a = b
} catch (error) {
  if (error instanceof ReferenceError) {
    console.log('Reference Error, reset a to -9.')
    a = -9
  } else {
    console.log(`Error: ${error}`)
  }
}
console.log(a)

// ? It is important to know that any variable that gets declared using the let keyword inside a try block is not accessible in the catch block.

// > Finally Statement: It can be used with or without the catch block , and it is always executed after try and catch blocks.

let b = 10
try {
  b = 5
  console.log(`Try block: ${b}`)
} finally {
  console.log(`Finally block: ${b}`)
}
console.log(`Outside: ${b}`)

// - The new value has been stored, without calling and error, in variable a. Then the content of the finally block is executed on the console. The program continues after leaving the finally block, displaying our variable again.