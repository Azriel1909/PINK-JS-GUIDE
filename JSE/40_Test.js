let contacts = [
  {
    name: "Maxwell Wright",
    phone: "01917196495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk" 
  },
  {
    name: "Raja Villarreal",
    phone: "08663982895",
    email: "posuere.vulputate@sed.com"
  },
  {
    name: "Helen Richards",
    phone: "08001111",
    email: "libero@convallis.edu"
  }
]

// - Sort Function by Phone Number

let orderByPhone = (a,b) => {
  return a.phone - b.phone
}

for (let n of contacts){
  n = contacts.sort(orderByPhone)
  console.log(`Phone: ${n.phone}`)
}

let orderByName = (a,b) => {
  return a < b ? -1:1
}






