// > Local Variables: Variables that are declared in some limited scope and are not visible in the whole program.

let temperatures
let sum // * Global Variable
let meanTemp

function getMeanTemp() {
  sum = 0 // * Local Variable Declaration
  for(let i = 0; i < temperatures.length; i++) {
    sum += temperatures[i]
  }
  meanTemp = (sum/temperatures.length)
}


temperatures = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21, 20, 19, 17, 16]
getMeanTemp()
console.log(`Mena: ${meanTemp}`)

temperatures = [17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24, 21, 19, 18, 17, 16];
getMeanTemp()
console.log(`Mena: ${meanTemp}`)

// > The return Statement: Functions that have been called execute a sequence of instructions contained in their body. The result of this execution may be a certain value that we may want to store in some variable.


// * 1. Return, causes the function to end exactly where this word occurs, even if there are further instructions.

// * 2. Return, allow us to return a given value from inside the function to the place where it was called. 

console.log('----------------------------')

function showAMessage(){
  console.log('My message 1')
  return
  console.log('My message 2')
}

showAMessage()

// * Returns only shows the content of the 1st console.log, returns, interrupt the function.
console.log('----------------------------')

function getTrue(){
  return true;
}
let getSignal = getTrue()
console.log(`Signal - ${getSignal}`)