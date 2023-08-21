/**
 * We can specify the lowe number of pattners with no upper limit.
 * For example, to match only the string hah with the letter a appearing
 * at least 3 times, your regex would be /ha{3,}h/.
 */

let A4 = "haaaah";
let A2 = "haah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleA = /ha{3,}h/;
console.log(multipleA.test(A4));
console.log(multipleA.test(A2));
console.log(multipleA.test(A100));

let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/;
let result = haRegex.test(haStr);
console.log(result);