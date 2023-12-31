// One key difference between the spread operator and array destructuring is that the spread operator unpacks all contents of an array into a comma-separated list. Consequently, you cannot pick or choose which elements you want to assign to variables.
let a = 8, b = 6;
[a,b] = [b,a];
console.log(a,b) 