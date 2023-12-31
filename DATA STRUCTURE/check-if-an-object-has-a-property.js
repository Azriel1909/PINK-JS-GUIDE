/**
 * what if we just wanted to know if an object has a specific property?
 * hasOwnProperty() method
 * in keyword
 */

let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

// console.log(users.hasOwnProperty('Alan'));
// console.log('Alan' in users);

function isEveryoneHere(userObj) {
  return userObj.hasOwnProperty('Alan') &&
  userObj.hasOwnProperty('Jeff') &&
  userObj.hasOwnProperty('Sarah') &&
  userObj.hasOwnProperty('Ryan');
}

console.log(isEveryoneHere(users));