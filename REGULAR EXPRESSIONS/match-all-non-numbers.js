/**
 * We can also search for non-digits usign \D.
 * This is equal to [^0-9]
 * 
 */

let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/ig;
let result = movieName.match(noNumRegex).length;