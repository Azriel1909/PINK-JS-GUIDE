// How to delete properties from a JavaScript Object
const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};

console.log(myDog);
delete myDog.tails;
console.log(myDog);

