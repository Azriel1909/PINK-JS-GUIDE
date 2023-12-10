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

test.sayHi('Hello')

// > Nested properties

// * If the property of an object is another object that has properties itself, then we are dealing with nested properties.