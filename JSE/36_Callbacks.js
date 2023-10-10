// > Callback Functions: Functions that are passed as arguments to other functions


// - Synchronous Callbacks: It is executed in a strictly defined order resulting from where it is placed among the other instructions.

// * Synchronous Execution: Subsequent instructions are executed in the order which they are place in the code.

let inner = function() {
  console.log('Inner')
}

let outer = function(callback) {
  console.log('Outer 1')
  callback()
  console.log('Outer 2')
}

console.log('Test 1')
outer(inner)
