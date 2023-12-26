// > Property Configuration

let contact = {
  _age: 21,
  firstName: 'Ximena',
  lastName: 'Toledo',
  get fullName() {
    return `Full Name: ${this.firstName} ${this.lastName}`
  }, 
  get age() {
    return `Age: ${this._age}`
  },
  set age(number) {
    if (number > 0) this._age = number
  }
}

let keys = Object.keys(contact)
console.log(keys)

let desc1 = Object.getOwnPropertyDescriptor(contact, 'firstName')
console.log(desc1)

// ? The method allow us to retrieve more information about the indicated property of the selected object.

let desc2 = Object.getOwnPropertyDescriptor(contact, 'age')
console.log(desc2)

// ! Setter and Getter Methods do not have Writeable fields in the configuration.

// - We can set our own property configuration using Object.defineProperty method.

let myContact = {}

Object.defineProperty(myContact, '_age', {
  value: 21,
  writable: true,
  enumerable: false,
  configurable: true
})

Object.keys(myContact) // ! It is not returned
console.log(myContact._age)
let desc3 = Object.getOwnPropertyDescriptor(myContact, '_age')
console.log(desc3)

// ? How to change the configuration of this property?

Object.defineProperty(myContact, '_age', {
  value: myContact._age,
  writable: false, // ! We cannot modify the value
  enumerable: false,
  configurable: true // ! If the configurable field is false, you cannot configure or delete the value
})

myContact._age = 109
console.log(myContact._age)
let desc4 = Object.getOwnPropertyDescriptor(myContact, '_age')
console.log(desc4)

// - Objects.keys and for...in loop operate only on properties that are enumerable

// * We can retrieve all fields without paying attention to their configuration, we can use Object.getOwnPropertyNames method. It works similar to Object.keys, but it returns an array of all the keys (property names), regardless of whether they are enumerable or not.

let enumerableKeys = Object.keys(myContact)
let allKeys = Object.getOwnPropertyNames(myContact)
console.log(enumerableKeys)
console.log(allKeys)
