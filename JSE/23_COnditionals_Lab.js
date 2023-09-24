// * Exercise 1

let myNumber = prompt('Input a number...')

if(myNumber > 90 && myNumber < 110) {
  alert('Bingo!')
} else {
  alert('Miss!')
}

// * Exercise 2

let mySecondNumber = prompt('Input a number...')

let result = (mySecondNumber > 90 && mySecondNumber < 110) ? 
alert('Bingo!') : alert('Miss!')

// * Exercise 3

let firstNumber = Number(prompt('First number: '))
let secondNumber = Number(prompt('Second number: '))
let selectOperation = prompt('Select the operation:\n+\n-\n*\n/')
let myResult

switch(selectOperation) {
  case '+':
    myResult = firstNumber + secondNumber
    alert(`${firstNumber} + ${secondNumber} = ${myResult}`)
    break
  case '-':
    myResult = firstNumber - secondNumber
    alert(`${firstNumber} - ${secondNumber} = ${myResult}`)
    break
  case '*':
    myResult = firstNumber * secondNumber
    alert(`${firstNumber} * ${secondNumber} = ${myResult}`)
    break
  case '/':
    myResult = firstNumber / secondNumber
    alert(`${firstNumber} / ${secondNumber} = ${myResult}`)
    break
  default:
    alert('Please enter a valid value!')
}
