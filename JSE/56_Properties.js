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

Object.keys(myContact)
console.log(myContact._age)
let desc3 = Object.getOwnPropertyDescriptor(myContact, '_age')
console.log(desc3)