// > Other ways to create objects

// -- Factory: This is the name given to functions that create and return objects.  In javaScript, 'factory' is a programming pattern rather than a mechanism of the language itself.

// - Idea: We create a function that will return a new object of our defined types every time it is called.

let myPoint = function(x,y) { // ! This is the factory
  let obj = {} // ! We create an empty object
  obj.x = x // ! Adding the properties
  obj.y = y // ! Adding the properties
  return obj // ! Create the object
}

let myPointA = myPoint(1,1)
let myPointB = myPoint(1,2)
let myPointC = myPoint(1,3)
let myPointD = myPoint(1,4)

console.log(`A (${myPointA.x},${myPointA.y})`)
console.log(`B (${myPointB.x},${myPointB.y})`)
console.log(`C (${myPointC.x},${myPointC.y})`)
console.log(`D (${myPointD.x},${myPointD.y})`)

// * Let's improve it!

let trackPoint = function(x,y) {
  return {
    x:x,
    y:y
  }
}

// * Let's make it simpler

// - We can insert the arguments into the object without separating them into key and value

let point = function(x,y){
  return{
    x,
    y
  }
}

// * Let's make it shorter

let createPoint = (x,y) => ({x,y})