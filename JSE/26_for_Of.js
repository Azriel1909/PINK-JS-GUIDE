// - In addition to the regular for loop there are two specific versions

// * For ... Of is dedicated for use with arrays: Here we do not specify the any conditions or number of iterations, as it is performed exactly as many times as there are elements in the dedicated array.

let mySuperCoolValues = [1,2,3,4,5,6,7,8,9,10]
let mySum = 0

// > Simple Version using For Loop

for (let i = 0; i < mySuperCoolValues.length; i++) {
  mySum += mySuperCoolValues[i]
}

console.log(`Total: ${mySum}`)

// - For Of Loop Version

for (let number of mySuperCoolValues) {
  mySum += number
}

console.log(`Total: ${mySum}`)

// > The number variable will contain the subsequent elements of the values arrays in each iteration

// - Another Example

console.log('-----------------------------')

let cities = [
  { name: "New York", population: 18.65e6 },
  { name: "Cairo", population: 18.82e6 },
  { name: "Mumbai", population: 19.32e6 },
  { name: "São Paulo", population: 20.88e6 },
  { name: "Mexico City", population: 21.34e6 },
  { name: "Shanghai", population: 23.48e6 },
  { name: "Delhi", population: 25.87e6 },
  { name: "Tokyo", population: 37.26e6 }
];


for (let city of cities) {
  if(city.population > 20e6) {
    console.log(`City Name - ${city.name}\nPopulation - ${city.population}`)
  }
}

// * For ... In is a version of the for Loop that enables us to walk through object fields. For ... In iterates through all fields of the indicated object, placing the names of these fields (or keys) in the variable.

console.log('-----------------------------')

let myUser = {
  name: 'Ximena',
  surname: 'Pinkhat',
  age: 40,
  email: 'ximena@gmail.com'
}

for (let key in myUser) {
  console.log(key)
}

console.log('-----------------------------')

for (let key in myUser) {
  // ! We have to use Bracket Notation instead of Dot Notation
  console.log(`${key}: ${myUser.key}`) // Undefined Value
}

console.log('-----------------------------')

for (let key in myUser) {
  // ! We use Bracket Notation to retrieve the values stored in the fields
  console.log(`${key}: ${myUser[key]}`)
}

// * The Break and Continue Statements

// > The Break Statement is used to termine the execution of a loop or a switch statement.

let i = 0

// An infinitive Loop

while (true){
  console.log(i)
  i++
  if (i>=9){
    break
  }
}

console.log(`Exited the loop with a break - ${i}.`)

// > The Continue Statement can be used in loops but no in the switch statement. It applies to the closest surrounding loop. It does not end the whole loop, but rather starts the next iteration of the loop.

console.log('-----------------------------')

for (let i = 0; i <= 19; i++){
  if (i == 9) {
    continue
  }
  console.log(i)
}
