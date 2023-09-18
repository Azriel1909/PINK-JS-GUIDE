// Main Topic: Operators

// > Operators are symbols that are used to perform certain actions on arguments values Operands.

// > Operands can ve both values and variables.


// + Assignment Operators: This operator assigns the value of the right operand to the left operand.

console.log('---------- Assignment Operator')

const myName = 'Ximena'
console.log(myName)

// ! The order is from right to the left.

let oldYear = 2009;
let newYear = oldYear = 2040;
console.log(newYear)
newYear = oldYear + 1
console.log(newYear)
console.log(oldYear)

// + Arithmetic Operators: This operators express mathematical operations, and they accept numerical values and variables.

console.log('---------- Arithmetic Operator')

// ! Warning: The order is important, we can use parentheses.

console.log(2+2*2)
console.log(2+(2*2))
console.log((2+2)*2)

// * The basic arithmetic operators are addition (+), subtraction (-), multiplication (*), division (/), division remainder (%) and power (**). 

const x = 9;
const y = 10;

const myAddition = x + y;
const mySubtraction =  x - y;
const myMultiplication = x * y;
const myDivision = x / y;
const myDivisionRemainder = x % y;
const myPower = x ** y;

console.log(`Addition: ${myAddition}`)
console.log(`Subtraction: ${mySubtraction}`)
console.log(`Multiplication: ${myMultiplication}`)
console.log(`Division: ${myDivision}`)
console.log(`Division Remainder: ${myDivisionRemainder}`)
console.log(`Power: ${myPower}`)

// + Unary Arithmetic Operator: Operating on a single operand.

console.log('---------- Unary Arithmetic Operator')

let myStr = '12345'
let num1 = +myStr
let num2 = -myStr
let num3 = -num2
let num4 = +'abcdef'

console.log(`Typeof: ${typeof(myStr)}, Value: ${myStr}`)
console.log(`Typeof: ${typeof(num1)}, Value: ${num1}`)
console.log(`Typeof: ${typeof(num2)}, Value: ${num2}`)
console.log(`Typeof: ${typeof(num3)}, Value: ${num3}`)
console.log(`Typeof: ${typeof(num4)}, Value: ${num4}`)

// + Prefix Operators (Occurring before the operand)

// + Postfix Operators (Occurring after the operand)

// + Infix Operators (Occurring between the operand)



