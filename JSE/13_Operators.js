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

// + Unary Increment and Decrement Operators: The unary increment is '++' and the unary decrement is '--', in both prefix and postfix versions. They allow to increase (increment) or decrease (decrement) the value of the operand by 1.

// ! Warning: The postfix version (the operator on the right of the operand, i++) performs the operation by changing tje value of the variable, but returns the value before the change.

// ! Warning: The prefix version of the operator (the operator is placed before the operand, ++i) performs the operation and returns the new value.


console.log('---------- Unary Increment and Decrement Operators')

let myValue1 = 20;
let myValue2 = 20;

let myV1Increment2 = ++myValue1;
let myV1Decrement2 = --myValue1;
let myV1Increment = myValue1++;
let myV1Decrement = myValue1--;

let myV2Increment2 = ++myValue2;
let myV2Decrement2 = --myValue2;
let myV2Increment = myValue2++;
let myV2Decrement = myValue2--;

console.log(`Normal Value: ${myValue1}`)
console.log(`Prefix Increment Value: ${myV1Increment2}`)
console.log(`Prefix Decrement Value: ${myV1Decrement2}`)
console.log(`Postfix Increment Value: ${myV1Increment}`)
console.log(`Postfix Decrement Value: ${myV1Decrement}`)

console.log(`Normal Value: ${myValue2}`)
console.log(`Prefix Increment Value: ${myV2Increment2}`)
console.log(`Prefix Decrement Value: ${myV2Decrement2}`)
console.log(`Postfix Increment Value: ${myV2Increment}`)
console.log(`Postfix Decrement Value: ${myV2Decrement}`)

// ? Example

let mySpecialNum = 10;

console.log(mySpecialNum)
console.log(mySpecialNum++)
console.log(mySpecialNum)
console.log(++mySpecialNum)
console.log(mySpecialNum)

// + Compound Assignment Operators: Binary Arithmetic Operators can be combined with the assignment operator, resulting in the addition assignment '-=', the multiplication assignment '*=', the division assignment '/=', the remainder assignment '%=', and the power assignment '**='.

// ! Each of these operators takes a value from the variable ro which the assignment is to be made (the left operand) and modifies it by performing an arithmetic operation using the right operand value.

console.log('---------- Compound Assignment Operators ')

let a = 100;

a += 10
console.log(a)

a -= 10
console.log(a)

a *= 10
console.log(a)

a /= 10
console.log(a)

a **= 10
console.log(a)

a %= 10
console.log(a)


// + Prefix Operators (Occurring before the operand)

// + Postfix Operators (Occurring after the operand)

// + Infix Operators (Occurring between the operand)



