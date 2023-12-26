// > Getters and Setters: Functions whose task is to change or check the properties of an object. 

// + Features

/**
 * We declare them using 'set' and 'get'
 * The setter method must take exactly one argument
 * The getter method cannot accept any argument
 * Those methods are seen as ordinary properties whit the same method
 * Setter and Getter methods are not called as functions, they are used to assign value to a property (setter) or to take a value from a property (getter)
 * There may be a pair of setter and getter of the same name, and it will be treated as a property with read and write capabilities
 */

console.log('----------------- Getters and Setters')

let contact = {
  phone: '123-456-789',

  getPhone(){
    return this.phone
  },
  
  setPhone(number){
    this.phone = number
  }

}

console.log(contact.phone)
contact.phone = '111-222-333'
console.log(contact.phone)