// > References

const x = 19
// x = 20 // ! TypeError: Assignment to constant variable

const contact = {}
// contact = {
//   email: 'ximena@gmail.com',
//   name: 'Ximena'
// } // ! TypeError: Assignment to constant variable

console.log('-------------- Const Values')

contact.email = 'ximena@gmail.com'
console.log(`Email: ${contact.email}`)

// ? The value can be easily modified or deleted

contact.email = 'xtoledo@gmail.com'
console.log(`Email: ${contact.email}`)
delete contact.email
console.log(`Email: ${contact.email}`)
