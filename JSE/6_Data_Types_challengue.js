let b = Boolean(BigInt(Number("1234"))); 
console.log(`${b} [${typeof b}]`); 

let b2 = true + false; 
let n = 100 + 200; 
let bi = 100n + 200n; 
let s = "He" + "llo"; 
let u = undefined + undefined; 

console.log('----')
console.log(`${b2} [${typeof b2}]`);
console.log(`${n} [${typeof n}]`);
console.log(`${bi} [${typeof bi}]`);
console.log(`${s} [${typeof s}]`);
console.log(`${u} [${typeof u}]`);

console.log('----')
let b3 = true + 100;
console.log(`${b3} [${typeof b3}]`);

console.log('----')
const str1 = 42 + +"1";
console.log(`${str1} [${typeof str1}]`);


