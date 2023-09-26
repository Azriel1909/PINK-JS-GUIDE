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