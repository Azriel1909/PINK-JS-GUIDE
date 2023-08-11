/**
 * The parseInt() function parses a string and returns an integer. It takes a second argument for the Radix, which specifies
 * the base of the number in the string. The Radix can be a number between 2 and 36.
 */

function convertToInteger(str) {
  return parseInt(str, 2);
}

convertToInteger("10011");