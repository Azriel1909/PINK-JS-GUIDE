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
