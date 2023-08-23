/**
 * We can search and replace text in a string using replace().
 * on a string. The input for replace() is the 1st regex 
 * pattern you want to search for. The second parameter is the
 * string to replace the match or a function to do something.
 */

let wrongText = "The sky is silver.";
let silverRegex = /silver/;
console.log(wrongText.replace(silverRegex, "blue"));
/**
 * You can also access capture groups in the replacement string
 * with dollar signs ($).
 */
console.log("Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1'));

let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/;
let replaceText = "$3 $2 $1"; 
let result = str.replace(fixRegex, replaceText);