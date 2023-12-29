let createdColoredPoint = function(x,y,color) {
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

let coloredPoint1 = createdColoredPoint(1, 1, 'pink')
let coloredPoint2 = createdColoredPoint(1, 2, 'white')
let coloredPoint3 = createdColoredPoint(1, 3, 'black')
let coloredPoint4 = createdColoredPoint(1, 4, 'blue')

console.log(`Point: (${coloredPoint1.x},${coloredPoint1.y})\tColor: ${coloredPoint1.getColor()}`)
console.log(`Point: (${coloredPoint2.x},${coloredPoint2.y})\tColor: ${coloredPoint2.getColor()}`)
console.log(`Point: (${coloredPoint3.x},${coloredPoint3.y})\tColor: ${coloredPoint3.getColor()}`)
console.log(`Point: (${coloredPoint4.x},${coloredPoint4.y})\tColor: ${coloredPoint4.getColor()}`)

