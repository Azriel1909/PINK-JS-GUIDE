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

console.log('----- Length');

// + The length property is used to get the number of elements of the array.

let userNames = ['Marcos', 'Dylan', 'Roberto', 'Ximena'];
console.log(userNames.length)
console.log(userNames)

userNames[4] = 'Joel'
console.log(userNames.length)
console.log(userNames)

console.log('----- IndexOf');

// + IndexOf method is used to search the array to locate a given value. If the value is found, its index will be returned. The method returns -1 if the element is not found.

console.log(userNames.indexOf('Ximena'))
console.log(userNames.indexOf('Marcos'))

console.log('----- Push');

// + The push method places the element given as its argument at the end of the array.

// ! The length of the array is increased by 1, and the new element is inserted on the right.

console.log(userNames)
console.log(userNames.length)

userNames.push('Karla')
console.log(userNames)
console.log(userNames.length)

console.log('----- Unshift');

// + Unshift methods works similarly to push, the difference being that a new element is added to the beginning of th array.

// ? The array length is increased by 1, all the old elements are moved to the right and the new element is placed in the empty space that has been creating at the beginning of the array.

console.log(userNames)
console.log(userNames.length)

userNames.unshift('Carmen')
console.log(userNames)
console.log(userNames.length)

console.log('----- Pop');

// + The Pop method allows you to remove the last element of the array.

// ? The length of the array is reduced by 1.

console.log(userNames)
console.log(userNames.length)

let poppedName = userNames.pop()

console.log(poppedName)
console.log(userNames)
console.log(userNames.length)

console.log('----- Shift');

// + The Shift method works similarly to Pop, only this time we remove the elemento from the beginning of the array.

console.log(userNames)
console.log(userNames.length)

let shiftedName = userNames.shift()
console.log(userNames)
console.log(userNames.length)
console.log(shiftedName)

console.log('----- Reverse');

// + The Reverse method reverses the order of elements in the array. The 1st element of the original array will become the last, the second last but one, and so on.

console.log(userNames)
console.log(userNames.length)

userNames.reverse()
console.log(userNames)
console.log(userNames.length)

console.log('----- Slice');

// + The Slice method allows you to create a new array from selected elements of the original array. It does not affect the original array.

// ! Combinations

/**
 * 1. One argument larger than zero: All elements from the index given as an argument to the end of the array are copied.
 * 2. Two arguments larger than zero: The element from the index specified as the 1st argument to the element specified as the second argument are copied.
 * 3. Two arguments, 1st positive, second negative: All elements from the specified index to the end of the array are copied, except for the specified number of the last elements (e.g. argument -3 means that we do not copy the last three elements).
 * 4. One negative argument: The specified number of the last elements are copied to the end of the array (e.g. -2 means that you copy the last two elements)..
 */

console.log(userNames)
userNames.push('Karla')
console.log(userNames)
userNames.unshift('Carmen')
console.log(userNames)
console.log(userNames.length)

console.log('------')
let slicedNames_1 = userNames.slice(2)
console.log(slicedNames_1)

console.log('------')
let slicedNames_2 = userNames.slice(1,3)
console.log(slicedNames_2)

console.log('------')
let slicedNames_3 = userNames.slice(0, -1)
console.log(slicedNames_3)

console.log('------')
let slicedNames_4 = userNames.slice(-1)
console.log(slicedNames_4)

console.log('----- Concat');

// + The Concat method creates a new array by attaching elements from the array given as an argument to the original array elements.

console.log(userNames)
let otherNames = ['Christian', 'Asya', 'Mert']
let joinedNames = userNames.concat(otherNames)

console.log(userNames)
console.log(otherNames)
console.log(joinedNames)
