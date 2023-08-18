/**
If you want to use a function in several different JavaScript files. In order to share it with these other files, you first need to export it.
 */

// Example

/**
export const add = (x, y) => {
  return x + y;
}

// or

const add = (x, y) => {
  return x + y;
}

export { add };

 */


const uppercaseString = (string) => {
  return string.toUpperCase();
}

const lowercaseString = (string) => {
  return string.toLowerCase()
}

export {uppercaseString, lowercaseString };