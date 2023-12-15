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

// > Computed Key: Bracket notation is more often used when operating on computed keys. It may happen that the property key we want to refer to will be calculated during the operation of the program

console.log('--------------------------------')

let myContact2 = {
  email_1: 'asya01@gmail.com',
  email_2: 'yilmax@gmail.com'
}

for (i=1; i<=2; i++){
  let key =  'email_'+ i
  console.log(key)
  console.log(myContact2[key])
}

// ! JavaScript automatically converts the number to string here.

console.log('--------------------------------')

for(i=1; i<=2; i++){
  let key = 'email_' + i
  console.log(`${key}: ${myContact[key]}`)
}