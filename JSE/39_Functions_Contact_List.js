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

// - Show Contact Function

// > Option A
function showContact(contacts, index){
  // + Checking if the correct arguments are passed
  if (Array.isArray(contacts) && contacts[index]) {
    alert(`Name: ${contacts[index].name}\nPhone: ${contacts[index].phone}\nEmail: ${contacts[index].email}`)
  }
}

// > Option B
function showContact2(contacts, index){
  // + Checking if the correct arguments are passed
  if (contacts instanceof Array && contacts[index]) {
    alert(`Name: ${contacts[index].name}\nPhone: ${contacts[index].phone}\nEmail: ${contacts[index].email}`)
  }
}

// - Show All Contacts Function

function showAllContacts(contacts) {
  if (contacts instanceof Array) {
    for (let contact of contacts){
      alert(`Name: ${contact.name}\nPhone: ${contact.phone}\nEmail: ${contact.email}`)
    }
  }
}

// - Add New Contact Function

function addNewContact(contacts, name, phone, email) {
  if (contacts instanceof Array ) {
    if (name && phone && email) {
      return contacts.push({
        name: name,
        phone: phone,
        email: email
      })
    }
  }
}

// * Sorted Functions

let orderByString = (a,b) => {
  return a < b ? -1:1
}

let orderByNum = (a,b) => {
  return a.phone - b.phone
}

// * End Sorted Functions

// -- Data Collected Functions

function collectedNames(contacts) {
  let names = []
  for (let contact of contacts) {
    names.push(contact.name)
  }
  return names
}

function collectedEmails(contacts) {
  let emails = []
  for (let contact of contacts) {
    emails.push(contact.email)
  }
  return emails
}

function collectedPhones(contacts) {
  let phones = []
  for (let contact of contacts) {
    phones.push(contact.phone)
  }
  return phones
}

// -- End Data Collected Functions

// - Menu Structure

let exitContactList = false

while (!exitContactList) {
  
  let selectOption = prompt('Select an option:\nShow the first contact -> A\nShow the last contact -> B\nShow All contacts -> C\nAdd a new contact -> D\nSearch contact by index -> I\nSort Contact by... -> S\nExit -> E')

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
      showAllContacts(contacts)
      break
    case 'D':
    case 'd':
      let enterName = prompt('Enter name:')
      let enterPhone = prompt('Enter phone:')
      let enterEmail = prompt('Enter email:')
      addNewContact(contacts, enterName, enterPhone, enterEmail)
      break
    case 'I':
    case 'i':
      let selectedIndex = prompt('Enter index:')
      showContact2(contacts, selectedIndex)
      break
    case 'S':
    case 's':
      alert
      let sortedBy = prompt('Select an option:\nSorted by name -> n\nSorted by phone number -> p\nSorted by email address -> e')
      if(sortedBy === 'n' || sortedBy === 'N'){
        let names = collectedNames(contacts)
        alert(names.sort(orderByString))
      } else if (sortedBy === 'p' || sortedBy === 'P') {
        let phones = collectedPhones(contacts)
        alert(phones.sort(orderByNum))
      } else if (sortedBy === 'e' || sortedBy === 'E') {
        let emails = collectedEmails(contacts)
        alert(emails.sort(orderByString))
      } else {
        alert('Please enter a valid value!')
      }
      break
    case 'E':
    case 'e': 
      exitContactList = true
      break
    default:
      alert('Please enter a valid value!')
  }
}

// - End Menu Structure
