// > Parameters: These are names separated by commas, placed in parentheses after the function name. Each parameter inside the function will be treated as a local variable.

// * Arguments: The values given during the called, arguments, if there is more than one, are separated by commas and must be passed in the same order as the parentheses we defined in the function declaration. 

function addValues(num1, num2){ // ! Parameters
  return num1 + num2
}

let result = addValues(10,9) // ! Arguments
console.log(`Result: ${result}`)

function getElement(elements, index){
  return elements[index]
}

let names = ['Ximena', 'Ace', 'Volkgan', 'Asya']
let name = getElement(names, 2)
console.log(name)

function getMeanTemp(temperatures) {
  let sum = 0
  for (let i = 0; i < temperatures.length; i++) {
    sum += temperatures[i]
  }
  return sum / temperatures.length
}

let day1 = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21, 20, 19, 17, 16]

console.log(`Day 1 Mean: ${getMeanTemp(day1)}`)

let day2 = [17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24, 21, 19, 18, 17, 16]

console.log(`Day 2 Mean: ${getMeanTemp(day2)}`)
