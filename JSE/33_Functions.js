let temperatures
let meanTemp

function getMeanTemp(){
  let sum = 0
  let result
  for (let i = 0; i < temperatures.length; i++){
    sum += temperatures[i]
  }

  // * The result variable is actually only used to temporally store the value to be returned

  // result = sum / temperatures.length // * We can skip this

  return sum / temperatures.length
}

temperatures = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21, 20, 19, 17, 16]

// meanTemp = getMeanTemp() // * We can skip this

console.log(`Mean: ${getMeanTemp()}`)

temperatures = [17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24, 21, 19, 18, 17, 16]

// meanTemp = getMeanTemp() // * We can skip this
console.log(`Mean: ${getMeanTemp()}`);