// COMPLEX DATA TYPES

// + Objects

// * Record: Is a collection of named fields. Each field has its own name (or key) and value assigned to it.

let myObject = {
  // ? Properties (Key values pairs)
  id: 12345,
  str: 'Ximena Toledo'
};

console.log('----------- Object');
console.log(myObject);

// * A specific property of an object can be referred to with Dot Notation.

console.log('----------- Dot Notation');
console.log(myObject.id);
console.log(myObject.str);

let user1 = {
  name: 'Ximena Toledo',
  surname: 'Pinki',
  age: 30,
  email: 'pinki@gmail.com'
}

console.log('----------- User Object');
console.log(user1)

console.log('----------- Modifying Objects');
user1.name = 'Camilo Franco';
console.log(user1);
user1.surname = 'Franco';
user1.email = 'franco88@outlook.com';
console.log(user1);

console.log('----------- Deleting properties');
delete user1.age;
console.log(user1);