let exitCalculator = false

while (!exitCalculator) {
  let myResult
  let firstNumber = Number(prompt('First number... '))
  let secondNumber = Number(prompt('Second number... '))
  let selectOperation = prompt('Select the operation:\n+\n-\n*\n/\nOr select Q to exit.')
  if (firstNumber !== null && firstNumber !== null && selectOperation !== null) {
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
  } else if (selectOperation === 'Q') {
    exitCalculator = true
  }
}




