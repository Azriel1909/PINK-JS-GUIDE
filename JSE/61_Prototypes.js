let point = {x:0,y:0}
let coloredPoint = {color: 'pink'}

// + Objects inheritance

coloredPoint._proto_ = point

// - The point object becomes a prototype of coloredPoint object.

// - point has also its own prototype, which is created by default on the basis of the object constructor

// * Trying to refer the property of the coloredPoint Object.

console.log(`property names: ${Object.getOwnPropertyNames(coloredPoint)}`)
console.log(`color: ${coloredPoint.color}`)
console.log(`x: ${coloredPoint.x}`)

// ! JavaScript does not find the field name x in the coloredPoint object and looks for it in the prototype.

// * Trying to change the value of the property we inherited from the prototype.

coloredPoint.x = 900 // ! New Property
console.log(`x: ${coloredPoint.x}`)
console.log(`x: ${point.x}`)
console.log(`property names: ${Object.getOwnPropertyNames(coloredPoint)}`)

// * Let's change the value of one of the properties of the point object
point.y = 900
console.log(`y: ${coloredPoint.y}`)
console.log(`y: ${point.y}`)

// +  _proto_

let figure = {
  // - The method will check if we have a type field in the object, returning either its value or a string
  getType: function(){
    return this.type ? this.type : 'unknown'
  }
}

let circle = {
  type: 'circle',
  center: {x:0,y:0},
  radius: 900
}

// ! Using _proto_ we assign a figure as the prototype of circle

circle.__proto__ = figure

// * Let's call the method getType()

console.log('--------------------') 

console.log(figure.getType())
console.log(circle.getType())

// ? Js does not find the getType method directly in the circle, so it start searching the prototype chain

// + Object.setProtoTypeOf: Associate the target object  with the prototype object

// + Object.getProtoTypeOf: Returns the prototype of the indicated object

Object.setPrototypeOf(circle, figure)
// ? The proto variable refers to the figure object
let proto = Object.getPrototypeOf(circle)

console.log('--------------------') 

console.log(circle.getType())






