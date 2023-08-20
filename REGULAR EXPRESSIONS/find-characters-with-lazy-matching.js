/**
 * A greedy match finds the longest possible part of a string that
 * fits the regex pattern and returns it as a match. The alternative
 * is called a lazy match, which finds the smallest possible part of the
 * string that satisfies the regex pattern.
 * 
 * Example
 * You can apply the regex /t[a-z]*i/ to the string "titanic"
 * 
 * However, you can use the ? character to change it to lazy matching.
 * "titanic" matched against the adjusted regex of /t[a-z]*?i/ returns
 * ["ti"].
 */

let text = "<h1>Winter is coming</h1>";
let myRegex = /<h[<a-z>]*?1>/;
let result = text.match(myRegex);
console.log(result);