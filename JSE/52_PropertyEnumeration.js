// > Property Existence: If we want to check property existence with a specific name we use the notes field.

// ! If tou try to read a non-existent property, the undefined values will be returned.

let myContact = {
  phone: '123-456-7890',
  email: 'asya@gmail.com'
}

if (myContact.notes){
  console.log(myContact.notes)
}

if (!myContact.notes){
  myContact.notes = 'Something really important'
  console.log(myContact.notes)
}