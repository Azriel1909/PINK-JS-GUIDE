// - In addition to the regular for loop there are two specific versions

// * For ... Of is dedicated for use with arrays: Here we do not specify the any conditions or number of iterations, as it is performed exactly as many times as there are elements in the dedicated array.

let mySuperCoolValues = [1,2,3,4,5,6,7,8,9,10]
let mySum = 0

// > Simple Version using For Loop

for (let i = 0; i < mySuperCoolValues.length; i++) {
  mySum += mySuperCoolValues[i]
}

console.log(`Total: ${mySum}`)

for (let number of mySuperCoolValues) {
  mySum += number
}

console.log(`Total: ${mySum}`)
