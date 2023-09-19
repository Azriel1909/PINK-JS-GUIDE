// String Operators

// + Concatenation Operators: This operator will convert everything to a String if any of the operands is a String type. Finally, it will create a new character string, attaching the right operand at the end of the left operand.

console.log('-------------------')
let myGreeting = 'Hi! Good Morning'
let randomName = 'Ximena'
console.log(myGreeting + ' ' + `${randomName}`)

let sayGoodbye = 'Goodbye!'
let mySentence = 'It is time to say ' + sayGoodbye
console.log(`${mySentence}, Data Type: ${typeof(mySentence)}`)