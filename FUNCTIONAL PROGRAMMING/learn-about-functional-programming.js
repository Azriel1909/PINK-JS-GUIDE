// Function that returns a string representing a cup of green tea
const prepareTea = () => 'greenTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

/**
 * Insolation Functions
 * Input -> Process -> Output
 * There is no dependence on the state of the program, which includes
 * global variables that are subject to change.
 * 
 * Pure Functions
 * The same input always give the same output.
 * 
 * Functions With Limited Side Effects
 * Any changes, or mutations, to the state of the program outside the
 * function are carefully controlled.
 * 
 */

const tea4TeamFCC = getTea(40);
console.log(tea4TeamFCC);