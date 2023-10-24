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