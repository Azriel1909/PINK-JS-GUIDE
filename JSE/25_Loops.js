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

// * The for Loop Initialization Statement: It is executed only once , before the 1st iteration. Usually it is used to initialize a variable that will be used as a loop counter.

// * The for Loop Condition Statement: It is an expression that is evaluated to a Boolean before each loop iteration. If the expression is evaluated to true, the loop will execute its code. In case the condition being evaluated to false, the loop is terminated, and no more iterations will be executed.

// ! The condition statement is also optional, but if left empty, it will be assumed as always true.

// * The for Loop Increment Statement: It is always executed at the end of the current loop iteration, and most of the time it is used to increment or decrement a loop counter that is used in a condition statement. It can be any expression, not only incrementation/decrementation. This can also be left empty.

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// While option 
let j = 0
while (j <= 10) {
  console.log(j)
  j++
}

// ? A typical example of using a for loop, where we know the number of iterations i advance, is when going through the elements of an array.

let mySuperCoolValues = [1,2,3,4,5,6,7,8,9,10]
let mySum = 0

for (let i = 0; i < mySuperCoolValues.length; i++) {
  mySum += mySuperCoolValues[i]
}

console.log(mySum)

// + Loops and Arrays

let mySuperCoolNames = []
let theGameIsOver = false

while(!theGameIsOver) {
  let mySuperCoolName = prompt('Enter your super cool name:')
  if(mySuperCoolName != null) {
    mySuperCoolNames.push(mySuperCoolName)
  } else {
    theGameIsOver = true
  }
}

for (let i = 0; mySuperCoolNames.length; i++) {
  console.log(mySuperCoolNames[i])
}