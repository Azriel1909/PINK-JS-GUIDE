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
   
console.log(false);               // -> false
console.log(typeof(false));        // -> boolean
console.log(isDataValid);         // -> true
console.log(typeof(isDataValid));  // -> boolean