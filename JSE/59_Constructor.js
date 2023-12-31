// + Constructor and the 'new' keyword

// * Remember: The factory mechanisms is a programming pattern.

// - A constructor, like a factory, is a function that creates and returns an object. It differs from the factory in several respects, 1st, it requieres the use of the keyword 'new' when creating a new object.

// * Constructor names begin with capital letters 

let MyColoredPoint = function (x, y, color) { // * Names of constructor begins with Capital Letter
  let _info = '... Object under construction'
  let _color = color
  console.log(_info)
  this.x = x
  this.y = y
  this.getColor = function () { return _color }
}

let coloredPoint1 = new MyColoredPoint(1, 1, 'pink')
let coloredPoint2 = new MyColoredPoint(1, 2, 'red')
let coloredPoint3 = new MyColoredPoint(1, 3, 'white')
let coloredPoint4 = new MyColoredPoint(1, 4, 'black')

console.log(`Point: (${coloredPoint1.x}, ${coloredPoint1.y})\tColor: ${coloredPoint1.getColor()}`)
console.log(`Point: (${coloredPoint2.x}, ${coloredPoint2.y})\tColor: ${coloredPoint2.getColor()}`)
console.log(`Point: (${coloredPoint3.x}, ${coloredPoint3.y})\tColor: ${coloredPoint3.getColor()}`)
console.log(`Point: (${coloredPoint4.x}, ${coloredPoint4.y})\tColor: ${coloredPoint4.getColor()}`)

console.log(coloredPoint1._color)
console.log(coloredPoint2._color)
console.log(coloredPoint3._color)
console.log(coloredPoint4._color)

// ? Differences

// - No return keyword, the constructor returns automatically the implicitly created object.

// - Because the constructor is a function we can also use the closure here.

// ! The name of the constructor will appear on the console.

console.log(coloredPoint1.constructor.name)

// ? After all we did not define the property of the constructor in our object

console.log(typeof(coloredPoint1.constructor)) // ! Function

// - Let's try the same with an empty object

let emptyObjectTest = {}
console.log(typeof(emptyObjectTest.constructor))  // ! Function

// - The Object Constructor contains some generic properties and methods that can be useful in all objects.

// ! Most of the objects we creates inherit properties from the generic Object constructor object

// + new Object ()

// ? Since Object is the constructor if a generic object, can we use it to create a new object? Of course we can!!

console.log('--------------- New Object')

let emptyObject = new Object()

// * Empty object without out properties but with properties supported by Object

console.log(emptyObject.constructor.name)

let anotherEmptyObject = {}

console.log(anotherEmptyObject.constructor.name)

// ! This means that the objects contain what has been added from the constructor object

// + Object.create method

// - It allows to create an object based on an existing Object (which will be used as a prototype of our new object)

let reallyEmptyObject = Object.create(null)
console.log(typeof(reallyEmptyObject.constructor))

// ! Undefined will appear because there is no property called "constructor" in reallyEmptyObject. This time we created a really empty object

// + Class

// - Another important method for creating objects. It is through the use of classes. It was added in one of the following language editions (ECMA6)