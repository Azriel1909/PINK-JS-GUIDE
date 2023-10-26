// * Debugger Statement

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
debugger
console.log(outer())
console.log('After outer() call')

