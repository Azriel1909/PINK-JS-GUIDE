/**
 * The function String will by default create and return an empty String.
 * The function Number will by default create and return 0.
 * The function Boolean will by default create and return False.
 */

console.log("--> Primitive Construction Functions");
const myStr = String();
const myNum = Number();
const myBool = Boolean();
const myBigInt = BigInt(42);

// ? The function BigInt requieres you to pass some initial value to it, this can be an integer number that will be converted to a BigInt.
// const big2 = BigInt(); // -> Uncaught TypeError: Cannot convert undefined to a BigInt
   
console.log(myStr);       // -> 
console.log(myNum);      // -> 0
console.log(myBool);    // -> false
console.log(myBigInt); // -> 42n
   
// + Conversions: Conversions in JavaScript happen automatically in specific situations, but can also be used explicitly through functions like String() or Number(). 

console.log("--> Conversions");
const myNum2 = 42;
const strFromNum1 = String(myNum2);
const strFromNum2 = String(8);
const strFromBool = String(true);
const numFromStr = Number("312");
const boolFromNumber = Boolean(0);

console.log(myNum2);
console.log(typeof(myNum2));

console.log(strFromNum1);
console.log(typeof(strFromNum1));

console.log(strFromNum2);
console.log(typeof(strFromNum2));

console.log(strFromBool);
console.log(typeof(strFromBool));

console.log(numFromStr);
console.log(typeof(numFromStr));

console.log(boolFromNumber);
console.log(typeof(boolFromNumber));


