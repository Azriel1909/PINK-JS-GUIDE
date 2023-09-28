// + Loops: Repeat any fragment of the code as many times as we want.

// * Conditional Statements: They are able to change code behavior, allowing us to decide during the program execution whether a certain piece of code is to be performed or not.

// > While Loop: Iteration

let n = 0
while (n < 100) {
  console.log(n)
  n+=10
}

let gameOver = false
let myCounter = 1

while(gameOver != true) {
  let continueGame = confirm(`${myCounter} - Do you want to continue?`)
  gameOver = continueGame === true ? false : true
  myCounter++
}

// Another way

console.log(!gameOver)

while(!gameOver) {
  gameOver = !confirm(`${myCounter++} - Do you want to continue?`)
}

// + Do ... While Loop: The condition checked before each iteration. The Do While Loop code is always executed at least once before the 1st condition check is done.

do {
  gameOver = !confirm(`${myCounter++} - Do you want to continue?`)
} while(!gameOver)

// Another example

let myCondition = false

while (myCondition) {
  console.log('A While Loop Iteration')
}

do {
  console.log('A While Loop Iteration')
} while(myCondition)

// + The for Loop

/** Structure
for (initialization; condition; increment) {
  block of code
}
 */

for (let i = 0; i < 10; i++) {
  console.log(i);
}