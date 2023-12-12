// > Primitive data types

console.log(typeof(9.9))
console.log(typeof('Ximena Toledo'))
console.log(typeof(false))

let myFloat = 9.5
myFloat = myFloat/2
console.log(`Result: ${myFloat}\nData type: ${typeof(myFloat)}`)

// -- Characteristics of Primitive Data Types

// * They are not complex
// * They are always one specific
// * There is a simple value in a variable

// ! Arrays in JavaScript are also objects, even functions are objects. Everything except a primitive type is an object.

// > Types

let mySuperCoolValue = 9
let b = true
let myStr = 'Ximena Toledo'
let myArr = [1,2,3,4,5,6,7,8,9,0]
let myObj = {
  x: 19,
  y: 29
}

let myFunction = function(arg){
  console.log(arg)
}

myFunction(123)

// > OBjects properties

let test = {
  id: 19,
  single: false,
  name: 'Ximena Toledo',
  contact: {
    x: 'ximena@gmail.com',
    y: 123
  },
  sayHi: function(arg) {
    console.log(arg)
  }
}

console.log('---------------------------')

test.sayHi('Hello')

// > Nested properties

// * If the property of an object is another object that has properties itself, then we are dealing with nested properties.

// > A function as a property type - a method

// ? A function that is the property of an object will be called a method. Methods can be treated as their characteristic behavior, or ways of changing the state of an object.

let point = {
  x: 0,
  y: 0,
  moveHorizontally: function(distance){
    this.x = this.x + distance
  },
  moveVertically: function(distance){
    this.y = this.y + distance 
  }
}

console.log('---------------------------')

console.log(point.x)
point.moveHorizontally(90)
console.log(point.x)

// ? This: it indicates the object we are in.

// > Adding a new property: Objects can change dynamically during their lifetime.

let myContact = {
  phone: '123-456-7890',
  email: 'asya@gmail.com'
}

myContact.firstName = 'Asya'
myContact.lastName = 'Yilmaz'

console.log('---------------------------')

console.log(`First Name: ${myContact.firstName}\nLast Name: ${myContact.lastName}\nPhone: ${myContact.phone}\nEmail: ${myContact.email}`)

// ! A non-existing property of an object is treated as undefined and not as null.

console.log(myContact.name) // Undefined

// > Modifying a property: By default there are no restrictions on modifying the values placed in object properties.

myContact.email = ['asya01@gmail.com', 'yilmax.asya@gmail.com']

// ! If we know that one of these address is private and the other is for business purpose, it would be more logical to save them as an object.

console.log('---------------------------')
console.log(`Email: ${myContact.email}`)

// > Overwriting the property

console.log('---------------------------')

myContact.email = {
  personal: 'asya01@gmail.com',
  work: 'yilmax.asya@gmail.com'
}

console.log(`Personal email: ${myContact.email.personal}\tWork email: ${myContact.email.work}`)

// > Delinting a property: We use it to indicate the property that is to disappear the object.

delete myContact.email.personal
console.log(myContact.email)
console.log(myContact.email.personal)