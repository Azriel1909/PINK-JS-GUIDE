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

// > An object as a different type of array

// ! An object can be treated as a special kind of array

// * In computer science, arrays of this type are called association arrays (in data structures, they are called maps)

// * We associate an element with a Key, a Key is a simple label (a name), which unique within an object and unambiguously defines the selected element. In objects we called their component elements "properties". Each property will consist of a key (or label) and a value.

// ? The idea of objects comes from observing the surrounding reality. Practically everything in our environment, wether material or abstract is a collection of certain components.

// ! Properties define a given object.

// > The easiest way to create an object

let sampleObject = {
  id: 123456,
  card: 1234,
  name: 'Ximena Toledo',
  isPresent: true,
}

sampleObject.card = sampleObject.card * 2
console.log(sampleObject.id)
console.log(sampleObject.card)
console.log(sampleObject.name)
console.log(sampleObject.isPresent)


// > Literals

console.log('---------------------------- Literal')

// * We can create objects with Literal Notation (initializer notation).

let contact = {}

// * We can add a Property with the Dot Notation.

contact.tel = '123-123-1234'
console.log(contact)
console.log(`Content: ${contact}\nNumber: ${contact.tel}\nData type: ${typeof(contact)}`)

// * In Literal Notation, the properties are separated by commas. A colon is used to separate a property name (key) from a value.

let myContact = {
  tel: '123-456-7890',
  email: 'pinkhat@gmail.com'
}
console.log(myContact)
console.log(myContact.tel)
console.log(myContact.email)

// ? Note: The key is a string. The key can be enclosed in quotation marks, although this is not necessary because JavaScript automatically interprets it as a string.

let myContact1 = {
  'tel num': '123-456-7890',
  // ! If you need a multi-word name, it is better to use Camel Case Notation 
  email: 'pinkhat@gmail.com'
}

console.log(typeof(console)) // Object
console.log(typeof(console.log)) // Function

// > Detecting Objects

// * The JavaScript engine uses a Garbage Collector, which decides for us whether the objects are still needed, and possibly removes them.

