/**
 * Do... While Loop
 * It is called a do...while Loop because will 1st do one pass of
 * the code inside the loop no matter what, and then continue to run
 * the loop while. 
 */

const myArray = [];
let i = 10;

/*
while (i < 5) {
  myArray.push(i);
  i++;
}
*/


/**
 * Do...While loop ensures that the code inside the loop will run
 * at least once. 
 */

do {
  myArray.push(i);
  i++;
} while(i < 5);

console.log(myArray);

