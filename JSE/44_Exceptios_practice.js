// * Exercise 1

console.log('--------------')

function myDiv(a,b){
  if (b === 0){
    throw new RangeError('Dividing by zero is infinity.')
  }
  return a/b
}
console.log(myDiv(9,3))

try {
  console.log(myDiv(9,0))
} catch (error) {
  console.log(`> ${error}`)
}

// * Exercise 2

console.log('--------------')

let numbers = [10, 40, 0, 20, 50];
for (number of numbers) {
  let maxValue = 1000
  try {
    console.log(myDiv(maxValue,number))
  } catch (error) {
    console.log(`> ${error}`)
  }
}
