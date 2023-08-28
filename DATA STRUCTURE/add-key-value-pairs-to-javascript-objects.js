/**
 * Objects are just collections of key-value pairs
 * They are pieces of data (values) mapped to unique 
 * identifiers called properties (keys)
 */

const tekkenCharacter = {
  player: 'Hwoarang',
  fightingStyle: 'Tae Kwon Doe',
  human: true
};
console.log(tekkenCharacter);

// We can use dot notation
tekkenCharacter.origin = 'South Korea';
console.log(tekkenCharacter);

/**
 * We can use bracket notation
 * Is required if your property has a space in it or if
 * you want to use a variable to name the property
 */
tekkenCharacter['hair color'] = 'dyed orange';
console.log(tekkenCharacter);

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};

foods.bananas = 13;
foods['grapes'] = 35;
foods.strawberries = 27;

console.log(foods);