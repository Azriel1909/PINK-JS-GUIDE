// > Function: It is separate piece of code, constituting a certain closed logical whole, intended perform a specific task. 

// ? Why do we use functions? 1. To divide the code into some logical independent parts; 2. If you repeat the sequence of instructions in the program in many places, you can close this sequence in a function; 3. Reducing amount of code. 

// - Modularity increases the readability of code

// > Function Declaration

// * Function Statement: it starts with the function keyword followed by the function name, there are parentheses that can optionally have function parameters. After the parentheses comes the function body, which is made form any number of statements (a code block).

function mySuperCoolFunction() {
  console.log('My name Ximena!')
}

// > Example

let temperatures
let sum
let meanTemp

function getMeanTemp() {
  sum = 0
  for(let i = 0; i < temperatures.length; i++) {
    sum += temperatures[i]
  }
  meanTemp = (sum/temperatures.length)
}

// > Calling Functions: To call a function we write the name and follow with parentheses.

temperatures = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21, 20, 19, 17, 16]
getMeanTemp()
console.log(`Mena: ${meanTemp}`)

temperatures = [17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24, 21, 19, 18, 17, 16];
getMeanTemp()
console.log(`Mena: ${meanTemp}`)

// - Usually, functions are declared before they are called, mostly at the beginning of the code (it is a good practice, which increases the readability).