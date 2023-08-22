/**
 * Sometimes we want to check for groups of characters using
 * REGEX and to achieve that we use ().
 * 
 * Example
 * If you want to find either Penguin or Pumpkin in a string,
 * you can use the following Regular Expression: 
 * /P(engu|umpk)ing.
 */

let testStr = "Pumpkin";
let testStr2 = "Penguin";
let testRegex = /P(engu|umpk)in/;
console.log(testRegex.test(testStr));
console.log(testRegex.test(testStr2));


let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin|Eleanor)\sRoosevelt|(Franklin D.|Eleanor)\sRoosevelt/; 
let result = myRegex.test(myString); 
console.log(result);
