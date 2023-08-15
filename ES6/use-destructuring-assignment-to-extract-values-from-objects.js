/**
 * Destructuring Assignment
 * For Neatly assigning values taken directly from an object.
 */

// const user = { name: 'John Doe', age: 34 };

// ES5
// const name = user.name;
// const age = user.age;

// ES6
// const { name, age } = user;
// console.log(name);
// console.log(age);


const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};


const { today, tomorrow } = HIGH_TEMPERATURES;

//const today = HIGH_TEMPERATURES.today;
//const tomorrow = HIGH_TEMPERATURES.tomorrow;

