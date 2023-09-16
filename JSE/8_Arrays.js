// ARRAYS

// + An array is a complex data type that can be used to store a data collection (arrays only store values, without the associated names or keys).

// ? We use Bracket Notation

let days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];

console.log(days[0])
console.log(days[1])
console.log(days[2])
console.log(days[3])
console.log(days[4])
console.log(days[5])
console.log(days[6])

console.log('----- Modifying Arrays');
console.log(days)
days[0] = 'Mon';
console.log(days)

console.log('----- Empty Arrays');
let myArray = [];
console.log(myArray)
console.log(myArray[0])

console.log('----- Adding Elements');
let animals = [];
animals[0] = 'Panda';
animals[1] = 'Fox';
animals[2] = 'Goat';
animals[3] = 'Hen';
animals[4] = 'Rabbit';

console.log(animals);

console.log('----- Adding Different Elements');
let myArr = ['Ximena', 'Pinki', 30, 'pink@gmail.com', false];
console.log(myArr);

console.log('----- Nested Arrays');
let users = [
  ['Ximena', 'Pinki', 30, 'pink@gmail.com', false],
  ['Eduardo', 'Edu', 50, 'eduardo37@gmail.com', true],
  ['Gonzalo', 'Gonzo', 20, 'gonzo9@gmail.com', false]
]
console.log(users)
console.log(users[0])
console.log(users[0][0])

console.log('----- Object Arrays');

let usersList = [
  {
    name: 'Ximena',
    lastName: 'Toledo',
    surname: 'Pinki',
    age: 50,
    email: 'ximi@gmail.com'
  },
  {
    name: 'Eduardo',
    lastName: 'Castillo',
    surname: 'Eddy',
    age: 40,
    email: 'eddy@gmail.com'
  },
  {
    name: 'Daniel',
    lastName: 'Carrasco',
    surname: 'phantom',
    age: 50,
    email: 'ghost66@gmail.com'
  }
]

console.log(usersList)
console.log(usersList[0])
console.log(usersList[0].name)
console.log(usersList[0].age)

console.log('----- Object Arrays: Adding a new element');

usersList[3] = {
  name: 'Joel',
  lastName: 'Flores',
  surname: 'Joe',
  age: 20,
  email: 'joel@gmail.com'
}

console.log(usersList)

console.log('----- Object Arrays: A little experiment');

let weekDays = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];

console.log(weekDays)
console.log(typeof(weekDays))

// ! Arrays are also treated as a special kind of object. The typeof operator does not distinguish between object types (classes), so it informs us that the weekDays variables contains an object.

// ? If we would like to make sure that the variable contains an array, we can do it using the instanceof operator.

let day = 'Mon'
console.log(typeof(day))
console.log(weekDays instanceof(Array))
console.log(day instanceof(Array))




