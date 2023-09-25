let contacts = [
  {
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk" 
  },
  {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
  },
  {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
  }
]

let selectOption = prompt('Select an option:\nShow the first contact -> A\nShow the last contact -> B\nAdd a new contact -> C')

switch(selectOption) {
  case 'A':
    alert(`Name: ${contacts[0].name}\nPhone: ${contacts[0].phone}\nEmail: ${contacts[0].email}`)
    break
  case 'B':
    let lastContact = contacts[contacts.length - 1]
    alert(`Name: ${lastContact.name}\nPhone: ${lastContact.phone}\nEmail: ${lastContact.email}`)
    break
  case 'C':
    let enterName = prompt('Enter name:')
    let enterPhone = prompt('Enter phone:')
    let enterEmail = prompt('Enter email:')
    let newContact = contacts.push({
      name: enterName,
      phone: enterPhone,
      email: enterEmail
    })
    alert(`Name: ${newContact.name}\nPhone: ${newContact.phone}\nEmail: ${newContact.email}`)
    break
  default:
    alert('Please enter a valid value!')
}