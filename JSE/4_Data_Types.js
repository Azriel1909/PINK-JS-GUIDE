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

// + String: It represents a sequence of characters forming a piece of text. Common operations on text include concatenation, extraction of the substring, and checking the length of the String. 

console.log("--> String");

let myCountry = "Malawi";
let myContinent = 'Africa';
   
console.log(myCountry);           // -> Malawi
console.log(typeof(myCountry));   // -> string
console.log(myContinent);         // -> Africa
console.log(typeof(myContinent)); // -> string

// + If you use double quotes to marl a String, you can place single quotes inside the String, and they will be treated as ordinary characters, this will work in the opposite situation.

let message1 = "I love 'Apfelsaft', apple juice.";
let message2 = 'My lastname is "Toledo".';
   
console.log(message1); 
console.log(message2); 

// ! If you want to put a single or double quote inside the String, you can also ise the 'Backslash' \.

let myMessage1 = 'I love \'Apfelsaft\', apple juice.';
let myMessage2 = "My last name is \"Toledo\".";
   
console.log(message1);
console.log(message2);
let myPath = "C:\\Windows";
console.log(myPath);

// ! If the character strings consists of digits, the automatic conversion will be successful and we will get the result of the arithmetic action as a Number Type Value.

let myPath2 = "C:\\Windows" - "Windows";
// console.log(myPath2); // -> NaN
   
let myTest = "1000" - "100";
console.log(myTest); 
console.log(typeof(myTest));

// ! WARNING: The exception is the "addition operation", which will not be treated as an arithmetic one, but as an attempt to create a new string by combining two input strings. 

let myPath3 = "C:\\" + "Windows";
console.log(myPath3);
console.log(typeof(myPath3));

let myTest2 = "100" + "10";
console.log(myTest2);
console.log(typeof(myTest2));

// * String Interpolation: It allows you to treat a character string as a template, in which you can place values in selected places.

console.log("--> String Interpolation");

let myName2 = "Ximena";
let myItem = "Pizza";
let sentence = `Hi, I am ${myName2} and a love ${myItem} !`;
console.log(sentence);