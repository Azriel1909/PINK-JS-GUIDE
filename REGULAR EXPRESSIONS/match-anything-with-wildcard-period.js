/**
 * The wildcard character '.' will match any one character. Also
 * called dot and period.
 * Example:
 * If you wanted to match hug, huh, hut, and hum,
 * you can use the regex /hu./ to match all four words.
 */

let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
console.log(huRegex.test(humStr));
console.log(huRegex.test(hugStr));

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/;
let result = unRegex.test(exampleStr);
console.log(result);