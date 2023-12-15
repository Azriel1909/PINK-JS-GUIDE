// > Bracket Notation: Similar to referencing an array field, except that we do not give the index of an element (the key is a string).

let myContact = {
  phone: '123-456-7890',
  email: 'asya@gmail.com'
}

myContact.email = {
  personal: 'asya01@gmail.com',
  work: 'yilmax.asya@gmail.com'
}


console.log(myContact.phone === myContact['phone'])
console.log(myContact.email.work === myContact['email']['work'])

// > Multi-word Keys: This approach is slightly less intuitive that dot notation. but there are cases where it is only way out.

myContact['first name'] = 'Asya'
// myContact.first name = 'Asya' // SyntaxError
// myContact.'first name' = 'Asya' // SyntaxError
