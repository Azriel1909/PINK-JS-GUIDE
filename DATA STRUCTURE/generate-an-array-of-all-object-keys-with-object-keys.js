/**
 * Object.Keys()
 * We can also generate an array which contains all the keys
 * stored in an object with the Object.keys(). This method takes
 * an object as the argument and returns an array of strings
 * representing each property in the object. 
 */

let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function getArrayOfUsers(obj) {
  return Object.keys(obj);
}

console.log(getArrayOfUsers(users));