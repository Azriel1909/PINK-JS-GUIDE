// * Node js Debugger

function outer(){
  let functionName = 'outer'
  let str = inner()
  return str
}

function inner() {
  let functionName = 'inner'
  return 'Hi!'
}

console.log('Before outer() call')
console.log(outer())
console.log('After outer() call')

/**
 * node inspect myscript.js
 * cont - c - continue
 * next - n
 * step - s
 * out - o
 * pause
 */

/**
 * Step Into: (take all instructions) treating the function as a set of instructions, which we want to execute separately.
 * Step Over: (program flow) treating the function call as something indivisible.
 * Step out:  It resumes program operation by executing successive commands until the current function is exited to the function from which it was called.
 */

// > Call Stack: We can see what function we are currently in (functions that are currently active). It is important in case of nested  functions.