// > Conditional Statements or Flow Control Statements

// * The if Statement

let userAnswer = confirm('Are you tired?')
console.log(userAnswer)

if (userAnswer) {
  alert('The user us tired!')
}

// it returns true if the user click on the Ok button

let unitPrice = 19
let somePieces = prompt('How many pieces do you want to order?', 0)

if (somePieces > 0) {
  let total = unitPrice * somePieces
  console.log(`Total: ${total}`)
}

// console.log(total) // Total is not defined (Uncaught Error)

let myUserAge = 24
let isMale = false
let points = 900
let cartValue = 299
let shippingCost = 9.99

if (myUserAge > 18) {
  if (cartValue >= 300 || points >= 500) {
    shippingCost = 0
  } 
}

console.log(shippingCost)

// ! Another simple way!

if (myUserAge > 18 && (cartValue >= 300 || points >= 500)) {
  shippingCost = 0
}

console.log(shippingCost)

// * The If...Else Statement

let myUserIsHappy = confirm('Are you happy?')

if (myUserIsHappy) {
  console.log('You are happy, yeah!')
} else {
  console.log('You are sad!')
}