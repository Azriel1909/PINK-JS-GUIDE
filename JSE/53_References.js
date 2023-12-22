// > References

const x = 19
// x = 20 // ! TypeError: Assignment to constant variable

const contact = {}
// contact = {
//   email: 'ximena@gmail.com',
//   name: 'Ximena'
// } // ! TypeError: Assignment to constant variable

console.log('-------------- Const Values')

contact.email = 'ximena@gmail.com'
console.log(`Email: ${contact.email}`)

// ? The value can be easily modified or deleted

contact.email = 'xtoledo@gmail.com'
console.log(`Email: ${contact.email}`)
delete contact.email
console.log(`Email: ${contact.email}`)

// > The Const Object ca be modified

// - According to Js documentation "a constant cannot change through re-assignment and a constant cannot be re-declared". In the case of simple data types seen ideally. In the case of complex data types (arrays and objects) variables and constants do not contain the entire object. They only contain the object reference as an address indicating where the object is really stored.

// ? The const keyword protects only the reference, the address, from change. We cannot change the reference. However, changes inside an object adding a new property, changing a value, etc. do not affect the reference.

// > Comparing Objects

console.log('-------------- Comparing Objects')

var point1 = {x: 10, y:20}
var point2 = {x: 10, y:20}
console.log(point1 === point2)

// - The result is false. Although they have identical properties of the same values, this does not change the fact that they are different objects

let point3 = point1
console.log(point1 === point3)

// ? Here is a reference to the same object

// ? How to check it? Let's do an experiment

point3.z = 90
console.log(point3.z)
console.log(point1.z)

// - Using the reference stores in point3, we modify the object by adding a z field to it. Th change is visible in the point3 and point1 variables, because they contain references to the same object.

// ! JavaScript does not have ready-to-use deep comparison

// > Copying objects

// ? What if we want to copy the contents og the object? We would have to create a new target object, save the reference to a new variable, and copy the properties of the source object to the target one by one.

// - We can use the Object.assign method to take the object as the first argument, to which the fields form other objects will be copied. The second and subsequence arguments will be used as the source of the properties to be copied. If a property with the same name as the source object already exists in the target object, it will be overwritten with a new value (the target is overwritten with the source).

console.log('-------------- Copying Objects')

let pointA = {x: 10, y: 20}
let pointB = pointA // ! Copy reference
let pointC = {}

Object.assign(pointC,pointA)

console.log(`${pointC.x}, ${pointC.y}`) // ! Copy properties into the new object
console.log(pointB === pointA) // ? True
console.log(pointB === pointC) // ? False
console.log(pointA === pointC) // ? False

// ! The source objects, that is, the ones from which we'll copy the properties can be many.

// ! The order is important for the same property names in several source objects

let pointD = {}
Object.assign(pointD, pointA, {z:100})
console.log(`--------------\nx: ${pointD.x}\ny: ${pointD.y}\nz: ${pointD.z}`)

// ? How overwriting properties work

// ! The value from the last, most-right-handed argument 'wins'

var pointE = {}
Object.assign(pointE, pointD, {z: 200, color: 'pink'})
console.log(`--------------\nx: ${pointE.x}\ny: ${pointE.y}\nz: ${pointE.z}`)

// - The alternative to Object.assign is to use the 'spread operator'

let pointF = {x:10, y:20}
let pointG = {...pointF}
let pointH = {...pointF, z: 100}

console.log(`--------------\nx: ${pointG.x}\ny: ${pointG.y}\nz: ${pointG.z}`)
console.log(`--------------\nx: ${pointH.x}\ny: ${pointH.y}\nz: ${pointH.z}`)

// ! The operation can be performed on many objects at the same time.

let pointI = {...pointH, ...{z:200, color:'pink'}}
console.log(`--------------\nx: ${pointI.x}\ny: ${pointI.y}\nz: ${pointI.z}\nColor: ${pointI.color}`)

//let pointI = {...pointH, z: 200, color: 'pink'} // - We produce the same effect

// > Sallow Cloning Vs. Deep Cloning

// - Shallow Cloning does not copy nested objects, operating only in the references.

let circle1 = {
  radius: 100,
  center: {
    x:100,
    y:100
  }
}

let circle2 = {...circle1} // ! Shallow copied (copies only the reference)
console.log(`---------\nr: ${circle1.radius}\nx: ${circle1.center.x}`)
circle1.radius = 200
circle1.center.x = 200
console.log(`---------\nr: ${circle1.radius}\nx: ${circle1.center.x}`)
console.log(`---------\nr: ${circle2.radius}\nx: ${circle2.center.x}`)
console.log(`circle1 === circle2 ${circle1 === circle2}`)
console.log(`circle1.center === circle2.center ${circle1.center === circle2.center}`)

