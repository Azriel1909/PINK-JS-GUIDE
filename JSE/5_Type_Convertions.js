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

// + Conversions to String: String Interpolation. 

console.log("--> Conversions to String");

console.log("----");
let myNewStr = "Ximena Toledo";
let strStr = String(myNewStr);
console.log(`${typeof(myNewStr)} : ${myNewStr}`); 
console.log(`${typeof(strStr)} : ${strStr}`); 
console.log("----");
let myNewNum = 1990;
let strNr = String(myNewNum);
console.log(`${typeof(myNewNum)} : ${myNewNum}`); 
console.log(`${typeof(strNr)} : ${strNr}`);
console.log("----");
let myNewBool = true;
let strBl = String(myNewBool);
console.log(`${typeof(myNewBool)} : ${myNewBool}`);
console.log(`${typeof(strBl)} : ${strBl}`);
console.log("----");
let myNewBigInt = 129n;
let strBnr = String(myNewBigInt);
console.log(`${typeof(myNewBigInt)} : ${myNewBigInt}`);
console.log(`${typeof(strBnr)} : ${strBnr}`); 
console.log("----");
let myNewUndefined = undefined;
let strUn = String(myNewUndefined);
console.log(`${typeof(myNewUndefined)} : ${myNewUndefined}`);
console.log(`${typeof(strUn)} : ${strUn}`); 
console.log("----");
let myNewNull = null;
let strN = String(myNewNull);
console.log(`${typeof(myNewNull)} : ${myNewNull}`); 
console.log(`${typeof(strN)} : ${strN}`);

// + Conversions to Number : The string can also contain numbers in hexadecimal, octal, and binary format (0x, 0o or 0b). For any string that cannot be converted to a special value, NaN is returned.

// ! A BigInt can also be converted to a Number, but BigInt can store much bigger values that a Number, so for large values, part of them can

// ! The Boolean true is converted to 1, and false to 0.

// ! The Undefined value will result in NaN

// ! The Null value will result in 0

console.log("--> Conversions to Number");

console.log(Number(42)); 
console.log(Number("11")); 
console.log(Number("0x11"));
console.log(Number("0o11")); 
console.log(Number("0b11")); 
console.log(Number("12e3")); 
console.log(Number("Infinity"));
console.log(Number("text"));
console.log(Number(14n)); 
console.log(Number(123456789123456789123n)); 
console.log(Number(true)); 
console.log(Number(false)); 
console.log(Number(undefined)); 
console.log(Number(null));

// + The value false is always returned for: 0, NaN, Empty String, undefined and Null

console.log("--> Conversions to Boolean");

console.log(Boolean(true));      // -> true
console.log(Boolean(42));        // -> true
console.log(Boolean(0));         // -> false
console.log(Boolean(NaN));       // -> false
console.log(Boolean("text"));    // -> true
console.log(Boolean(""));        // -> false
console.log(Boolean(undefined)); // -> false
console.log(Boolean(null));      // -> false