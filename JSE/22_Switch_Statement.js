// - The Switch Statement is similar to nested If...Else Statements, but instead of evaluating different expressions, switch evaluates one conditional expression and then tries to match its value to one of the given cases.


let selectOption = prompt('Select an option:\na\nb\nc')
let youWin = false

switch (selectOption) {
  case 'a':
    alert(`Option a: Empty`)
    break
  case 'b':
    alert(`Option b: Gold`)
    youWin = true
    break
  case 'c':
    alert(`Option c: Empty`)
    break
  default:
    alert(`Invalid value ` + String(selectOption))
}

if (youWin) {
  alert('You are the winner!')
}