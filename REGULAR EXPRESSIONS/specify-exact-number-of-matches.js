/**
 * We can specify the lower and the upper number
 * of pattners with specifiers using curly brackets
 * 
 * For example, to match only the word hah with the letter a 3
 * times, your regex would be /ha{3}h/.
 */

let A4 = "haaaah";
let A3 = "haaah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleHA = /ha{3}h/;
console.log(multipleHA.test(A4));
console.log(multipleHA.test(A3));
console.log(multipleHA.test(A100));

let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/;
let result = timRegex.test(timStr);
console.log(result);