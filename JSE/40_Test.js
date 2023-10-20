let contacts = [
  {
    name: "Maxwell Wright",
    phone: "9",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk" 
  },
  {
    name: "Raja Villarreal",
    phone: "7",
    email: "posuere.vulputate@sed.com"
  },
  {
    name: "Helen Richards",
    phone: "19",
    email: "libero@convallis.edu"
  }
]

// - Sort Function by Phone Number

let orderByPhone = (a,b) => {
  return a.phone - b.phone
}

contacts.sort(orderByPhone)
for (let contact of contacts){
  console.log(`Phone: ${contact.phone}`)
}

let orderByName = (a,b) => {
  return a < b ? -1:1
}


function collectedNames(contacts) {
  let names = []
  for (let contact of contacts) {
    names.push(contact.name)
  }
  return names
}

let names  = collectedNames(contacts)
console.log(names.sort())






