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

let exitContactList = false

while (!exitContactList) {
  
  let selectOption = prompt('Select an option:\nShow the first contact -> A\nShow the last contact -> B\nShow All contacts -> C\nAdd a new contact -> D\nExit -> E')

  switch(selectOption) {
    case 'A':
    case 'a':
      alert(`Name: ${contacts[0].name}\nPhone: ${contacts[0].phone}\nEmail: ${contacts[0].email}`)
      break
    case 'B':
    case 'b':
      let lastContact = contacts[contacts.length - 1]
      alert(`Name: ${lastContact.name}\nPhone: ${lastContact.phone}\nEmail: ${lastContact.email}`)
      break
    case 'C':
    case 'c':
      for (let contact of contacts){
        alert(`Name: ${contact.name}\nPhone: ${contact.phone}\nEmail: ${contact.email}`)
      }
      break
    case 'D':
    case 'd':
      let enterName = prompt('Enter name:')
      let enterPhone = prompt('Enter phone:')
      let enterEmail = prompt('Enter email:')
      contacts.push({
        name: enterName,
        phone: enterPhone,
        email: enterEmail
      })
      alert(`Name: ${enterName}\nPhone: ${enterPhone}\nEmail: ${enterEmail}`)
      break
    case 'E':
    case 'e': 
      exitContactList = true
      break
    default:
      alert('Please enter a valid value!')
  }
}