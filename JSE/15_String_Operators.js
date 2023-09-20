// String Operators

// + Concatenation Operators: This operator will convert everything to a String if any of the operands is a String type. Finally, it will create a new character string, attaching the right operand at the end of the left operand.

console.log('------------------- Concatenation Operators')
let myGreeting = 'Hi! Good Morning'
let randomName = 'Ximena'
console.log(myGreeting + ' ' + `${randomName}`)

let sayGoodbye = 'Goodbye!'
let mySentence = 'It is time to say ' + sayGoodbye
console.log(`${mySentence}, Data Type: ${typeof(mySentence)}`)

// + Compound Assignment Operators

console.log('------------------- Compound Assignment Operators')

let myNewSentence = 'Happy birthday...'
myNewSentence += ' David '
myNewSentence += 2929
console.log(myNewSentence)

// + Comparison Operators: These operators are used to check the equality or inequality of values. All comparison Operators are binary, and all of them return a logical value representing the result of the comparison (True or False).

// * Strings are compared char by char (Unicode Character by Unicode Character using their values)

// ? Strict Equality Operator (===) and Equality Operator (==)

console.log('------------------- Comparison Operators')

console.log('> Strict Equality Operator')
console.log(10 === 5)
console.log(10 === 10)
console.log(10 === 10n)
console.log(10 === '10')
console.log('10' === '10')
console.log('Alice' === 'Bob')
console.log(0 === false)
console.log(undefined === false)

// ! WARNING The Equality Operator requires that they are only equal, and their types are not compared. So if the operands are of different types, the interpreter will try to convert them.

console.log('> Equality Operator')
console.log(10 == 5)
console.log(10 == 10)
console.log(10 == 10n)
console.log(10 == '10')
console.log('10' == '10')
console.log('Alice' == 'Bob')
console.log(0 == false)
console.log(1 == true)
console.log(undefined == false)
console.log(NaN == false)
console.log(NaN == NaN)

// ? There are also complementary operators to those just demonstrate the nonidentity operator !== and the inequality operator !=. The 1st returns True if the operands are not identical, in other words, they are equal but different types. The 2nd returns true if the operands are different.

console.log('> Nonidentity Operator')
console.log(10 !== 5)
console.log(10 !== 10)
console.log(10 !== 10n)
console.log(10 !== '10')
console.log('10' !== '10')
console.log('Alice' !== 'Bob')
console.log(0 !== false)
console.log(1 !== true)
console.log(undefined !== false)
console.log(NaN !== false)
console.log(NaN !== NaN)

console.log('> Inequality Operator')
console.log(10 != 5)
console.log(10 != 10)
console.log(10 != 10n)
console.log(10 != '10')
console.log('10' != '10')
console.log('Alice' != 'Bob')
console.log(0 != false)
console.log(1 != true)
console.log(undefined != false)
console.log(NaN != false)
console.log(NaN != NaN)

// ? We also have operators that allow us to check if one of the operands is bigger than >, smaller than <, bigger than or equal to >=, and smaller or equal to <=.

console.log('> Bigger Than Operator')
console.log(10 > 5)
console.log(10 > 10)
console.log(10 > 10n)
console.log(10 > '10')
console.log('10' > '10')
console.log('Alice' > 'Bob')
console.log(0 > false)
console.log(1 > true)
console.log(undefined > false)
console.log(NaN > false)
console.log(NaN > NaN)

console.log('> Smaller Than Operator')
console.log(10 < 5)
console.log(10 < 10)
console.log(10 < 10n)
console.log(10 < '10')
console.log('10' < '10')
console.log('Alice' < 'Bob')
console.log(0 < false)
console.log(1 < true)
console.log(undefined < false)
console.log(NaN < false)
console.log(NaN < NaN)

console.log('> Bigger Than or Equal to Operator')
console.log(10 >= 10)
console.log(10 >= 5)
console.log(10 >= 10n)
console.log(10 >= '10')
console.log('10' >= '10')
console.log('Alice' >= 'Bob')
console.log(0 >= false)
console.log(1 >= true)
console.log(undefined >= false)
console.log(NaN >= false)
console.log(NaN >= NaN)

console.log('> Smaller Than or Equal to Operator')
console.log(10 <= 10)
console.log(10 <= 5)
console.log(10 <= 10n)
console.log(10 <= '10')
console.log('10' <= '10')
console.log('Alice' <= 'Bob')
console.log(0 <= false)
console.log(1 <= true)
console.log(undefined <= false)
console.log(NaN <= false)
console.log(NaN <= NaN)