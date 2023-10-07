// > Parameters: These are names separated by commas, placed in parentheses after the function name. Each parameter inside the function will be treated as a local variable.

// * Arguments: The values given during the called, arguments, if there is more than one, are separated by commas and must be passed in the same order as the parentheses we defined in the function declaration. 

function addValues(num1, num2){ // ! Parameters
  return num1 + num2
}

let result = addValues(10,9) // ! Arguments
console.log(`Result: ${result}`)