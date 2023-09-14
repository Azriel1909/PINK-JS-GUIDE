// * Literals

console.log("----------- Literals -----------"); 

let MyYear = 2019;
console.log(MyYear);
console.log(2019); 
console.log("Ximena"); 

// ? typeof Operator: It informs the data type indicated

console.log("----------- typeof operator -----------"); 

let MyNum = 2090;
console.log(typeof(MyNum)); // -> number
console.log(typeof(30));    // -> number
   
let MyName = "Ximena Toledo";
console.log(typeof MyName);           // -> string
console.log(typeof "Bob and Alice");  // -> string
   
let typeOfYear = typeof(MyNum);
console.log(typeOfYear);          // -> number
console.log(typeof(typeOfYear));  // -> string

// > In JavaScript there are six primitive data types
// > Boolean, Number, Bigint, String, Symbol and undefined.
console.log("----------- Primitive Data Types -----------"); 

// + Boolean: is a logical data type. It can only take one of two values: True or False.

console.log("--> Boolean"); 
let isDataValid = true;
let isStringTooLong = false;
let isGameOver = false;
continueLoop = true;
   
console.log(false);                 // -> false
console.log(typeof(false));         // -> boolean
console.log(isDataValid);           // -> true
console.log(typeof(isDataValid));   // -> boolean

// + Number: It represents both real numbers and integers.
// ! The integers values should be limited in JavaScript to the range -(253-1) to (253-1)

console.log("--> Number");
const randomYear = 1999;
let delayInSeconds = 0.00019;
let myArea = (16 * 3.14);
let halfArea = myArea/2;
let typeOfRandomYear = typeof(randomYear);

console.log(randomYear);                // -> 1999;
console.log(typeof(randomYear));        // -> number;
console.log(typeof(typeOfRandomYear));  // -> string

// + Number: We can represent hexadecimal numbers (0x...), octal (0o...) or binary (0b...).

let a = 10;     // decimal (default)
let b = 0x10;   // hexadecimal
let c = 0o10;   // octal
let d = 0b10;   // binary
   
console.log(a); // -> 10
console.log(b); // -> 16
console.log(c); // -> 8
console.log(d); // -> 2
   
let x = 9e9;
let y = 123e-4;
console.log(x);
console.log(y); 

console.log("--> Special values");

// + Number: We can use special values which are Infinity, -Infinity and NaN (not a number).

let e = 1 / 0;
let f = -Infinity;
   
console.log(e);          // -> Infinity
console.log(f);          // -> -Infinity
console.log(typeof(e));  // -> number
console.log(typeof(f));  // -> number
   
let g = "it's definitely not a number";
let h = g * 10;
console.log(h);          // -> NaN
console.log(typeof(h));  // -> number

// + BigInt: It is not used too often, it allows us to write integers of virtually any length.

// + We can use mathematical operations on BigInts in the same way as on Numbers, but there is a difference when dividing. 

// ! As the BigInt is an integer type, the division result will always be rounded down to the nearest whole number.

console.log("--> BigInt");

let myBigInt = 1234567890000000000000n;
let myBigInt2 = 1n;
   
console.log(myBigInt);          // -> 1234567890000000000000n
console.log(typeof(myBigInt));  // -> bigint
   
console.log(myBigInt2);         // -> 1n
console.log(7n/4n);             // -> 1n

// ! WARNING: You cannot add a BigInt and a Number to each other.

// let big3 = 1000n + 20;

