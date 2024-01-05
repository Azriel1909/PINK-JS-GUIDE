let point = {x:0,y:0}
let coloredPoint = {color: 'pink'}

// + Objects inheritance

coloredPoint._proto_ = point

// - The point object becomes a prototype of coloredPoint object.

// - point has also its own prototype, which is created by default on the basis of the object constructor

// * Trying to refer the property of the coloredPoint Object

console.log(`property names: ${Object.getOwnPropertyNames(coloredPoint)}`)
console.log(`color: ${coloredPoint.color}`)
console.log(`x: ${coloredPoint.x}`)

