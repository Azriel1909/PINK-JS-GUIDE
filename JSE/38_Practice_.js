// -- Sort Method: This method takes as an argument a function that will compare two elements of the array.

// Example

console.log('----------------- Example')

let numbers = [50, 10, 40, 30, 20]
function compareNumbers(a, b) {
     let retVal = 0
     if (a < b) {
      retVal = -1
     } else if(a > b) {
      retVal = 1
     }
     return retVal
}
let sorted = numbers.sort(compareNumbers)
console.log(sorted)

// My Version

console.log('----------------- My Version')

let myCompareNumbersFunction = (a,b) => {
  let myValue = 0
  return a < b ? myValue = -1:
         a > b ? myValue = 1:
         myValue
}

let mySortedNumbers = numbers.sort(myCompareNumbersFunction)
console.log(mySortedNumbers)

console.log('----------------- Descending Order')

let descendingOrder = (a,b) => {
  let myValue = 0
  return a < b ? myValue = 1:
         a > b ? myValue = -1:
         myValue
}

let descendingOrderNumbers = numbers.sort(descendingOrder)
console.log(descendingOrderNumbers)