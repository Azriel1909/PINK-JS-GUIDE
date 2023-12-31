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

// * Let's trying to refer a non-existent variable.

console.log('------------ Non-Existent')

let c
try {
  // c = d
  // console.log(`Try block: ${c}`)
  // ! It interrupts the program in the try block!
} finally {
  console.log(`Finally block: ${c}`)
}
console.log(`Outside: ${c}`)


// - The finally block can be used together with the catch block, as both of them are optional, but least one of then is required by the try block, and if none of them is present, a SyntaxError is thrown.

console.log('------------ Try + Catch + Finally')

let e = 10 
try {
  e = f
} catch (error) {
  console.log(`Catch block: ${error}`)
} finally {
  console.log(`Finally block: ${e}`)
}
console.log(`Outside: ${e}`)

// ? Why should we use a Finally block? The Finally will be executed even when an error is thrown from the catch block.

console.log('------------ Finally Block')

let g = 10
try {
  g = h
} catch (error) {
  // console.log(h)
} finally {
  console.log('Finally block!')
}

console.log('------------ Nested Exceptions')

let i = 9
try {
  i = j
} catch (error) {
  try {
    console.log(j)
  } catch {
    console.log('Second catch block!')
  }
} finally {
  console.log('Finally!')
}

console.log('------------ Throw Statement and custom errors')

// ! An exception that we throw will cause the program to react in the same way as the original Js Exceptions (it will stop the execution).

// console.log('Start')
// throw 100 // It causes the program to stop.
// console.log('end')

console.log('Start')
try {
  throw 100
} catch (error) {
  console.log(`Error: ${error}`)
}
console.log('end')

function myFactorial(n) {
  if ( n > 20) {
    throw new RangeError('Max value 20.')
  }
  let result = 1
  for(; n > 1; n--){
    result = result * n
  }
  return result
}

console.log(myFactorial(3))
console.log(myFactorial(5))
console.log(myFactorial(8))
console.log(myFactorial(20))

try {
  console.log(myFactorial(1000))
} catch (error) {
  console.log(`Error: ${error}`)
}
