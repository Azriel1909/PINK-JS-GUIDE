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

// ! The ease of Dot Notation often results in us taking shortcuts, assuming that an object should look a certain way. This can have falta consequences, especially for nested objects.

console.log(`Testing Result: ${myContact.notes}`)

console.log('--------------------------')


if("notes" in myContact) { // if true
  console.log(myContact.notes);
}

// > Enumeration

for(x in myContact) {
  console.log(x);
}