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