/**
 * Two distinct principles for functional programming:
 * 1. Don't alter a variable or object - create new variables 
 * and objects and return them if need be from a function.
 * 2. Declare function parameters - any computation inside a 
 * function depends only on the arguments passed to the 
 * function, and not on any global object or variable.
 */

// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

function add(list, bookName) {
  let newArr = [...list];
  newArr.push(bookName);
  return newArr;
  
}

function remove(list, bookName) {
  let newArr = [...list];
  if (newArr.indexOf(bookName) >= 0) {
    newArr.splice(newArr.indexOf(bookName), 1);
    return newArr;
    }
}