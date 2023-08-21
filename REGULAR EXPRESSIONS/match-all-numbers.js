/**
 * The shortcut to look for a digit character is \d.
 * This is equal to the character class [0-9] which looks
 * for a single character of any number between 0 and 9.
 * 
 */

let movieName = "2001: A Space Odyssey";
let numRegex = /\d/ig;
let result = movieName.match(numRegex).length;