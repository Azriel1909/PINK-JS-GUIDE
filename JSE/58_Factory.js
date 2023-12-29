let createdColoredPoint = function(x,y,color) {
  //  ? How to create an object in OOP
  let _info = '... Object under construction'
  let _color = color
  // ? Naming Convention for private methods and variables
  console.log(`Information: ${_info}`)
  return {
    x,
    y,
    getColor() { return _color}
  }
}

// ! ... Object under construction

let coloredPoint1 = createdColoredPoint(1, 1, 'pink')
let coloredPoint2 = createdColoredPoint(1, 2, 'white')
let coloredPoint3 = createdColoredPoint(1, 3, 'black')
let coloredPoint4 = createdColoredPoint(1, 4, 'blue')

console.log(`Point: (${coloredPoint1.x},${coloredPoint1.y})\tColor: ${coloredPoint1.getColor()}`)
console.log(`Point: (${coloredPoint2.x},${coloredPoint2.y})\tColor: ${coloredPoint2.getColor()}`)
console.log(`Point: (${coloredPoint3.x},${coloredPoint3.y})\tColor: ${coloredPoint3.getColor()}`)
console.log(`Point: (${coloredPoint4.x},${coloredPoint4.y})\tColor: ${coloredPoint4.getColor()}`)

// * Each time a function is called, a new environment is created for it, containing among others its local variables. 

// * The variable _info is only used inside the function while it is running. We display its contents on the console and do not return it again. After leaving the function, it will not be needed anymore, so we will not have access to it (we can assume that it is removed).

// ? What happen with _color?

console.log(`Color 1: ${coloredPoint1._color}`) // ! Undefined
console.log(`Color 2: ${coloredPoint2._color}`) // ! Undefined
console.log(`Color 3: ${coloredPoint3._color}`) // ! Undefined
console.log(`Color 4: ${coloredPoint4._color}`) // ! Undefined

// * We refer to _color in the 'getColor()' method of our newly created object. And since the object is returned by a function, it will also exists after the function has finished working.

// ? How will the method get the value of a local variable _color from a function that us already finished?

// * The local variables of the function, which are used by the methods of the returned object, are not deleted. Each call to a function has its own independent environment, just as objects created by a Factory are independent.

// ! This mechanism is called a 'Closure'

// ! The _color is not accessible from the outside, but only with the getColor() method ;)

