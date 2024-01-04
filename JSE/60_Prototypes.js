// + Prototypes: Calls approach

// - Basically means that before we create an new object, we have to define a class (with methods and properties). A class is treated as a kind of template, on which we create object (instances).

// * Inheritance: Based on an existing class, we create a new one, which will contain the properties and method of the base class.

// ? How do we implement inheritance without classes? Using Prototypes

// * Prototype Object Model

// - ECMA6 introduced classes into Js as an alternative to prototypes and constructors.

// + Objects Using Literal Notation
let point = {x:0, y:0} // - Coordinates
let coloredPoint = {color:'pink'} // - Only color

// ! One of the properties that each object inherits is the _proto_ field.

coloredPoint._proto_ = point

// ! _proto_ is considered Obsolete

// * The point object becomes a prototype of the coloredPoint object. point also has its prototype, which is an object created by default on the basis of the Object constructor.

console.log(Object.getOwnPropertyNames(coloredPoint))
console.log(coloredPoint.color)
console.log(coloredPoint.x)

console.log('----------------')

coloredPoint.x = 200
console.log(coloredPoint.x)
console.log(point.x)
console.log(Object.getOwnPropertyNames(coloredPoint))

