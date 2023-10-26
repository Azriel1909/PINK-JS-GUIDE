// > Leibniz Formula

let part = 0;
console.time('Leibniz')
for (let k = 0; k < 10000000; k++) {
    part = part + (k % 2 ? -1 : 1) / (2 * k + 1);
}

console.timeEnd('Leibniz')
let pi = part * 4;
console.log(pi); 

// > console.time: It indicates where to start the time measurement.

// > console.timeEnd: It indicates the end of the measurement.