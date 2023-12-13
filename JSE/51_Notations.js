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
