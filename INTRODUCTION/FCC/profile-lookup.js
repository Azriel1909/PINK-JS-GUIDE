const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  for(let i = 0; i < contacts.length; i++) { // Inside the array
    if (contacts[i].firstName === name) { // The function should check if name is an actual contact's firstName
      if (prop in contacts[i]) { //  the given property (prop) is a property of that contact.
        return contacts[i][prop];
      } else {
        return 'No such property';
      }
    } 
  }
  return 'No such contact';
}

lookUpProfile("Akira", "likes");
