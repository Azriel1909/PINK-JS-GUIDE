// > Constructor and the 'new' keyword

// * Remember: The factory mechanisms is a programming pattern.

// - A constructor, like a factory, is a function that creates and returns an object. It differs from the factory in several respects, 1st, it requieres the use of the keyword 'new' when creating a new object.

// * Constructor names begin with capital letters 

let MyColoredPoint = function (x, y, color) {
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

// * Because the constructor is a function we can also use the closure here.