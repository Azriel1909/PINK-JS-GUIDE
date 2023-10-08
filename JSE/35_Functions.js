// > Parameters Validation:
let temperatures
let sum
let meanTemp

function getMeanTemp() {
  sum = 0
  for(let i = 0; i < temperatures.length; i++) {
    sum += temperatures[i]
  }
  meanTemp = (sum/temperatures.length)
}

// console.log(getMeanTemp(10)) // ! NaN
// console.log(getMeanTemp([10,30])) // ! 20

// > Recursion

function factorial(n){
  let result = 1
  while (n > 1) {
    result *= n
    n--
  }
  return result
}

let num = 6

console.log(`Factorial of ${num}: ${factorial(num)}`)