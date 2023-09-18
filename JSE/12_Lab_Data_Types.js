let contacts = [
  {
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    number: "Curabitur.egestas.nunc@nonummyac.co.uk" 
  },
  {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    number: "posuere.vulputate@sed.com"
  },
  {
    name: "Helen Richards",
    phone: "0800 1111",
    number: "libero@convallis.edu"
  }
]

console.log(contacts.length)

contacts.push({
  name: "Maisie Haley",
  phone: "0913 531 3030",
  number: "risus.Quisque@urna.ca"
})

console.log(contacts)
console.log(contacts.length)
console.log(contacts[0])
console.log(contacts[3])

console.log('--------------')
let height = 180;
{
let height = 200;
height = height + 10;
}
console.log(height);

console.log('--------------')
let x = 10 / 100;
{
console.log(typeof (x));
}

let x2 = 100 / 0;
console.log(x2)

// let x3 = 20n + 10;
// console.log(x3)

let x4 = "Alice" + 10;
console.log(x4)

let x5 = "abcdefg".slice(2, 4)
console.log(x5)