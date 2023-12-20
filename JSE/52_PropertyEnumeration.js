// > Property Existence: If we want to check property existence with a specific name we use the notes field.

// ! If tou try to read a non-existent property, the undefined values will be returned.

let myContact = {
  phone: '123-456-7890',
  email: 'asya@gmail.com',
  name: 'Asya',
  id: 1
}

if (myContact.phone){
  console.log(`Result: ${myContact.phone}`)
}

console.log('--------------------------')

if (myContact.notes){ // ! No Value
  console.log(`Result: ${myContact.notes}`)
}

console.log('--------------------------')

if (!myContact.notes){ // ! Undefined
  console.log(`Result: ${myContact.notes}`)
}

console.log('--------------------------')

// ? If the field does not exist, it will be automatically created

if (!myContact.notes){
  myContact.notes = 'A really important note!'
  console.log(myContact.notes)
}

console.log('--------------------------')

// > Existence test: It is a good practice to test if a given object field exists before trying to read it.

console.log(`Testing Result: ${myContact.notes}`)

// ! The ease of Dot Notation often results in us taking shortcuts, assuming that an object should look a certain way. This can have fatal consequences, especially for nested objects.

console.log('--------------------------')

myContact.email = {
  personal: 'asya01@gmail.com',
  work: 'yilmax.asya@gmail.com'
}

console.log(`Testing Result: ${myContact.email.private}`) // Exception!

console.log('--------------------------')

// * Checking the calling object and required field exists

if (myContact && myContact.email) {
  console.log(myContact.email.private)
}

console.log('--------------------------')

// * In a simpler form

myContact && myContact.email && console.log(myContact.email.private)

// > Existence Test Using "in": If the field exists, it is returned true (even if the field has no set value)

console.log('--------------------------')

if('notes' in myContact){
  console.log(myContact.notes)
}

// ! The property names is a string.

// > Enumeration 'for ... in': It allows us to enumerate all the fields of an object. Using 'for ... in' we can go through the properties of an object (we go through the names of the properties - Keys).

console.log('--------------------------')

let specialContact = {
  phone: '123-456-789',
  email: 'elbicho@gmail.com',
  id: '1234'
}

for (x in specialContact){
  console.log(x)
  // ! Print Property Name
}

// ? The names of the properties (keys) of the object are assigned to the variable x in turn.

// - To get to the value of a given field, we use Bracket Notation (the key is dynamically calculated and placed in the variable)

console.log('--------------------------')

for(x in myContact){
  console.log(myContact[x])
}

console.log('--------------------------')

for(x in myContact){
  console.log(`${x} : ${myContact[x]}`)
}

// > The 'object.keys' method: Another way to retrieve the names of all the object properties is to use the object.keys method. This method returns an array of properties names, which we can use in any way we want.

console.log('--------------------------')
let myKeys = Object.keys(myContact)

console.log(myKeys)