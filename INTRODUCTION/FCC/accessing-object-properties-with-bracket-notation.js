// Bracket notation
// Is used when the property of an object has spaces in its name
const testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

const entreeValue = testObj['an entree'];   
const drinkValue = testObj['the drink'];
console.log(entreeValue);
console.log(drinkValue);    
