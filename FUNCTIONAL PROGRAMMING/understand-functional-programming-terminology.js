// Function that returns a string representing a cup of green tea
const prepareGreenTea = () => 'greenTea';

// Function that returns a string representing a cup of black tea
const prepareBlackTea = () => 'blackTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

/**
 * Callbacks
 * They are functions that are slipped or passed into another
 * function to decide the invocation of that function.
 * 
 * 1st Class Functions
 * Functions that can be assigned to a variable, passed into
 * another functions, or return from another function just like
 * any normal value. In js, all functions are 1st class functions.
 * 
 * Higher Order Functions
 * Functions that take a function as an argument, or return a 
 * function as a return value.
 * 
 * Lambda
 * Functions passed in to or returned from another function.
 */

const tea4GreenTeamFCC = getTea(prepareGreenTea,27);
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);

console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);