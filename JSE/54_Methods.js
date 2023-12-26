// > Methods

let circle = {
  r: 100, // Radius
  c: { // Center
    x:0,
    y:0
  },

  // - Method 1
  /*getType: function() {
    return 'Circle'
  }*/

  // - Method 2
  getType() {
    return 'Circle'
  }
}

// ! In order to call up the method, we usually use Dot Notation

// - Point to the object, name the method, and then add the parenthesis
console.log(circle.getType())

// ! The method can also be called up using the Bracket Notation

console.log(circle['getType']())

// > The 'this' keyword: The easiest way to access the object is by refer it to its name

let mySuperCircle = {
  radius: 100,
  center: {
    x: 0,
    y: 0
  },
  getType() {
    return (typeof mySuperCircle.radius === 'number') ?
    'Circle' : 'unknown'
  }
}

console.log(mySuperCircle.getType())

// ? Where is the flaw?

console.log('------------------- Identifying the flaw')

let figure = {...mySuperCircle}
delete mySuperCircle.radius
console.log(figure.radius)
console.log(figure.getType())

// - The problem is that when the object is copied, deleting the field 'radius' does not affect the field with the same name in the new 'figure' object. So we would expect 'figure.getType' to return 'circle', but instead we get 'unknown'.

// ? What is the solution? 'this' will always contain a reference to the object we are in.

let mySuperCircle2 = {
  radius: 100,
  center: {
    x: 0,
    y: 0
  },
  getType() {
    return typeof this.radius === 'number' ? 'Circle' : 'Unknown'
  }
}

console.log('------------------- Using "This" keyword')

console.log(mySuperCircle2.getType())
let mySuperFigure = {...mySuperCircle2}
delete mySuperCircle2.radius
console.log(mySuperFigure.radius)
console.log(mySuperFigure.getType())

// ! The this keyword is not aplicable to objects

// > Arrow functions

let add = function(a,b) {
  return a + b
}

let add2 = (a,b) => a + b

// * Lexical Scoping
// ! We should not use arrow functions to declare object methods

// > this inside nested objects

let mySuperCircle3 = {
  radius: 100,
  center : {
    x: 0,
    y: 0,
    show(){console.log(`${this.x}, ${this.y}`)}
  }
}
mySuperCircle3.center.show()

let test1 = {
  // ? Here is a reference to the same Object
  point: mySuperCircle3.center
}