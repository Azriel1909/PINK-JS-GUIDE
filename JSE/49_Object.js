// > Primitive Data types: They are not complex, there is always one specific, simple value in a variable.

// * Number, Boolean, Strings

// > Typeof command

console.log(typeof(2.5))
console.log(typeof('PinkHat Owner, Ximena Toledo'))
console.log(typeof(true))

// * Values can be replaced in variables

let myGrade = 9.0
myGrade = myGrade/2
console.log(myGrade)
console.log(typeof(myGrade))

// ! Note: If we did not explicitly assigned any value to a declared variable, it contains a undefined value by default. The Undefined value is also treated as one of the primitive data type.

// * In JavaScript everything, except a primitive, is an object.

// > Array/Object as a complex type

// * Complex types, such as arrays or objects are Data Collections; An ordered set of different values can be placed in one variable.

// - Element: Individual values placed in a single variable. They are referred to by a number specifying their position in the collection (an index)

let myArray = [10, false, 60, 'Ximena', 34.7, 10]
myArray[5] = myArray[5] * 4
console.log(myArray[0])
console.log(myArray[2])
console.log(myArray[5])
console.log(typeof(myArray))

